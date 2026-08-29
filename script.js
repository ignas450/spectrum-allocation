const archiveVersion = new URLSearchParams(window.location.search).get('archive');
const dataPath = archiveVersion
  ? `./archive/${encodeURIComponent(archiveVersion)}/data.json`
  : './data.json';
const response = await fetch(dataPath);
if (!response.ok) throw new Error(`Unable to load spectrum data (${response.status})`);
const fullData = await response.json();
const simplifiedData = fullData.map(band => band.simplified
  ? { ...band, blocks: band.simplified }
  : band);

const container = document.getElementById('spectrums');
const bandFilter = document.getElementById('bandFilter');
const pieChart = document.getElementById('pieChart');
const pieLegend = document.getElementById('pieLegend');
const lookupForm = document.getElementById('channelLookupForm');
const lookupMode = document.getElementById('lookupMode');
const channelNumber = document.getElementById('channelNumber');
const channelBandwidth = document.getElementById('channelBandwidth');
const startFrequency = document.getElementById('startFrequency');
const endFrequency = document.getElementById('endFrequency');
const lookupResult = document.getElementById('channelLookupResult');
let simplified = window.matchMedia('(max-width: 600px)').matches;
let selectedBand = 'overall';
let channelLookup = null;

const carrierColors = {
  bite: '#008000',
  telia: '#84c',
  tele2: '#000'
};

const bandGroups = {
  lowband: new Set(['900', '800', '700']),
  midband: new Set(['2100', '1800', '2600', '1500', '2500', '2300']),
  highband: new Set(['3600'])
};

const lteChannelBands = {
  2100: [2110, 0, 599], 1800: [1805, 1200, 1949], 2600: [2620, 2750, 3449], 900: [925, 3450, 3799],
  700: [791, 6150, 6449], 800: [758, 9210, 9659], 1500: [1452, 9920, 10359],
  2500: [2570, 37750, 38249], 2300: [2300, 38650, 39649]
};

function channelFrequency(band, channel) {
  const config = lteChannelBands[band];
  return config[0] + (channel - config[1]) * 0.1;
}

function detectBand(start, end) {
  const data = simplified ? getSimplifiedWithFallback() : fullData;
  return data.find(band => {
    const bandStart = band.startFrequency;
    const bandEnd = band.endFrequency;
    return lteChannelBands[band.id] && start < bandEnd && end > bandStart;
  })?.id;
}

function detectBandFromChannel(channel) {
  return Object.entries(lteChannelBands)
    .find(([, [, min, max]]) => channel >= min && channel <= max)?.[0];
}

function clearChannelHighlight() {
  document.querySelectorAll('.channel-marker').forEach(element => element.remove());
}

function applyChannelHighlight() {
  clearChannelHighlight();
  if (!channelLookup) return;
  const { band, start, end } = channelLookup;
  const section = document.getElementById(`band${band}`);
  if (!section) return;
  const chart = section.querySelector('.chart');
  const bandData = (simplified ? getSimplifiedWithFallback() : fullData).find(item => item.id === band);
  if (!bandData) return;
  const bandStart = bandData.startFrequency;
  const blocks = [...chart.querySelectorAll('.block')];
  const totalWidth = blocks.reduce((sum, block) => sum + Number(block.dataset.end) - Number(block.dataset.start), 0);
  const frequencyToPixels = frequency => {
    const chartLeft = chart.getBoundingClientRect().left;
    for (const block of blocks) {
      const blockStartFrequency = Number(block.dataset.start);
      const blockEndFrequency = Number(block.dataset.end);
      const blockWidth = blockEndFrequency - blockStartFrequency;
      if (frequency <= blockEndFrequency) {
        const rect = block.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (frequency - blockStartFrequency) / blockWidth));
        return rect.left - chartLeft + rect.width * ratio;
      }
    }
    const lastRect = blocks[blocks.length - 1].getBoundingClientRect();
    return lastRect.right - chartLeft;
  };
  const marker = document.createElement('div');
  marker.className = 'channel-marker';
  const markerLeft = frequencyToPixels(Math.max(start, bandStart));
  const markerRight = frequencyToPixels(Math.min(end, bandStart + totalWidth));
  marker.style.left = `${markerLeft}px`;
  marker.style.width = `${Math.max(0, markerRight - markerLeft)}px`;
  chart.appendChild(marker);
}

function clearContainer() {
  container.innerHTML = '';
}

function formatBandwidth(value) {
  return Number(value.toFixed(3)).toString();
}

function formatChannelDetails(block) {
  const channels = block.usedFor && typeof block.usedFor === 'object'
    ? block.usedFor
    : block;
  return [
    channels.arfcns?.length && `2G GSM: ARFCN ${channels.arfcns.join(', ')}`,
    channels.earfcns?.length && `4G LTE: EARFCN ${channels.earfcns.join(', ')}`,
    channels.nrarfcns?.length && `5G: ARFCN ${channels.nrarfcns.join(', ')}`,
    channels.uarfcns?.length && `3G: UARFCN ${channels.uarfcns.join(', ')}`
  ].filter(Boolean).join('<br>');
}

