export const simplifiedData = [  
  {
    id: "B3",
    title: "Band B3 (FDD)",
    freqStart: "1805 / 1710 MHz",
    freqEnd: "1880 / 1785 MHz",
    blocks: [
      {
        type: "telia",
        label: "Telia",
        width: 25,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>25 MHz (1805 - 1830 MHz downlink and 1710 - 1735 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 531, 532, 533, 534<br>4G LTE: EARFCN 1348<br><br>
                      <strong>Details:</strong><br>20 MHz for B3 4G LTE, remaining sometimes used for 2G GSM (most common indoor)`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 25,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>25 MHz (1830 - 1855 MHz downlink and 1735 - 1760 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 640, 643, 750, 751, 752, 753, 755<br>4G LTE: EARFCN 1574<br><br>
                      <strong>Details:</strong><br>20 MHz for B3 4G LTE, remaining sometimes used for 2G GSM (most common indoor)`
      },
      {
        type: "bite",
        label: "Bite",
        width: 25,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>25 MHz (1855 - 1880 MHz downlink and 1760 - 1785 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1733, 1850<br><br>
                      <strong>Details:</strong><br>20+5 MHz split as separate 4G LTE carriers`
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
        width: 11.6,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (925.1 - 936.7 MHz downlink and 880.1 - 891.7 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 1, 3, 5, 7, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019, 1021, 1023<br>4G LTE: EARFCN 3476<br><br>
                      <strong>Details:</strong><br>5 MHz for B8 4G LTE, remaining for 2G GSM`
      },
      {
        type: "telia",
        label: "Telia",
        width: 11.6,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (936.7 - 948.3 MHz downlink and 891.7 - 903.3 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 9, 10, 11, 12, 13, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66<br>4G LTE: EARFCN 3617<br><br>
                      <strong>Details:</strong><br>~8 MHz for B8 4G LTE, remaining for 2G GSM`
      },
      {
        type: "tele2",
        label: "Tele2",
        width: 11.6,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (948.3 - 959.9 MHz downlink and 903.3 - 914.9 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 67-99<br>4G LTE: EARFCN 3774<br><br>
                      <strong>Details:</strong><br>5 MHz for B8 4G LTE, remaining for 2G GSM`
      }
    ]
  },
];
