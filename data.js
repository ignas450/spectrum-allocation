export const spectrumData = [
  {
    id: "B1",
    title: "Band B1, n1 (FDD)",
    freqStart: "2110 / 1920 MHz",
    freqEnd: "2170 / 1980 MHz",
    blocks: [
      {
        type: "bite",
        label: "Bite",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2110 - 2130 MHz downlink and 1920 - 1940 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>?<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 100`
      },
      {
        type: "telia",
        label: "Telia",
        width: 20,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2130 - 2150 MHz downlink and 1940 - 1960 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>?<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 300<br>5G: NRARFCN 427250<br><br>
                      <strong>Details:</strong><br>Some sites run pure 5G`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2150 - 2170 MHz downlink and 1960 - 1980 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>?<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 500<br>5G: NRARFCN 432030<br><br>
                      <strong>Details:</strong><br>Some sites run LTE/5G DSS (mostly near highways)`
      }
    ]
  },

  {
    id: "B3",
    title: "Band B3 (FDD)",
    freqStart: "1805 / 1710 MHz",
    freqEnd: "1880 / 1785 MHz",
    blocks: [
      {
        type: "telia",
        label: "Telia",
        width: 4.8,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>4.8 MHz (1805 - 1809.8 MHz downlink and 1710 - 1714.8 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>sometimes used for 2G<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 531, 532, 533, 534`
      },
      {
        type: "telia",
        label: "Telia",
        width: 20,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (1809.8 - 1829.8 MHz downlink and 1714.8 - 1734.8 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1348`
      },
      {
        type: "telia",
        label: "Telia",
        width: 0.2,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>0.2 MHz (1829.8 - 1830 MHz downlink and 1734.8 - 1735 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>Unused spectrum`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 2.4,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>2.4 MHz (1830 - 1832.4 MHz downlink and 1735 - 1737.4 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>sometimes used for 2G<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 640, 643`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (1832.4 - 1852.4 MHz downlink and 1737.4 - 1757.4 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1574`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 2.6,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>2.6 MHz (1852.4 - 1855 MHz downlink and 1757.4 - 1760 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>sometimes used for 2G<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 750, 751, 752, 753, 755`
      },
      {
        type: "bite",
        label: "Bite",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>5 MHz (1855 - 1860 MHz downlink and 1760 - 1765 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1733<br><br>
                      <strong>Details:</strong><br>20+5 MHz split as separate carriers`
      },
      {
        type: "bite",
        label: "Bite",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (1860 - 1880 MHz downlink and 1765 - 1785 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1850<br><br>
                      <strong>Details:</strong><br>20+5 MHz split as separate carriers`
      }
    ]
  },

  {
    id: "B7",
    title: "Band B7 (FDD)",
    freqStart: "2620 / 2500 MHz",
    freqEnd: "2690 / 2570 MHz",
    blocks: [
      {
        type: "tele2",
        label: "Tele2",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2620 - 2640 MHz downlink and 2500 - 2520 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 2850`
      },
      {
        type: "telia",
        label: "Telia",
        width: 20,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2640 - 2660 MHz downlink and 2520 - 2540 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3050`
      },
      {
        type: "bite",
        label: "Bite",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2660 - 2680 MHz downlink and 2540 - 2560 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3250<br><br>
                      <strong>Details:</strong><br>20+10 MHz split as separate carriers.`
      },
      {
        type: "bite",
        label: "Bite",
        width: 10,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (2680 - 2690 MHz downlink and 2560 - 2570 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3394<br><br>
                      <strong>Details:</strong><br>20+10 MHz split as separate carriers.<br>Spectrum block acquired after the acquisition of Mezon`
      }
    ]
  },

  {
    id: "B8",
    title: "Band B8 (FDD)",
    freqStart: "925.1 / 880.1 MHz",
    freqEnd: "960.9 / 915.9 MHz",
    blocks: [
      {
        type: "bite",
        label: "Bite",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>5 MHz (925.1 - 930.1 MHz downlink and 880.1 - 885.1 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>3G UMTS: UARFCN 2938 (historical)<br>4G LTE: EARFCN 3476<br><br>
                      <strong>Details:</strong><br>Previously used for 3G; now being replaced with 5 MHz B8 LTE`
      },
      {
        type: "bite",
        label: "Bite",
        width: 6.6,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>6.6 MHz (930.1 - 936.7 MHz downlink and 885.1 - 891.7 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 1, 3, 5, 7, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019, 1021, 1023<br>`
      },
      {
        type: "telia",
        label: "Telia",
        width: 11.6,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (936.7 - 948.3 MHz downlink and 891.7 - 903.3 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 9, 10, 11, 12, 13, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66<br>LTE: EARFCN 3617<br><br>
                      <strong>Details:</strong><br>10 MHz LTE`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 6.6,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>6.6 MHz (948.3 - 954.9 MHz downlink and 903.3 - 909.9 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 67-99<br>`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>5 MHz (954.9 - 959.9 MHz downlink and 909.9 - 914.9 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>3G UMTS: UARFCN 3087 (historical)<br>4G LTE: EARFCN 3774<br>`
      }
    ]
  },

  {
    id: "B20",
    title: "Band B20 (FDD)",
    freqStart: "791 / 832 MHz",
    freqEnd: "821 / 862 MHz",
    blocks: [
      {
        type: "bite",
        label: "Bite",
        width: 10,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (791 - 801 MHz downlink and 832 - 842 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6200`
      },
      {
        type: "telia",
        label: "Telia",
        width: 10,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (801 - 811 MHz downlink and 842 - 852 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6300`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 10,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (811 - 821 MHz downlink and 852 - 862 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6400`
      }
    ]
  },

  {
    id: "B28",
    title: "Bands B28, n28 (FDD)",
    freqStart: "758 / 703 MHz",
    freqEnd: "788 / 733 MHz",
    blocks: [

      {
        type: "bite",
        label: "Bite",
        width: 10,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (758 - 768 MHz downlink and 703 - 713 MHz uplink)<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9360<br><br>
                      <strong>Details:</strong><br>Reframed from EARFCN 9435 to 9460 on 2026-08-24 around 1 AM nationwide. Started from west of Lithuania`
      },
      {
        type: "telia",
        label: "Telia",
        width: 10,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (768 - 778 MHz downlink and 713 - 723 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9360 (historical)<br>5G: NRARFCN 154570<br><br>
                      <strong>Details:</strong><br>Previously used for LTE/5G DSS; primarily used for 5G only.`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 10,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (778 - 788 MHz downlink and 723 - 733 MHz uplink)<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9485`
      }
    ]
  },
  
  {
    id: "B32",
    title: "Bands B32, B75, n75 (SDL)",
    freqStart: "1432 MHz",
    freqEnd: "1512 MHz",
    blocks: [
      {
        type: "telia",
        label: "Telia",
        width: 20,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (1432 - 1452 MHz)<br><br>
                      <strong>Valid until:</strong><br>?<br><br>
                      <strong>Used for:</strong><br>?`
      },
      {
        type: "telia",
        label: "Telia",
        width: 20,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (1452 - 1472 MHz)<br><br>
                      <strong>Valid until:</strong><br>?<br><br>
                      <strong>Used for:</strong><br>?`
      },
      {
        type: "unallocated",
        label: "Unallocated",
        width: 20,
        details: `<strong>Bandwidth:</strong><br>20 MHz (1472 - 1492 MHz)`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (1492 - 1512 MHz)<br><br>
                      <strong>Valid until:</strong><br>?<br><br>
                      <strong>Used for:</strong><br>?`
      }
    ]
  },

  {
    id: "B38",
    title: "Band B38 (TDD)",
    freqStart: "2570 MHz",
    freqEnd: "2620 MHz",
    blocks: [
      {
        type: "bite",
        label: "Bite",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>5 MHz (2570 - 2575 MHz)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Details:</strong><br>Unused<br>Spectrum block acquired after the acquisition of Mezon`
      },
      {
        type: "bite",
        label: "Bite",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2575 - 2595 MHz)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Details:</strong><br>Rarely used for LTE<br>Spectrum block acquired after the acquisition of Mezon<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 37900`
      },
      {
        type: "bite",
        label: "Bite",
        width: 20,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2595 - 2615 MHz)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Details:</strong><br>Rarely used for LTE<br>Spectrum block acquired after the acquisition of Mezon<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 38098`
      },
      {
        type: "bite",
        label: "Bite",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>5 MHz (2615 - 2620 MHz)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Details:</strong><br>Unused<br>Spectrum block acquired after the acquisition of Mezon`
      }
    ]
  },

  {
    id: "B40",
    title: "Band B40, n40 (TDD)",
    freqStart: "2300 MHz",
    freqEnd: "2400 MHz",
    blocks: [
      {
        type: "unallocated",
        label: "Unallocated",
        width: 10,
        details: `<strong>Bandwidth:</strong><br>10 MHz (2300 - 2310 MHz)`
      },
      // {
      //   type: "bite",
      //   label: "Bite",
      //   width: 20,
      //   details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
      //                 <strong>Bandwidth:</strong><br>20 MHz (2310 - 2330 MHz)<br><br>
      //                 <strong>Valid until:</strong><br>2029-07-25<br><br>
      //                 <strong>Used for:</strong><br>LTE: EARFCN 38850<br><br>
      //                 <strong>Details:</strong><br>Spectrum block acquired after the acquisition of Mezon`
      // },
      {
        type: "bite",
        label: "Bite",
        width: 80,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>80 MHz (2310 - 2390 MHz)<br><br>
                      <strong>Valid until:</strong><br>2029-07-25<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 464210<br><br>
                      <strong>Details:</strong><br>Previously used for 20 MHz LTE (EARFCN 38850) and 60 MHz 5G NR (ARFCN 468250)<br>Reframed to 80 MHz 5G during 2026 Q2<br>Spectrum block acquired after the acquisition of Mezon`
      },
      {
        type: "unallocated",
        label: "Unallocated",
        width: 10,
        details: `<strong>Bandwidth:</strong><br>10 MHz (2390 - 2400 MHz)`
      }
    ]
  },

  {
    id: "B78",
    title: "Band n78 (TDD)",
    freqStart: "3400 MHz",
    freqEnd: "3800 MHz",
    blocks: [
      {
        type: "tele2",
        label: "Tele2",
        width: 100,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3400 - 3500 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 629952`
      },
      {
        type: "telia",
        label: "Telia",
        width: 100,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3500 - 3600 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 634080`
      },
      {
        type: "bite",
        label: "Bite",
        width: 100,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3600 - 3700 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 640704<br>`
      },
      {
        type: "unallocated",
        label: "Ministry of Defence",
        width: 100,
        details: `<strong>Operated by:</strong><br>Ministry of National Defence of Lithuania<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3700 - 3800 MHz)<br><br>
                      <strong>Details:</strong><br>Not used for cellular`
      }
    ]
  }
];