function renderChart(data) {
  clearContainer();
  data.forEach(band => {
    const section = document.createElement('section');
    section.id = `band${band.id}`;
    const heading = document.createElement('div');
    heading.className = 'band-heading';
    heading.innerHTML = `<h2>${band.title}</h2>`;

    if (hasAlternateVersion(band.id)) {
      const toggleButton = document.createElement('button');
      toggleButton.className = 'toggle-view-btn';
      toggleButton.setAttribute('aria-pressed', simplified ? 'true' : 'false');
      toggleButton.textContent = simplified ? 'Switch to full view' : 'Switch to simplifed view';
      toggleButton.addEventListener('click', () => {
        simplified = !simplified;
        if (simplified) renderSimplified();
        else renderFull();
      });
      heading.appendChild(toggleButton);
    }
    section.appendChild(heading);

    const chart = document.createElement('div');
    chart.className = 'chart';
    chart.dataset.band = band.id;

    band.blocks.forEach(b => {
      const blockWidth = b.endFrequency - b.startFrequency;
      const blk = document.createElement('div');
      blk.className = `block ${b.type}`;
      blk.style.flex = String(blockWidth);
      blk.dataset.start = String(b.startFrequency);
      blk.dataset.end = String(b.endFrequency);
      blk.innerHTML = `
        <strong>${b.owner}</strong>
        <span>${formatBandwidth(blockWidth)} MHz</span>
      `;
      const frequency = `${b.startFrequency} - ${b.endFrequency} MHz`
        + (b.uplinkStartFrequency === undefined ? '' : ` downlink and ${b.uplinkStartFrequency} - ${b.uplinkEndFrequency} MHz uplink`);
      const details = [
        b.ownerLong && `<strong>Operated by:</strong><br>${b.ownerLong}`,
        `<strong>Bandwidth:</strong><br>${formatBandwidth(blockWidth)} MHz (${frequency})`,
        b.validUntil && `<strong>Valid until:</strong><br>${b.validUntil}`,
        formatChannelDetails(b) && `<strong>Used for:</strong><br>${formatChannelDetails(b)}`,
        typeof b.usedFor === 'string' && `<strong>Used for:</strong><br>${b.usedFor}`,
        b.details && `<strong>Details:</strong><br>${b.details.replaceAll('\n', '<br>')}`
      ].filter(Boolean);
      blk.dataset.details = details.join('<br><br>');
      chart.appendChild(blk);
    });

    const start = document.createElement('div');
    start.className = 'frequency start';
    start.textContent = formatBandFrequency(band, 'start');
    chart.appendChild(start);

    const end = document.createElement('div');
    end.className = 'frequency end';
    end.textContent = formatBandFrequency(band, 'end');
    chart.appendChild(end);

    const hint = document.createElement('p');
    hint.className = 'info';
    hint.textContent = 'Click on a spectrum block to view details below.';

    const details = document.createElement('div');
    details.className = 'details';

    section.append(chart, hint, details);
    container.appendChild(section);
  });
  applyChannelHighlight();
}

function formatBandFrequency(band, edge) {
  const downlink = edge === 'start' ? band.startFrequency : band.endFrequency;
  if (band.type !== 'FDD') return `${downlink} MHz`;
  const uplink = edge === 'start' ? band.uplinkStartFrequency : band.uplinkEndFrequency;
  return `${downlink} / ${uplink} MHz`;
}

function getChartData(data) {
  const totals = new Map();
  data
    .filter(band => selectedBand === 'overall' || bandGroups[selectedBand].has(band.id))
    .flatMap(band => band.blocks)
    .forEach(block => {
      if (carrierColors[block.type]) {
        const label = block.owner === 'T2' ? 'Tele2' : block.owner;
        totals.set(label, (totals.get(label) || 0) + (block.endFrequency - block.startFrequency));
      }
    });
  return [...totals.entries()].map(([label, value]) => ({
    label,
    value,
    color: carrierColors[label.toLowerCase()]
  }));
}

function renderPie(data) {
  const chartData = getChartData(data);
  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  pieChart.innerHTML = '';
  pieLegend.innerHTML = '';

  if (!total) {
    pieChart.textContent = 'No spectrum data';
    return;
  }

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 200 200');
  svg.setAttribute('aria-hidden', 'true');
  let startAngle = -Math.PI / 2;
  chartData.forEach(item => {
    const angle = item.value / total * Math.PI * 2;
    const endAngle = startAngle + angle;
    const largeArc = angle > Math.PI ? 1 : 0;
    const point = a => [100 + 100 * Math.cos(a), 100 + 100 * Math.sin(a)];
    const start = point(startAngle);
    const end = point(endAngle);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M 100 100 L ${start.join(' ')} A 100 100 0 ${largeArc} 1 ${end.join(' ')} Z`);
    path.setAttribute('fill', item.color);
    path.setAttribute('stroke', '#171717');
    path.setAttribute('stroke-width', '2');
    svg.appendChild(path);
    startAngle = endAngle;

    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    legendItem.innerHTML = `<span class="legend-swatch" style="background:${item.color}"></span><span>${item.label}: ${item.value.toFixed(1)} MHz (${(item.value / total * 100).toFixed(1)}%)</span>`;
    pieLegend.appendChild(legendItem);
  });
  pieChart.appendChild(svg);
  pieChart.setAttribute('aria-label', `${selectedBand} carrier spectrum share, ${total.toFixed(1)} MHz total`);
}

function renderFull() {
  renderChart(fullData);
  renderPie(fullData);
}

function getSimplifiedWithFallback() {
  const simplifiedMap = new Map(simplifiedData.map(b => [b.id, b]));
  const merged = fullData.map(fd => simplifiedMap.get(fd.id) || fd);
  const fullIds = new Set(fullData.map(b => b.id));
  simplifiedData.forEach(sd => { if (!fullIds.has(sd.id)) merged.push(sd); });
  return merged;
}

function hasAlternateVersion(bandId) {
  const fullBand = fullData.find(band => band.id === bandId);
  const simplifiedBand = simplifiedData.find(band => band.id === bandId);
  if (!fullBand || !simplifiedBand) return false;
  return fullBand.blocks.length !== simplifiedBand.blocks.length
    || fullBand.blocks.some((block, index) => {
      const simplifiedBlock = simplifiedBand.blocks[index];
      return !simplifiedBlock
        || block.type !== simplifiedBlock.type
        || block.owner !== simplifiedBlock.owner
        || block.startFrequency !== simplifiedBlock.startFrequency
        || block.endFrequency !== simplifiedBlock.endFrequency;
    });
}

function renderSimplified() {
  const data = getSimplifiedWithFallback();
  renderChart(data);
  renderPie(data);
}

container.addEventListener('click', e => {
  const blk = e.target.closest('.block');
  if (!blk) return;

  blk.parentNode.querySelectorAll('.block').forEach(b => b.classList.remove('selected'));
  blk.classList.add('selected');

  const sec = blk.closest('section');
  const det = sec.querySelector('.details');
  det.innerHTML = blk.dataset.details;
  det.classList.add('visible');
});

if (bandFilter) {
  bandFilter.addEventListener('click', event => {
    const tab = event.target.closest('.band-tab');
    if (!tab) return;
    selectedBand = tab.dataset.filter;
    bandFilter.querySelectorAll('.band-tab').forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    renderPie(simplified ? getSimplifiedWithFallback() : fullData);
  });
}

lookupMode.addEventListener('change', () => {
  document.querySelectorAll('.lookup-inputs label').forEach(label => {
    const visible = lookupMode.value === 'frequency'
      ? label.classList.contains('mode-frequency')
      : label.classList.contains('mode-bandwidth');
    label.hidden = !visible;
    label.style.display = visible ? 'flex' : 'none';
  });
});

lookupForm.addEventListener('submit', event => {
  event.preventDefault();
  let start;
  let end;
  if (lookupMode.value === 'lte-bandwidth') {
    const channel = Number(channelNumber.value);
    const bandwidth = Number(channelBandwidth.value);
    if (!Number.isFinite(channel) || !Number.isFinite(bandwidth) || channel < 0 || bandwidth <= 0) {
      lookupResult.textContent = 'Enter a valid channel and bandwidth.';
      return;
    }
    const band = detectBandFromChannel(channel);
    if (!band) {
      lookupResult.textContent = 'That channel is outside the displayed frequency bands.';
      return;
    }
    const frequency = channelFrequency(band, channel);
    start = frequency - bandwidth / 2;
    end = frequency + bandwidth / 2;
  } else {
    start = Number(startFrequency.value);
    end = Number(endFrequency.value);
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end <= start) {
      lookupResult.textContent = 'Enter a valid start and end frequency.';
      return;
    }
  }
  const band = detectBand(start, end);
  if (!band) {
    clearChannelHighlight();
    channelLookup = null;
    lookupResult.textContent = 'No matching displayed frequency band was found.';
    return;
  }
  channelLookup = { band, start, end };
  lookupResult.textContent = `${band}: ${start.toFixed(2)} to ${end.toFixed(2)} MHz downlink`;
  applyChannelHighlight();
  document.getElementById(`band${band}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

lookupMode.dispatchEvent(new Event('change'));
if (simplified) renderSimplified();
else renderFull();
