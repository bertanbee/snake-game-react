import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';

import './styles.css';

//import Box from './components/box/box';
//import Controls from './components/controls/controls';

function Game() {
  

  const [ position, setPosition ] = useState({
    position: 2
  })

  const [ positionState, setPositionState ] = useState({
    2: {
      className: "little-block-selected"
    },
    3: {
      className: "little-block"
    },
    4: {
      className: "little-block"
    },
    5: {
      className: "little-block"
    },
    6: {
      className: "little-block"
    },
    7: {
      className: "little-block"
    },
    8: {
      className: "little-block"
    },
    9: {
      className: "little-block"
    },
    10: {
      className: "little-block"
    },
    11: {
      className: "little-block"
    },
    12: {
      className: "little-block"
    },
    13: {
      className: "little-block"
    },
    14: {
      className: "little-block"
    },
    15: {
      className: "little-block"
    },
    16: {
      className: "little-block"
    },
    17: {
      className: "little-block"
    },
    18: {
      className: "little-block"
    },
    19: {
      className: "little-block"
    },
    20: {
      className: "little-block"
    },
    21: {
      className: "little-block"
    },
    22: {
      className: "little-block"
    },
    23: {
      className: "little-block"
    },
    24: {
      className: "little-block"
    },
    25: {
      className: "little-block"
    },
    26: {
      className: "little-block"
    },
    27: {
      className: "little-block"
    },
    28: {
      className: "little-block"
    },
    29: {
      className: "little-block"
    },
    30: {
      className: "little-block"
    },
    31: {
      className: "little-block"
    },
    32: {
      className: "little-block"
    },
    33: {
      className: "little-block"
    },
    34: {
      className: "little-block"
    },
    35: {
      className: "little-block"
    },
    36: {
      className: "little-block"
    },
    37: {
      className: "little-block"
    },
    38: {
      className: "little-block"
    },
    39: {
      className: "little-block"
    },
    40: {
      className: "little-block"
    },
    41: {
      className: "little-block"
    },
    42: {
      className: "little-block"
    },
    43: {
      className: "little-block"
    },
    44: {
      className: "little-block"
    },
    45: {
      className: "little-block"
    },
    46: {
      className: "little-block"
    },
    47: {
      className: "little-block"
    },
    48: {
      className: "little-block"
    },
    49: {
      className: "little-block"
    },
    50: {
      className: "little-block"
    },
    51: {
      className: "little-block"
    },
    52: {
      className: "little-block"
    },
    53: {
      className: "little-block"
    },
    54: {
      className: "little-block"
    },
    55: {
      className: "little-block"
    },
    56: {
      className: "little-block"
    },
    57: {
      className: "little-block"
    },
    58: {
      className: "little-block"
    },
    59: {
      className: "little-block"
    },
    60: {
      className: "little-block"
    },
    61: {
      className: "little-block"
    },
    62: {
      className: "little-block"
    },
    63: {
      className: "little-block"
    },
    64: {
      className: "little-block"
    },
    65: {
      className: "little-block"
    },
    66: {
      className: "little-block"
    },
    67: {
      className: "little-block"
    },
    68: {
      className: "little-block"
    },
    69: {
      className: "little-block"
    },
    70: {
      className: "little-block"
    },
    71: {
      className: "little-block"
    },
    72: {
      className: "little-block"
    },
    73: {
      className: "little-block"
    },
    74: {
      className: "little-block"
    },
    75: {
      className: "little-block"
    },
    76: {
      className: "little-block"
    },
    77: {
      className: "little-block"
    },
    78: {
      className: "little-block"
    },
    79: {
      className: "little-block"
    },
    80: {
      className: "little-block"
    },
    81: {
      className: "little-block"
    },
    82: {
      className: "little-block"
    },
    83: {
      className: "little-block"
    },
    84: {
      className: "little-block"
    },
    85: {
      className: "little-block"
    },
    86: {
      className: "little-block"
    },
    87: {
      className: "little-block"
    },
    88: {
      className: "little-block"
    },
    89: {
      className: "little-block"
    },
    90: {
      className: "little-block"
    },
    91: {
      className: "little-block"
    },
    92: {
      className: "little-block"
    },
    93: {
      className: "little-block"
    },
    94: {
      className: "little-block"
    },
    95: {
      className: "little-block"
    },
    96: {
      className: "little-block"
    },
    97: {
      className: "little-block"
    },
    98: {
      className: "little-block"
    },
    99: {
      className: "little-block"
    },
    100: {
      className: "little-block"
    },
    101: {
      className: "little-block"
    },
    102: {
      className: "little-block"
    },
    103: {
      className: "little-block"
    },
    104: {
      className: "little-block"
    },
    105: {
      className: "little-block"
    },
    106: {
      className: "little-block"
    },
    107: {
      className: "little-block"
    },
    108: {
      className: "little-block"
    },
    109: {
      className: "little-block"
    },
    110: {
      className: "little-block"
    },
    111: {
      className: "little-block"
    },
    112: {
      className: "little-block"
    },
    113: {
      className: "little-block"
    },
    114: {
      className: "little-block"
    },
    115: {
      className: "little-block"
    },
    116: {
      className: "little-block"
    },
    117: {
      className: "little-block"
    },
    118: {
      className: "little-block"
    },
    119: {
      className: "little-block"
    },
    120: {
      className: "little-block"
    },
    121: {
      className: "little-block"
    },
    122: {
      className: "little-block"
    },
    123: {
      className: "little-block"
    },
    124: {
      className: "little-block"
    },
    125: {
      className: "little-block"
    },
    126: {
      className: "little-block"
    },
    127: {
      className: "little-block"
    },
    128: {
      className: "little-block"
    },
    129: {
      className: "little-block"
    },
    130: {
      className: "little-block"
    },
    131: {
      className: "little-block"
    },
    132: {
      className: "little-block"
    },
    133: {
      className: "little-block"
    },
    134: {
      className: "little-block"
    },
    135: {
      className: "little-block"
    },
    136: {
      className: "little-block"
    },
    137: {
      className: "little-block"
    },
    138: {
      className: "little-block"
    },
    139: {
      className: "little-block"
    },
    140: {
      className: "little-block"
    },
    141: {
      className: "little-block"
    },
    142: {
      className: "little-block"
    },
    143: {
      className: "little-block"
    },
    144: {
      className: "little-block"
    },
    145: {
      className: "little-block"
    },
    146: {
      className: "little-block"
    },
    147: {
      className: "little-block"
    },
    148: {
      className: "little-block"
    },
    149: {
      className: "little-block"
    },
    150: {
      className: "little-block"
    },
    151: {
      className: "little-block"
    },
    152: {
      className: "little-block"
    },
    153: {
      className: "little-block"
    },
    154: {
      className: "little-block"
    },
    155: {
      className: "little-block"
    },
    156: {
      className: "little-block"
    },
    157: {
      className: "little-block"
    },
    158: {
      className: "little-block"
    },
    159: {
      className: "little-block"
    },
    160: {
      className: "little-block"
    },
    161: {
      className: "little-block"
    },
    162: {
      className: "little-block"
    },
    163: {
      className: "little-block"
    },
    164: {
      className: "little-block"
    },
    165: {
      className: "little-block"
    },
    166: {
      className: "little-block"
    },
    167: {
      className: "little-block"
    },
    168: {
      className: "little-block"
    },
    169: {
      className: "little-block"
    },
    170: {
      className: "little-block"
    },
    171: {
      className: "little-block"
    },
    172: {
      className: "little-block"
    },
    173: {
      className: "little-block"
    },
    174: {
      className: "little-block"
    },
    175: {
      className: "little-block"
    },
    176: {
      className: "little-block"
    },
    177: {
      className: "little-block"
    },
    178: {
      className: "little-block"
    },
    179: {
      className: "little-block"
    },
    180: {
      className: "little-block"
    },
    181: {
      className: "little-block"
    },
    182: {
      className: "little-block"
    },
    183: {
      className: "little-block"
    },
    184: {
      className: "little-block"
    },
    185: {
      className: "little-block"
    },
    186: {
      className: "little-block"
    },
    187: {
      className: "little-block"
    },
    188: {
      className: "little-block"
    },
    189: {
      className: "little-block"
    },
    190: {
      className: "little-block"
    },
    191: {
      className: "little-block"
    },
    192: {
      className: "little-block"
    },
    193: {
      className: "little-block"
    },
    194: {
      className: "little-block"
    },
    195: {
      className: "little-block"
    },
    196: {
      className: "little-block"
    },
    197: {
      className: "little-block"
    },
    198: {
      className: "little-block"
    },
    199: {
      className: "little-block"
    },
    200: {
      className: "little-block"
    },
    201: {
      className: "little-block"
    },
    202: {
      className: "little-block"
    },
    203: {
      className: "little-block"
    },
    204: {
      className: "little-block"
    },
    205: {
      className: "little-block"
    },
    206: {
      className: "little-block"
    },
    207: {
      className: "little-block"
    },
    208: {
      className: "little-block"
    },
    209: {
      className: "little-block"
    },
    210: {
      className: "little-block"
    },
    211: {
      className: "little-block"
    },
    212: {
      className: "little-block"
    },
    213: {
      className: "little-block"
    },
    214: {
      className: "little-block"
    },
    215: {
      className: "little-block"
    },
    216: {
      className: "little-block"
    },
    217: {
      className: "little-block"
    },
    218: {
      className: "little-block"
    },
    219: {
      className: "little-block"
    },
    220: {
      className: "little-block"
    },
    221: {
      className: "little-block"
    },
    222: {
      className: "little-block"
    },
    223: {
      className: "little-block"
    },
    224: {
      className: "little-block"
    },
    225: {
      className: "little-block"
    },
    226: {
      className: "little-block"
    },
    227: {
      className: "little-block"
    },
    228: {
      className: "little-block"
    },
    229: {
      className: "little-block"
    },
    230: {
      className: "little-block"
    },
    231: {
      className: "little-block"
    },
    232: {
      className: "little-block"
    },
    233: {
      className: "little-block"
    },
    234: {
      className: "little-block"
    },
    235: {
      className: "little-block"
    },
    236: {
      className: "little-block"
    },
    237: {
      className: "little-block"
    },
    238: {
      className: "little-block"
    },
    239: {
      className: "little-block"
    },
    240: {
      className: "little-block"
    },
    241: {
      className: "little-block"
    },
    242: {
      className: "little-block"
    },
    243: {
      className: "little-block"
    },
    244: {
      className: "little-block"
    },
    245: {
      className: "little-block"
    },
    246: {
      className: "little-block"
    },
    247: {
      className: "little-block"
    },
    248: {
      className: "little-block"
    },
    249: {
      className: "little-block"
    },
    250: {
      className: "little-block"
    },
    251: {
      className: "little-block"
    },
    252: {
      className: "little-block"
    },
    253: {
      className: "little-block"
    },
    254: {
      className: "little-block"
    },
    255: {
      className: "little-block"
    },
    256: {
      className: "little-block"
    },
    257: {
      className: "little-block"
    },
    258: {
      className: "little-block"
    },
    259: {
      className: "little-block"
    },
    260: {
      className: "little-block"
    },
    261: {
      className: "little-block"
    },
    262: {
      className: "little-block"
    },
    263: {
      className: "little-block"
    },
    264: {
      className: "little-block"
    },
    265: {
      className: "little-block"
    },
    266: {
      className: "little-block"
    },
    267: {
      className: "little-block"
    },
    268: {
      className: "little-block"
    },
    269: {
      className: "little-block"
    },
    270: {
      className: "little-block"
    },
    271: {
      className: "little-block"
    },
    272: {
      className: "little-block"
    },
    273: {
      className: "little-block"
    },
    274: {
      className: "little-block"
    },
    275: {
      className: "little-block"
    },
    276: {
      className: "little-block"
    },
    277: {
      className: "little-block"
    },
    278: {
      className: "little-block"
    },
    279: {
      className: "little-block"
    },
    280: {
      className: "little-block"
    },
    281: {
      className: "little-block"
    },
    282: {
      className: "little-block"
    },
    283: {
      className: "little-block"
    },
    284: {
      className: "little-block"
    },
    285: {
      className: "little-block"
    },
    286: {
      className: "little-block"
    },
    287: {
      className: "little-block"
    },
    288: {
      className: "little-block"
    },
    289: {
      className: "little-block"
    },
    290: {
      className: "little-block"
    },
    291: {
      className: "little-block"
    },
    292: {
      className: "little-block"
    },
    293: {
      className: "little-block"
    },
    294: {
      className: "little-block"
    },
    295: {
      className: "little-block"
    },
    296: {
      className: "little-block"
    },
    297: {
      className: "little-block"
    },
    298: {
      className: "little-block"
    },
    299: {
      className: "little-block"
    },
    300: {
      className: "little-block"
    },
    301: {
      className: "little-block"
    },
    302: {
      className: "little-block"
    },
    303: {
      className: "little-block"
    },
    304: {
      className: "little-block"
    },
    305: {
      className: "little-block"
    },
    306: {
      className: "little-block"
    },
    307: {
      className: "little-block"
    },
    308: {
      className: "little-block"
    },
    309: {
      className: "little-block"
    },
    310: {
      className: "little-block"
    },
    311: {
      className: "little-block"
    },
    312: {
      className: "little-block"
    },
    313: {
      className: "little-block"
    },
    314: {
      className: "little-block"
    },
    315: {
      className: "little-block"
    },
    316: {
      className: "little-block"
    },
    317: {
      className: "little-block"
    },
    318: {
      className: "little-block"
    },
    319: {
      className: "little-block"
    },
    320: {
      className: "little-block"
    },
    321: {
      className: "little-block"
    },
    322: {
      className: "little-block"
    },
    323: {
      className: "little-block"
    },
    324: {
      className: "little-block"
    },
    325: {
      className: "little-block"
    },
  });
  function changeRight() {
    setPosition({
      position: position.position + 1
    });

    console.log("Position: " + position.position);
    
    let noStyledPosition = [];

    let counter = position.position + 1;
    console.log("Counter: " + counter);

    while(counter <= 325) {
      noStyledPosition.push(counter);
      counter++;
    }

    counter = position.position - 1;

    while(counter >= 2) {
      noStyledPosition.push(counter);
      counter--;
    }

    setPositionState({
      [position.position]: {
        className: "little-block-selected"
      },
      [noStyledPosition[0]]: {
        className: "little-block"
      },
      [noStyledPosition[1]]: {
        className: "little-block"
      },
      [noStyledPosition[2]]: {
        className: "little-block"
      },
      [noStyledPosition[3]]: {
        className: "little-block"
      },
      [noStyledPosition[4]]: {
        className: "little-block"
      },
      [noStyledPosition[5]]: {
        className: "little-block"
      },
      [noStyledPosition[6]]: {
        className: "little-block"
      },
      [noStyledPosition[7]]: {
        className: "little-block"
      },
      [noStyledPosition[8]]: {
        className: "little-block"
      },
      [noStyledPosition[9]]: {
        className: "little-block"
      },
      [noStyledPosition[10]]: {
        className: "little-block"
      },
      [noStyledPosition[11]]: {
        className: "little-block"
      },
      [noStyledPosition[12]]: {
        className: "little-block"
      },
      [noStyledPosition[13]]: {
        className: "little-block"
      },
      [noStyledPosition[14]]: {
        className: "little-block"
      },
      [noStyledPosition[15]]: {
        className: "little-block"
      },
      [noStyledPosition[16]]: {
        className: "little-block"
      },
      [noStyledPosition[17]]: {
        className: "little-block"
      },
      [noStyledPosition[18]]: {
        className: "little-block"
      },
      [noStyledPosition[19]]: {
        className: "little-block"
      },
      [noStyledPosition[20]]: {
        className: "little-block"
      },
      [noStyledPosition[21]]: {
        className: "little-block"
      },
      [noStyledPosition[22]]: {
        className: "little-block"
      },
      [noStyledPosition[23]]: {
        className: "little-block"
      },
      [noStyledPosition[24]]: {
        className: "little-block"
      },
      [noStyledPosition[25]]: {
        className: "little-block"
      },
      [noStyledPosition[26]]: {
        className: "little-block"
      },
      [noStyledPosition[27]]: {
        className: "little-block"
      },
      [noStyledPosition[28]]: {
        className: "little-block"
      },
      [noStyledPosition[29]]: {
        className: "little-block"
      },
      [noStyledPosition[30]]: {
        className: "little-block"
      },
      [noStyledPosition[31]]: {
        className: "little-block"
      },
      [noStyledPosition[32]]: {
        className: "little-block"
      },
      [noStyledPosition[33]]: {
        className: "little-block"
      },
      [noStyledPosition[34]]: {
        className: "little-block"
      },
      [noStyledPosition[35]]: {
        className: "little-block"
      },
      [noStyledPosition[36]]: {
        className: "little-block"
      },
      [noStyledPosition[37]]: {
        className: "little-block"
      },
      [noStyledPosition[38]]: {
        className: "little-block"
      },
      [noStyledPosition[39]]: {
        className: "little-block"
      },
      [noStyledPosition[40]]: {
        className: "little-block"
      },
      [noStyledPosition[41]]: {
        className: "little-block"
      },
      [noStyledPosition[42]]: {
        className: "little-block"
      },
      [noStyledPosition[43]]: {
        className: "little-block"
      },
      [noStyledPosition[44]]: {
        className: "little-block"
      },
      [noStyledPosition[45]]: {
        className: "little-block"
      },
      [noStyledPosition[46]]: {
        className: "little-block"
      },
      [noStyledPosition[47]]: {
        className: "little-block"
      },
      [noStyledPosition[48]]: {
        className: "little-block"
      },
      [noStyledPosition[49]]: {
        className: "little-block"
      },
      [noStyledPosition[50]]: {
        className: "little-block"
      },
      [noStyledPosition[51]]: {
        className: "little-block"
      },
      [noStyledPosition[52]]: {
        className: "little-block"
      },
      [noStyledPosition[53]]: {
        className: "little-block"
      },
      [noStyledPosition[54]]: {
        className: "little-block"
      },
      [noStyledPosition[55]]: {
        className: "little-block"
      },
      [noStyledPosition[56]]: {
        className: "little-block"
      },
      [noStyledPosition[57]]: {
        className: "little-block"
      },
      [noStyledPosition[58]]: {
        className: "little-block"
      },
      [noStyledPosition[59]]: {
        className: "little-block"
      },
      [noStyledPosition[60]]: {
        className: "little-block"
      },
      [noStyledPosition[61]]: {
        className: "little-block"
      },
      [noStyledPosition[62]]: {
        className: "little-block"
      },
      [noStyledPosition[63]]: {
        className: "little-block"
      },
      [noStyledPosition[64]]: {
        className: "little-block"
      },
      [noStyledPosition[65]]: {
        className: "little-block"
      },
      [noStyledPosition[66]]: {
        className: "little-block"
      },
      [noStyledPosition[67]]: {
        className: "little-block"
      },
      [noStyledPosition[68]]: {
        className: "little-block"
      },
      [noStyledPosition[69]]: {
        className: "little-block"
      },
      [noStyledPosition[70]]: {
        className: "little-block"
      },
      [noStyledPosition[71]]: {
        className: "little-block"
      },
      [noStyledPosition[72]]: {
        className: "little-block"
      },
      [noStyledPosition[73]]: {
        className: "little-block"
      },
      [noStyledPosition[74]]: {
        className: "little-block"
      },
      [noStyledPosition[75]]: {
        className: "little-block"
      },
      [noStyledPosition[76]]: {
        className: "little-block"
      },
      [noStyledPosition[77]]: {
        className: "little-block"
      },
      [noStyledPosition[78]]: {
        className: "little-block"
      },
      [noStyledPosition[79]]: {
        className: "little-block"
      },
      [noStyledPosition[80]]: {
        className: "little-block"
      },
      [noStyledPosition[81]]: {
        className: "little-block"
      },
      [noStyledPosition[82]]: {
        className: "little-block"
      },
      [noStyledPosition[83]]: {
        className: "little-block"
      },
      [noStyledPosition[84]]: {
        className: "little-block"
      },
      [noStyledPosition[85]]: {
        className: "little-block"
      },
      [noStyledPosition[86]]: {
        className: "little-block"
      },
      [noStyledPosition[87]]: {
        className: "little-block"
      },
      [noStyledPosition[88]]: {
        className: "little-block"
      },
      [noStyledPosition[89]]: {
        className: "little-block"
      },
      [noStyledPosition[90]]: {
        className: "little-block"
      },
      [noStyledPosition[91]]: {
        className: "little-block"
      },
      [noStyledPosition[92]]: {
        className: "little-block"
      },
      [noStyledPosition[93]]: {
        className: "little-block"
      },
      [noStyledPosition[94]]: {
        className: "little-block"
      },
      [noStyledPosition[95]]: {
        className: "little-block"
      },
      [noStyledPosition[96]]: {
        className: "little-block"
      },
      [noStyledPosition[97]]: {
        className: "little-block"
      },
      [noStyledPosition[98]]: {
        className: "little-block"
      },
      [noStyledPosition[99]]: {
        className: "little-block"
      },
      [noStyledPosition[100]]: {
        className: "little-block"
      },
      [noStyledPosition[101]]: {
        className: "little-block"
      },
      [noStyledPosition[102]]: {
        className: "little-block"
      },
      [noStyledPosition[103]]: {
        className: "little-block"
      },
      [noStyledPosition[104]]: {
        className: "little-block"
      },
      [noStyledPosition[105]]: {
        className: "little-block"
      },
      [noStyledPosition[106]]: {
        className: "little-block"
      },
      [noStyledPosition[107]]: {
        className: "little-block"
      },
      [noStyledPosition[108]]: {
        className: "little-block"
      },
      [noStyledPosition[109]]: {
        className: "little-block"
      },
      [noStyledPosition[110]]: {
        className: "little-block"
      },
      [noStyledPosition[111]]: {
        className: "little-block"
      },
      [noStyledPosition[112]]: {
        className: "little-block"
      },
      [noStyledPosition[113]]: {
        className: "little-block"
      },
      [noStyledPosition[114]]: {
        className: "little-block"
      },
      [noStyledPosition[115]]: {
        className: "little-block"
      },
      [noStyledPosition[116]]: {
        className: "little-block"
      },
      [noStyledPosition[117]]: {
        className: "little-block"
      },
      [noStyledPosition[118]]: {
        className: "little-block"
      },
      [noStyledPosition[119]]: {
        className: "little-block"
      },
      [noStyledPosition[120]]: {
        className: "little-block"
      },
      [noStyledPosition[121]]: {
        className: "little-block"
      },
      [noStyledPosition[122]]: {
        className: "little-block"
      },
      [noStyledPosition[123]]: {
        className: "little-block"
      },
      [noStyledPosition[124]]: {
        className: "little-block"
      },
      [noStyledPosition[125]]: {
        className: "little-block"
      },
      [noStyledPosition[126]]: {
        className: "little-block"
      },
      [noStyledPosition[127]]: {
        className: "little-block"
      },
      [noStyledPosition[128]]: {
        className: "little-block"
      },
      [noStyledPosition[129]]: {
        className: "little-block"
      },
      [noStyledPosition[130]]: {
        className: "little-block"
      },
      [noStyledPosition[131]]: {
        className: "little-block"
      },
      [noStyledPosition[132]]: {
        className: "little-block"
      },
      [noStyledPosition[133]]: {
        className: "little-block"
      },
      [noStyledPosition[134]]: {
        className: "little-block"
      },
      [noStyledPosition[135]]: {
        className: "little-block"
      },
      [noStyledPosition[136]]: {
        className: "little-block"
      },
      [noStyledPosition[137]]: {
        className: "little-block"
      },
      [noStyledPosition[138]]: {
        className: "little-block"
      },
      [noStyledPosition[139]]: {
        className: "little-block"
      },
      [noStyledPosition[140]]: {
        className: "little-block"
      },
      [noStyledPosition[141]]: {
        className: "little-block"
      },
      [noStyledPosition[142]]: {
        className: "little-block"
      },
      [noStyledPosition[143]]: {
        className: "little-block"
      },
      [noStyledPosition[144]]: {
        className: "little-block"
      },
      [noStyledPosition[145]]: {
        className: "little-block"
      },
      [noStyledPosition[146]]: {
        className: "little-block"
      },
      [noStyledPosition[147]]: {
        className: "little-block"
      },
      [noStyledPosition[148]]: {
        className: "little-block"
      },
      [noStyledPosition[149]]: {
        className: "little-block"
      },
      [noStyledPosition[150]]: {
        className: "little-block"
      },
      [noStyledPosition[151]]: {
        className: "little-block"
      },
      [noStyledPosition[152]]: {
        className: "little-block"
      },
      [noStyledPosition[153]]: {
        className: "little-block"
      },
      [noStyledPosition[154]]: {
        className: "little-block"
      },
      [noStyledPosition[155]]: {
        className: "little-block"
      },
      [noStyledPosition[156]]: {
        className: "little-block"
      },
      [noStyledPosition[157]]: {
        className: "little-block"
      },
      [noStyledPosition[158]]: {
        className: "little-block"
      },
      [noStyledPosition[159]]: {
        className: "little-block"
      },
      [noStyledPosition[160]]: {
        className: "little-block"
      },
      [noStyledPosition[161]]: {
        className: "little-block"
      },
      [noStyledPosition[162]]: {
        className: "little-block"
      },
      [noStyledPosition[163]]: {
        className: "little-block"
      },
      [noStyledPosition[164]]: {
        className: "little-block"
      },
      [noStyledPosition[165]]: {
        className: "little-block"
      },
      [noStyledPosition[166]]: {
        className: "little-block"
      },
      [noStyledPosition[167]]: {
        className: "little-block"
      },
      [noStyledPosition[168]]: {
        className: "little-block"
      },
      [noStyledPosition[169]]: {
        className: "little-block"
      },
      [noStyledPosition[170]]: {
        className: "little-block"
      },
      [noStyledPosition[171]]: {
        className: "little-block"
      },
      [noStyledPosition[172]]: {
        className: "little-block"
      },
      [noStyledPosition[173]]: {
        className: "little-block"
      },
      [noStyledPosition[174]]: {
        className: "little-block"
      },
      [noStyledPosition[175]]: {
        className: "little-block"
      },
      [noStyledPosition[176]]: {
        className: "little-block"
      },
      [noStyledPosition[177]]: {
        className: "little-block"
      },
      [noStyledPosition[178]]: {
        className: "little-block"
      },
      [noStyledPosition[179]]: {
        className: "little-block"
      },
      [noStyledPosition[180]]: {
        className: "little-block"
      },
      [noStyledPosition[181]]: {
        className: "little-block"
      },
      [noStyledPosition[182]]: {
        className: "little-block"
      },
      [noStyledPosition[183]]: {
        className: "little-block"
      },
      [noStyledPosition[184]]: {
        className: "little-block"
      },
      [noStyledPosition[185]]: {
        className: "little-block"
      },
      [noStyledPosition[186]]: {
        className: "little-block"
      },
      [noStyledPosition[187]]: {
        className: "little-block"
      },
      [noStyledPosition[188]]: {
        className: "little-block"
      },
      [noStyledPosition[189]]: {
        className: "little-block"
      },
      [noStyledPosition[190]]: {
        className: "little-block"
      },
      [noStyledPosition[191]]: {
        className: "little-block"
      },
      [noStyledPosition[192]]: {
        className: "little-block"
      },
      [noStyledPosition[193]]: {
        className: "little-block"
      },
      [noStyledPosition[194]]: {
        className: "little-block"
      },
      [noStyledPosition[195]]: {
        className: "little-block"
      },
      [noStyledPosition[196]]: {
        className: "little-block"
      },
      [noStyledPosition[197]]: {
        className: "little-block"
      },
      [noStyledPosition[198]]: {
        className: "little-block"
      },
      [noStyledPosition[199]]: {
        className: "little-block"
      },
      [noStyledPosition[200]]: {
        className: "little-block"
      },
      [noStyledPosition[201]]: {
        className: "little-block"
      },
      [noStyledPosition[202]]: {
        className: "little-block"
      },
      [noStyledPosition[203]]: {
        className: "little-block"
      },
      [noStyledPosition[204]]: {
        className: "little-block"
      },
      [noStyledPosition[205]]: {
        className: "little-block"
      },
      [noStyledPosition[206]]: {
        className: "little-block"
      },
      [noStyledPosition[207]]: {
        className: "little-block"
      },
      [noStyledPosition[208]]: {
        className: "little-block"
      },
      [noStyledPosition[209]]: {
        className: "little-block"
      },
      [noStyledPosition[210]]: {
        className: "little-block"
      },
      [noStyledPosition[211]]: {
        className: "little-block"
      },
      [noStyledPosition[212]]: {
        className: "little-block"
      },
      [noStyledPosition[213]]: {
        className: "little-block"
      },
      [noStyledPosition[214]]: {
        className: "little-block"
      },
      [noStyledPosition[215]]: {
        className: "little-block"
      },
      [noStyledPosition[216]]: {
        className: "little-block"
      },
      [noStyledPosition[217]]: {
        className: "little-block"
      },
      [noStyledPosition[218]]: {
        className: "little-block"
      },
      [noStyledPosition[219]]: {
        className: "little-block"
      },
      [noStyledPosition[220]]: {
        className: "little-block"
      },
      [noStyledPosition[221]]: {
        className: "little-block"
      },
      [noStyledPosition[222]]: {
        className: "little-block"
      },
      [noStyledPosition[223]]: {
        className: "little-block"
      },
      [noStyledPosition[224]]: {
        className: "little-block"
      },
      [noStyledPosition[225]]: {
        className: "little-block"
      },
      [noStyledPosition[226]]: {
        className: "little-block"
      },
      [noStyledPosition[227]]: {
        className: "little-block"
      },
      [noStyledPosition[228]]: {
        className: "little-block"
      },
      [noStyledPosition[229]]: {
        className: "little-block"
      },
      [noStyledPosition[230]]: {
        className: "little-block"
      },
      [noStyledPosition[231]]: {
        className: "little-block"
      },
      [noStyledPosition[232]]: {
        className: "little-block"
      },
      [noStyledPosition[233]]: {
        className: "little-block"
      },
      [noStyledPosition[234]]: {
        className: "little-block"
      },
      [noStyledPosition[235]]: {
        className: "little-block"
      },
      [noStyledPosition[236]]: {
        className: "little-block"
      },
      [noStyledPosition[237]]: {
        className: "little-block"
      },
      [noStyledPosition[238]]: {
        className: "little-block"
      },
      [noStyledPosition[239]]: {
        className: "little-block"
      },
      [noStyledPosition[240]]: {
        className: "little-block"
      },
      [noStyledPosition[241]]: {
        className: "little-block"
      },
      [noStyledPosition[242]]: {
        className: "little-block"
      },
      [noStyledPosition[243]]: {
        className: "little-block"
      },
      [noStyledPosition[244]]: {
        className: "little-block"
      },
      [noStyledPosition[245]]: {
        className: "little-block"
      },
      [noStyledPosition[246]]: {
        className: "little-block"
      },
      [noStyledPosition[247]]: {
        className: "little-block"
      },
      [noStyledPosition[248]]: {
        className: "little-block"
      },
      [noStyledPosition[249]]: {
        className: "little-block"
      },
      [noStyledPosition[250]]: {
        className: "little-block"
      },
      [noStyledPosition[251]]: {
        className: "little-block"
      },
      [noStyledPosition[252]]: {
        className: "little-block"
      },
      [noStyledPosition[253]]: {
        className: "little-block"
      },
      [noStyledPosition[254]]: {
        className: "little-block"
      },
      [noStyledPosition[255]]: {
        className: "little-block"
      },
      [noStyledPosition[256]]: {
        className: "little-block"
      },
      [noStyledPosition[257]]: {
        className: "little-block"
      },
      [noStyledPosition[258]]: {
        className: "little-block"
      },
      [noStyledPosition[259]]: {
        className: "little-block"
      },
      [noStyledPosition[260]]: {
        className: "little-block"
      },
      [noStyledPosition[261]]: {
        className: "little-block"
      },
      [noStyledPosition[262]]: {
        className: "little-block"
      },
      [noStyledPosition[263]]: {
        className: "little-block"
      },
      [noStyledPosition[264]]: {
        className: "little-block"
      },
      [noStyledPosition[265]]: {
        className: "little-block"
      },
      [noStyledPosition[266]]: {
        className: "little-block"
      },
      [noStyledPosition[267]]: {
        className: "little-block"
      },
      [noStyledPosition[268]]: {
        className: "little-block"
      },
      [noStyledPosition[269]]: {
        className: "little-block"
      },
      [noStyledPosition[270]]: {
        className: "little-block"
      },
      [noStyledPosition[271]]: {
        className: "little-block"
      },
      [noStyledPosition[272]]: {
        className: "little-block"
      },
      [noStyledPosition[273]]: {
        className: "little-block"
      },
      [noStyledPosition[274]]: {
        className: "little-block"
      },
      [noStyledPosition[275]]: {
        className: "little-block"
      },
      [noStyledPosition[276]]: {
        className: "little-block"
      },
      [noStyledPosition[277]]: {
        className: "little-block"
      },
      [noStyledPosition[278]]: {
        className: "little-block"
      },
      [noStyledPosition[279]]: {
        className: "little-block"
      },
      [noStyledPosition[280]]: {
        className: "little-block"
      },
      [noStyledPosition[281]]: {
        className: "little-block"
      },
      [noStyledPosition[282]]: {
        className: "little-block"
      },
      [noStyledPosition[283]]: {
        className: "little-block"
      },
      [noStyledPosition[284]]: {
        className: "little-block"
      },
      [noStyledPosition[285]]: {
        className: "little-block"
      },
      [noStyledPosition[286]]: {
        className: "little-block"
      },
      [noStyledPosition[287]]: {
        className: "little-block"
      },
      [noStyledPosition[288]]: {
        className: "little-block"
      },
      [noStyledPosition[289]]: {
        className: "little-block"
      },
      [noStyledPosition[290]]: {
        className: "little-block"
      },
      [noStyledPosition[291]]: {
        className: "little-block"
      },
      [noStyledPosition[292]]: {
        className: "little-block"
      },
      [noStyledPosition[293]]: {
        className: "little-block"
      },
      [noStyledPosition[294]]: {
        className: "little-block"
      },
      [noStyledPosition[295]]: {
        className: "little-block"
      },
      [noStyledPosition[296]]: {
        className: "little-block"
      },
      [noStyledPosition[297]]: {
        className: "little-block"
      },
      [noStyledPosition[298]]: {
        className: "little-block"
      },
      [noStyledPosition[299]]: {
        className: "little-block"
      },
      [noStyledPosition[300]]: {
        className: "little-block"
      },
      [noStyledPosition[301]]: {
        className: "little-block"
      },
      [noStyledPosition[302]]: {
        className: "little-block"
      },
      [noStyledPosition[303]]: {
        className: "little-block"
      },
      [noStyledPosition[304]]: {
        className: "little-block"
      },
      [noStyledPosition[305]]: {
        className: "little-block"
      },
      [noStyledPosition[306]]: {
        className: "little-block"
      },
      [noStyledPosition[307]]: {
        className: "little-block"
      },
      [noStyledPosition[308]]: {
        className: "little-block"
      },
      [noStyledPosition[309]]: {
        className: "little-block"
      },
      [noStyledPosition[310]]: {
        className: "little-block"
      },
      [noStyledPosition[311]]: {
        className: "little-block"
      },
      [noStyledPosition[312]]: {
        className: "little-block"
      },
      [noStyledPosition[313]]: {
        className: "little-block"
      },
      [noStyledPosition[314]]: {
        className: "little-block"
      },
      [noStyledPosition[315]]: {
        className: "little-block"
      },
      [noStyledPosition[316]]: {
        className: "little-block"
      },
      [noStyledPosition[317]]: {
        className: "little-block"
      },
      [noStyledPosition[318]]: {
        className: "little-block"
      },
      [noStyledPosition[319]]: {
        className: "little-block"
      },
      [noStyledPosition[320]]: {
        className: "little-block"
      },
      [noStyledPosition[321]]: {
        className: "little-block"
      },
      [noStyledPosition[322]]: {
        className: "little-block"
      },

    })
  }

  function changeLeft() {
    setPosition({
      position: position.position - 1
    });
    console.log("Position: " + position.position);
    
    let noStyledPosition = [];

    let counter = position.position + 1;
    console.log("Counter: " + counter);

    while(counter <= 325) {
      noStyledPosition.push(counter);
      counter++;
    }

    counter = position.position - 1;

    while(counter >= 2) {
      noStyledPosition.push(counter);
      counter--;
    }

    setPositionState({
      [position.position]: {
        className: "little-block-selected"
      },
      [noStyledPosition[0]]: {
        className: "little-block"
      },
      [noStyledPosition[1]]: {
        className: "little-block"
      },
      [noStyledPosition[2]]: {
        className: "little-block"
      },
      [noStyledPosition[3]]: {
        className: "little-block"
      },
      [noStyledPosition[4]]: {
        className: "little-block"
      },
      [noStyledPosition[5]]: {
        className: "little-block"
      },
      [noStyledPosition[6]]: {
        className: "little-block"
      },
      [noStyledPosition[7]]: {
        className: "little-block"
      },
      [noStyledPosition[8]]: {
        className: "little-block"
      },
      [noStyledPosition[9]]: {
        className: "little-block"
      },
      [noStyledPosition[10]]: {
        className: "little-block"
      },
      [noStyledPosition[11]]: {
        className: "little-block"
      },
      [noStyledPosition[12]]: {
        className: "little-block"
      },
      [noStyledPosition[13]]: {
        className: "little-block"
      },
      [noStyledPosition[14]]: {
        className: "little-block"
      },
      [noStyledPosition[15]]: {
        className: "little-block"
      },
      [noStyledPosition[16]]: {
        className: "little-block"
      },
      [noStyledPosition[17]]: {
        className: "little-block"
      },
      [noStyledPosition[18]]: {
        className: "little-block"
      },
      [noStyledPosition[19]]: {
        className: "little-block"
      },
      [noStyledPosition[20]]: {
        className: "little-block"
      },
      [noStyledPosition[21]]: {
        className: "little-block"
      },
      [noStyledPosition[22]]: {
        className: "little-block"
      },
      [noStyledPosition[23]]: {
        className: "little-block"
      },
      [noStyledPosition[24]]: {
        className: "little-block"
      },
      [noStyledPosition[25]]: {
        className: "little-block"
      },
      [noStyledPosition[26]]: {
        className: "little-block"
      },
      [noStyledPosition[27]]: {
        className: "little-block"
      },
      [noStyledPosition[28]]: {
        className: "little-block"
      },
      [noStyledPosition[29]]: {
        className: "little-block"
      },
      [noStyledPosition[30]]: {
        className: "little-block"
      },
      [noStyledPosition[31]]: {
        className: "little-block"
      },
      [noStyledPosition[32]]: {
        className: "little-block"
      },
      [noStyledPosition[33]]: {
        className: "little-block"
      },
      [noStyledPosition[34]]: {
        className: "little-block"
      },
      [noStyledPosition[35]]: {
        className: "little-block"
      },
      [noStyledPosition[36]]: {
        className: "little-block"
      },
      [noStyledPosition[37]]: {
        className: "little-block"
      },
      [noStyledPosition[38]]: {
        className: "little-block"
      },
      [noStyledPosition[39]]: {
        className: "little-block"
      },
      [noStyledPosition[40]]: {
        className: "little-block"
      },
      [noStyledPosition[41]]: {
        className: "little-block"
      },
      [noStyledPosition[42]]: {
        className: "little-block"
      },
      [noStyledPosition[43]]: {
        className: "little-block"
      },
      [noStyledPosition[44]]: {
        className: "little-block"
      },
      [noStyledPosition[45]]: {
        className: "little-block"
      },
      [noStyledPosition[46]]: {
        className: "little-block"
      },
      [noStyledPosition[47]]: {
        className: "little-block"
      },
      [noStyledPosition[48]]: {
        className: "little-block"
      },
      [noStyledPosition[49]]: {
        className: "little-block"
      },
      [noStyledPosition[50]]: {
        className: "little-block"
      },
      [noStyledPosition[51]]: {
        className: "little-block"
      },
      [noStyledPosition[52]]: {
        className: "little-block"
      },
      [noStyledPosition[53]]: {
        className: "little-block"
      },
      [noStyledPosition[54]]: {
        className: "little-block"
      },
      [noStyledPosition[55]]: {
        className: "little-block"
      },
      [noStyledPosition[56]]: {
        className: "little-block"
      },
      [noStyledPosition[57]]: {
        className: "little-block"
      },
      [noStyledPosition[58]]: {
        className: "little-block"
      },
      [noStyledPosition[59]]: {
        className: "little-block"
      },
      [noStyledPosition[60]]: {
        className: "little-block"
      },
      [noStyledPosition[61]]: {
        className: "little-block"
      },
      [noStyledPosition[62]]: {
        className: "little-block"
      },
      [noStyledPosition[63]]: {
        className: "little-block"
      },
      [noStyledPosition[64]]: {
        className: "little-block"
      },
      [noStyledPosition[65]]: {
        className: "little-block"
      },
      [noStyledPosition[66]]: {
        className: "little-block"
      },
      [noStyledPosition[67]]: {
        className: "little-block"
      },
      [noStyledPosition[68]]: {
        className: "little-block"
      },
      [noStyledPosition[69]]: {
        className: "little-block"
      },
      [noStyledPosition[70]]: {
        className: "little-block"
      },
      [noStyledPosition[71]]: {
        className: "little-block"
      },
      [noStyledPosition[72]]: {
        className: "little-block"
      },
      [noStyledPosition[73]]: {
        className: "little-block"
      },
      [noStyledPosition[74]]: {
        className: "little-block"
      },
      [noStyledPosition[75]]: {
        className: "little-block"
      },
      [noStyledPosition[76]]: {
        className: "little-block"
      },
      [noStyledPosition[77]]: {
        className: "little-block"
      },
      [noStyledPosition[78]]: {
        className: "little-block"
      },
      [noStyledPosition[79]]: {
        className: "little-block"
      },
      [noStyledPosition[80]]: {
        className: "little-block"
      },
      [noStyledPosition[81]]: {
        className: "little-block"
      },
      [noStyledPosition[82]]: {
        className: "little-block"
      },
      [noStyledPosition[83]]: {
        className: "little-block"
      },
      [noStyledPosition[84]]: {
        className: "little-block"
      },
      [noStyledPosition[85]]: {
        className: "little-block"
      },
      [noStyledPosition[86]]: {
        className: "little-block"
      },
      [noStyledPosition[87]]: {
        className: "little-block"
      },
      [noStyledPosition[88]]: {
        className: "little-block"
      },
      [noStyledPosition[89]]: {
        className: "little-block"
      },
      [noStyledPosition[90]]: {
        className: "little-block"
      },
      [noStyledPosition[91]]: {
        className: "little-block"
      },
      [noStyledPosition[92]]: {
        className: "little-block"
      },
      [noStyledPosition[93]]: {
        className: "little-block"
      },
      [noStyledPosition[94]]: {
        className: "little-block"
      },
      [noStyledPosition[95]]: {
        className: "little-block"
      },
      [noStyledPosition[96]]: {
        className: "little-block"
      },
      [noStyledPosition[97]]: {
        className: "little-block"
      },
      [noStyledPosition[98]]: {
        className: "little-block"
      },
      [noStyledPosition[99]]: {
        className: "little-block"
      },
      [noStyledPosition[100]]: {
        className: "little-block"
      },
      [noStyledPosition[101]]: {
        className: "little-block"
      },
      [noStyledPosition[102]]: {
        className: "little-block"
      },
      [noStyledPosition[103]]: {
        className: "little-block"
      },
      [noStyledPosition[104]]: {
        className: "little-block"
      },
      [noStyledPosition[105]]: {
        className: "little-block"
      },
      [noStyledPosition[106]]: {
        className: "little-block"
      },
      [noStyledPosition[107]]: {
        className: "little-block"
      },
      [noStyledPosition[108]]: {
        className: "little-block"
      },
      [noStyledPosition[109]]: {
        className: "little-block"
      },
      [noStyledPosition[110]]: {
        className: "little-block"
      },
      [noStyledPosition[111]]: {
        className: "little-block"
      },
      [noStyledPosition[112]]: {
        className: "little-block"
      },
      [noStyledPosition[113]]: {
        className: "little-block"
      },
      [noStyledPosition[114]]: {
        className: "little-block"
      },
      [noStyledPosition[115]]: {
        className: "little-block"
      },
      [noStyledPosition[116]]: {
        className: "little-block"
      },
      [noStyledPosition[117]]: {
        className: "little-block"
      },
      [noStyledPosition[118]]: {
        className: "little-block"
      },
      [noStyledPosition[119]]: {
        className: "little-block"
      },
      [noStyledPosition[120]]: {
        className: "little-block"
      },
      [noStyledPosition[121]]: {
        className: "little-block"
      },
      [noStyledPosition[122]]: {
        className: "little-block"
      },
      [noStyledPosition[123]]: {
        className: "little-block"
      },
      [noStyledPosition[124]]: {
        className: "little-block"
      },
      [noStyledPosition[125]]: {
        className: "little-block"
      },
      [noStyledPosition[126]]: {
        className: "little-block"
      },
      [noStyledPosition[127]]: {
        className: "little-block"
      },
      [noStyledPosition[128]]: {
        className: "little-block"
      },
      [noStyledPosition[129]]: {
        className: "little-block"
      },
      [noStyledPosition[130]]: {
        className: "little-block"
      },
      [noStyledPosition[131]]: {
        className: "little-block"
      },
      [noStyledPosition[132]]: {
        className: "little-block"
      },
      [noStyledPosition[133]]: {
        className: "little-block"
      },
      [noStyledPosition[134]]: {
        className: "little-block"
      },
      [noStyledPosition[135]]: {
        className: "little-block"
      },
      [noStyledPosition[136]]: {
        className: "little-block"
      },
      [noStyledPosition[137]]: {
        className: "little-block"
      },
      [noStyledPosition[138]]: {
        className: "little-block"
      },
      [noStyledPosition[139]]: {
        className: "little-block"
      },
      [noStyledPosition[140]]: {
        className: "little-block"
      },
      [noStyledPosition[141]]: {
        className: "little-block"
      },
      [noStyledPosition[142]]: {
        className: "little-block"
      },
      [noStyledPosition[143]]: {
        className: "little-block"
      },
      [noStyledPosition[144]]: {
        className: "little-block"
      },
      [noStyledPosition[145]]: {
        className: "little-block"
      },
      [noStyledPosition[146]]: {
        className: "little-block"
      },
      [noStyledPosition[147]]: {
        className: "little-block"
      },
      [noStyledPosition[148]]: {
        className: "little-block"
      },
      [noStyledPosition[149]]: {
        className: "little-block"
      },
      [noStyledPosition[150]]: {
        className: "little-block"
      },
      [noStyledPosition[151]]: {
        className: "little-block"
      },
      [noStyledPosition[152]]: {
        className: "little-block"
      },
      [noStyledPosition[153]]: {
        className: "little-block"
      },
      [noStyledPosition[154]]: {
        className: "little-block"
      },
      [noStyledPosition[155]]: {
        className: "little-block"
      },
      [noStyledPosition[156]]: {
        className: "little-block"
      },
      [noStyledPosition[157]]: {
        className: "little-block"
      },
      [noStyledPosition[158]]: {
        className: "little-block"
      },
      [noStyledPosition[159]]: {
        className: "little-block"
      },
      [noStyledPosition[160]]: {
        className: "little-block"
      },
      [noStyledPosition[161]]: {
        className: "little-block"
      },
      [noStyledPosition[162]]: {
        className: "little-block"
      },
      [noStyledPosition[163]]: {
        className: "little-block"
      },
      [noStyledPosition[164]]: {
        className: "little-block"
      },
      [noStyledPosition[165]]: {
        className: "little-block"
      },
      [noStyledPosition[166]]: {
        className: "little-block"
      },
      [noStyledPosition[167]]: {
        className: "little-block"
      },
      [noStyledPosition[168]]: {
        className: "little-block"
      },
      [noStyledPosition[169]]: {
        className: "little-block"
      },
      [noStyledPosition[170]]: {
        className: "little-block"
      },
      [noStyledPosition[171]]: {
        className: "little-block"
      },
      [noStyledPosition[172]]: {
        className: "little-block"
      },
      [noStyledPosition[173]]: {
        className: "little-block"
      },
      [noStyledPosition[174]]: {
        className: "little-block"
      },
      [noStyledPosition[175]]: {
        className: "little-block"
      },
      [noStyledPosition[176]]: {
        className: "little-block"
      },
      [noStyledPosition[177]]: {
        className: "little-block"
      },
      [noStyledPosition[178]]: {
        className: "little-block"
      },
      [noStyledPosition[179]]: {
        className: "little-block"
      },
      [noStyledPosition[180]]: {
        className: "little-block"
      },
      [noStyledPosition[181]]: {
        className: "little-block"
      },
      [noStyledPosition[182]]: {
        className: "little-block"
      },
      [noStyledPosition[183]]: {
        className: "little-block"
      },
      [noStyledPosition[184]]: {
        className: "little-block"
      },
      [noStyledPosition[185]]: {
        className: "little-block"
      },
      [noStyledPosition[186]]: {
        className: "little-block"
      },
      [noStyledPosition[187]]: {
        className: "little-block"
      },
      [noStyledPosition[188]]: {
        className: "little-block"
      },
      [noStyledPosition[189]]: {
        className: "little-block"
      },
      [noStyledPosition[190]]: {
        className: "little-block"
      },
      [noStyledPosition[191]]: {
        className: "little-block"
      },
      [noStyledPosition[192]]: {
        className: "little-block"
      },
      [noStyledPosition[193]]: {
        className: "little-block"
      },
      [noStyledPosition[194]]: {
        className: "little-block"
      },
      [noStyledPosition[195]]: {
        className: "little-block"
      },
      [noStyledPosition[196]]: {
        className: "little-block"
      },
      [noStyledPosition[197]]: {
        className: "little-block"
      },
      [noStyledPosition[198]]: {
        className: "little-block"
      },
      [noStyledPosition[199]]: {
        className: "little-block"
      },
      [noStyledPosition[200]]: {
        className: "little-block"
      },
      [noStyledPosition[201]]: {
        className: "little-block"
      },
      [noStyledPosition[202]]: {
        className: "little-block"
      },
      [noStyledPosition[203]]: {
        className: "little-block"
      },
      [noStyledPosition[204]]: {
        className: "little-block"
      },
      [noStyledPosition[205]]: {
        className: "little-block"
      },
      [noStyledPosition[206]]: {
        className: "little-block"
      },
      [noStyledPosition[207]]: {
        className: "little-block"
      },
      [noStyledPosition[208]]: {
        className: "little-block"
      },
      [noStyledPosition[209]]: {
        className: "little-block"
      },
      [noStyledPosition[210]]: {
        className: "little-block"
      },
      [noStyledPosition[211]]: {
        className: "little-block"
      },
      [noStyledPosition[212]]: {
        className: "little-block"
      },
      [noStyledPosition[213]]: {
        className: "little-block"
      },
      [noStyledPosition[214]]: {
        className: "little-block"
      },
      [noStyledPosition[215]]: {
        className: "little-block"
      },
      [noStyledPosition[216]]: {
        className: "little-block"
      },
      [noStyledPosition[217]]: {
        className: "little-block"
      },
      [noStyledPosition[218]]: {
        className: "little-block"
      },
      [noStyledPosition[219]]: {
        className: "little-block"
      },
      [noStyledPosition[220]]: {
        className: "little-block"
      },
      [noStyledPosition[221]]: {
        className: "little-block"
      },
      [noStyledPosition[222]]: {
        className: "little-block"
      },
      [noStyledPosition[223]]: {
        className: "little-block"
      },
      [noStyledPosition[224]]: {
        className: "little-block"
      },
      [noStyledPosition[225]]: {
        className: "little-block"
      },
      [noStyledPosition[226]]: {
        className: "little-block"
      },
      [noStyledPosition[227]]: {
        className: "little-block"
      },
      [noStyledPosition[228]]: {
        className: "little-block"
      },
      [noStyledPosition[229]]: {
        className: "little-block"
      },
      [noStyledPosition[230]]: {
        className: "little-block"
      },
      [noStyledPosition[231]]: {
        className: "little-block"
      },
      [noStyledPosition[232]]: {
        className: "little-block"
      },
      [noStyledPosition[233]]: {
        className: "little-block"
      },
      [noStyledPosition[234]]: {
        className: "little-block"
      },
      [noStyledPosition[235]]: {
        className: "little-block"
      },
      [noStyledPosition[236]]: {
        className: "little-block"
      },
      [noStyledPosition[237]]: {
        className: "little-block"
      },
      [noStyledPosition[238]]: {
        className: "little-block"
      },
      [noStyledPosition[239]]: {
        className: "little-block"
      },
      [noStyledPosition[240]]: {
        className: "little-block"
      },
      [noStyledPosition[241]]: {
        className: "little-block"
      },
      [noStyledPosition[242]]: {
        className: "little-block"
      },
      [noStyledPosition[243]]: {
        className: "little-block"
      },
      [noStyledPosition[244]]: {
        className: "little-block"
      },
      [noStyledPosition[245]]: {
        className: "little-block"
      },
      [noStyledPosition[246]]: {
        className: "little-block"
      },
      [noStyledPosition[247]]: {
        className: "little-block"
      },
      [noStyledPosition[248]]: {
        className: "little-block"
      },
      [noStyledPosition[249]]: {
        className: "little-block"
      },
      [noStyledPosition[250]]: {
        className: "little-block"
      },
      [noStyledPosition[251]]: {
        className: "little-block"
      },
      [noStyledPosition[252]]: {
        className: "little-block"
      },
      [noStyledPosition[253]]: {
        className: "little-block"
      },
      [noStyledPosition[254]]: {
        className: "little-block"
      },
      [noStyledPosition[255]]: {
        className: "little-block"
      },
      [noStyledPosition[256]]: {
        className: "little-block"
      },
      [noStyledPosition[257]]: {
        className: "little-block"
      },
      [noStyledPosition[258]]: {
        className: "little-block"
      },
      [noStyledPosition[259]]: {
        className: "little-block"
      },
      [noStyledPosition[260]]: {
        className: "little-block"
      },
      [noStyledPosition[261]]: {
        className: "little-block"
      },
      [noStyledPosition[262]]: {
        className: "little-block"
      },
      [noStyledPosition[263]]: {
        className: "little-block"
      },
      [noStyledPosition[264]]: {
        className: "little-block"
      },
      [noStyledPosition[265]]: {
        className: "little-block"
      },
      [noStyledPosition[266]]: {
        className: "little-block"
      },
      [noStyledPosition[267]]: {
        className: "little-block"
      },
      [noStyledPosition[268]]: {
        className: "little-block"
      },
      [noStyledPosition[269]]: {
        className: "little-block"
      },
      [noStyledPosition[270]]: {
        className: "little-block"
      },
      [noStyledPosition[271]]: {
        className: "little-block"
      },
      [noStyledPosition[272]]: {
        className: "little-block"
      },
      [noStyledPosition[273]]: {
        className: "little-block"
      },
      [noStyledPosition[274]]: {
        className: "little-block"
      },
      [noStyledPosition[275]]: {
        className: "little-block"
      },
      [noStyledPosition[276]]: {
        className: "little-block"
      },
      [noStyledPosition[277]]: {
        className: "little-block"
      },
      [noStyledPosition[278]]: {
        className: "little-block"
      },
      [noStyledPosition[279]]: {
        className: "little-block"
      },
      [noStyledPosition[280]]: {
        className: "little-block"
      },
      [noStyledPosition[281]]: {
        className: "little-block"
      },
      [noStyledPosition[282]]: {
        className: "little-block"
      },
      [noStyledPosition[283]]: {
        className: "little-block"
      },
      [noStyledPosition[284]]: {
        className: "little-block"
      },
      [noStyledPosition[285]]: {
        className: "little-block"
      },
      [noStyledPosition[286]]: {
        className: "little-block"
      },
      [noStyledPosition[287]]: {
        className: "little-block"
      },
      [noStyledPosition[288]]: {
        className: "little-block"
      },
      [noStyledPosition[289]]: {
        className: "little-block"
      },
      [noStyledPosition[290]]: {
        className: "little-block"
      },
      [noStyledPosition[291]]: {
        className: "little-block"
      },
      [noStyledPosition[292]]: {
        className: "little-block"
      },
      [noStyledPosition[293]]: {
        className: "little-block"
      },
      [noStyledPosition[294]]: {
        className: "little-block"
      },
      [noStyledPosition[295]]: {
        className: "little-block"
      },
      [noStyledPosition[296]]: {
        className: "little-block"
      },
      [noStyledPosition[297]]: {
        className: "little-block"
      },
      [noStyledPosition[298]]: {
        className: "little-block"
      },
      [noStyledPosition[299]]: {
        className: "little-block"
      },
      [noStyledPosition[300]]: {
        className: "little-block"
      },
      [noStyledPosition[301]]: {
        className: "little-block"
      },
      [noStyledPosition[302]]: {
        className: "little-block"
      },
      [noStyledPosition[303]]: {
        className: "little-block"
      },
      [noStyledPosition[304]]: {
        className: "little-block"
      },
      [noStyledPosition[305]]: {
        className: "little-block"
      },
      [noStyledPosition[306]]: {
        className: "little-block"
      },
      [noStyledPosition[307]]: {
        className: "little-block"
      },
      [noStyledPosition[308]]: {
        className: "little-block"
      },
      [noStyledPosition[309]]: {
        className: "little-block"
      },
      [noStyledPosition[310]]: {
        className: "little-block"
      },
      [noStyledPosition[311]]: {
        className: "little-block"
      },
      [noStyledPosition[312]]: {
        className: "little-block"
      },
      [noStyledPosition[313]]: {
        className: "little-block"
      },
      [noStyledPosition[314]]: {
        className: "little-block"
      },
      [noStyledPosition[315]]: {
        className: "little-block"
      },
      [noStyledPosition[316]]: {
        className: "little-block"
      },
      [noStyledPosition[317]]: {
        className: "little-block"
      },
      [noStyledPosition[318]]: {
        className: "little-block"
      },
      [noStyledPosition[319]]: {
        className: "little-block"
      },
      [noStyledPosition[320]]: {
        className: "little-block"
      },
      [noStyledPosition[321]]: {
        className: "little-block"
      },
      [noStyledPosition[322]]: {
        className: "little-block"
      },

    })
    
  }

  function changeDown() {
    setPosition({
      position: position.position + 18
    });
    console.log("Position: " + position.position);
    
    let noStyledPosition = [];

    let counter = position.position + 1;
    console.log("Counter: " + counter);

    while(counter <= 325) {
      noStyledPosition.push(counter);
      counter++;
    }

    counter = position.position - 1;

    while(counter >= 2) {
      noStyledPosition.push(counter);
      counter--;
    }

    setPositionState({
      [position.position]: {
        className: "little-block-selected"
      },
      [noStyledPosition[0]]: {
        className: "little-block"
      },
      [noStyledPosition[1]]: {
        className: "little-block"
      },
      [noStyledPosition[2]]: {
        className: "little-block"
      },
      [noStyledPosition[3]]: {
        className: "little-block"
      },
      [noStyledPosition[4]]: {
        className: "little-block"
      },
      [noStyledPosition[5]]: {
        className: "little-block"
      },
      [noStyledPosition[6]]: {
        className: "little-block"
      },
      [noStyledPosition[7]]: {
        className: "little-block"
      },
      [noStyledPosition[8]]: {
        className: "little-block"
      },
      [noStyledPosition[9]]: {
        className: "little-block"
      },
      [noStyledPosition[10]]: {
        className: "little-block"
      },
      [noStyledPosition[11]]: {
        className: "little-block"
      },
      [noStyledPosition[12]]: {
        className: "little-block"
      },
      [noStyledPosition[13]]: {
        className: "little-block"
      },
      [noStyledPosition[14]]: {
        className: "little-block"
      },
      [noStyledPosition[15]]: {
        className: "little-block"
      },
      [noStyledPosition[16]]: {
        className: "little-block"
      },
      [noStyledPosition[17]]: {
        className: "little-block"
      },
      [noStyledPosition[18]]: {
        className: "little-block"
      },
      [noStyledPosition[19]]: {
        className: "little-block"
      },
      [noStyledPosition[20]]: {
        className: "little-block"
      },
      [noStyledPosition[21]]: {
        className: "little-block"
      },
      [noStyledPosition[22]]: {
        className: "little-block"
      },
      [noStyledPosition[23]]: {
        className: "little-block"
      },
      [noStyledPosition[24]]: {
        className: "little-block"
      },
      [noStyledPosition[25]]: {
        className: "little-block"
      },
      [noStyledPosition[26]]: {
        className: "little-block"
      },
      [noStyledPosition[27]]: {
        className: "little-block"
      },
      [noStyledPosition[28]]: {
        className: "little-block"
      },
      [noStyledPosition[29]]: {
        className: "little-block"
      },
      [noStyledPosition[30]]: {
        className: "little-block"
      },
      [noStyledPosition[31]]: {
        className: "little-block"
      },
      [noStyledPosition[32]]: {
        className: "little-block"
      },
      [noStyledPosition[33]]: {
        className: "little-block"
      },
      [noStyledPosition[34]]: {
        className: "little-block"
      },
      [noStyledPosition[35]]: {
        className: "little-block"
      },
      [noStyledPosition[36]]: {
        className: "little-block"
      },
      [noStyledPosition[37]]: {
        className: "little-block"
      },
      [noStyledPosition[38]]: {
        className: "little-block"
      },
      [noStyledPosition[39]]: {
        className: "little-block"
      },
      [noStyledPosition[40]]: {
        className: "little-block"
      },
      [noStyledPosition[41]]: {
        className: "little-block"
      },
      [noStyledPosition[42]]: {
        className: "little-block"
      },
      [noStyledPosition[43]]: {
        className: "little-block"
      },
      [noStyledPosition[44]]: {
        className: "little-block"
      },
      [noStyledPosition[45]]: {
        className: "little-block"
      },
      [noStyledPosition[46]]: {
        className: "little-block"
      },
      [noStyledPosition[47]]: {
        className: "little-block"
      },
      [noStyledPosition[48]]: {
        className: "little-block"
      },
      [noStyledPosition[49]]: {
        className: "little-block"
      },
      [noStyledPosition[50]]: {
        className: "little-block"
      },
      [noStyledPosition[51]]: {
        className: "little-block"
      },
      [noStyledPosition[52]]: {
        className: "little-block"
      },
      [noStyledPosition[53]]: {
        className: "little-block"
      },
      [noStyledPosition[54]]: {
        className: "little-block"
      },
      [noStyledPosition[55]]: {
        className: "little-block"
      },
      [noStyledPosition[56]]: {
        className: "little-block"
      },
      [noStyledPosition[57]]: {
        className: "little-block"
      },
      [noStyledPosition[58]]: {
        className: "little-block"
      },
      [noStyledPosition[59]]: {
        className: "little-block"
      },
      [noStyledPosition[60]]: {
        className: "little-block"
      },
      [noStyledPosition[61]]: {
        className: "little-block"
      },
      [noStyledPosition[62]]: {
        className: "little-block"
      },
      [noStyledPosition[63]]: {
        className: "little-block"
      },
      [noStyledPosition[64]]: {
        className: "little-block"
      },
      [noStyledPosition[65]]: {
        className: "little-block"
      },
      [noStyledPosition[66]]: {
        className: "little-block"
      },
      [noStyledPosition[67]]: {
        className: "little-block"
      },
      [noStyledPosition[68]]: {
        className: "little-block"
      },
      [noStyledPosition[69]]: {
        className: "little-block"
      },
      [noStyledPosition[70]]: {
        className: "little-block"
      },
      [noStyledPosition[71]]: {
        className: "little-block"
      },
      [noStyledPosition[72]]: {
        className: "little-block"
      },
      [noStyledPosition[73]]: {
        className: "little-block"
      },
      [noStyledPosition[74]]: {
        className: "little-block"
      },
      [noStyledPosition[75]]: {
        className: "little-block"
      },
      [noStyledPosition[76]]: {
        className: "little-block"
      },
      [noStyledPosition[77]]: {
        className: "little-block"
      },
      [noStyledPosition[78]]: {
        className: "little-block"
      },
      [noStyledPosition[79]]: {
        className: "little-block"
      },
      [noStyledPosition[80]]: {
        className: "little-block"
      },
      [noStyledPosition[81]]: {
        className: "little-block"
      },
      [noStyledPosition[82]]: {
        className: "little-block"
      },
      [noStyledPosition[83]]: {
        className: "little-block"
      },
      [noStyledPosition[84]]: {
        className: "little-block"
      },
      [noStyledPosition[85]]: {
        className: "little-block"
      },
      [noStyledPosition[86]]: {
        className: "little-block"
      },
      [noStyledPosition[87]]: {
        className: "little-block"
      },
      [noStyledPosition[88]]: {
        className: "little-block"
      },
      [noStyledPosition[89]]: {
        className: "little-block"
      },
      [noStyledPosition[90]]: {
        className: "little-block"
      },
      [noStyledPosition[91]]: {
        className: "little-block"
      },
      [noStyledPosition[92]]: {
        className: "little-block"
      },
      [noStyledPosition[93]]: {
        className: "little-block"
      },
      [noStyledPosition[94]]: {
        className: "little-block"
      },
      [noStyledPosition[95]]: {
        className: "little-block"
      },
      [noStyledPosition[96]]: {
        className: "little-block"
      },
      [noStyledPosition[97]]: {
        className: "little-block"
      },
      [noStyledPosition[98]]: {
        className: "little-block"
      },
      [noStyledPosition[99]]: {
        className: "little-block"
      },
      [noStyledPosition[100]]: {
        className: "little-block"
      },
      [noStyledPosition[101]]: {
        className: "little-block"
      },
      [noStyledPosition[102]]: {
        className: "little-block"
      },
      [noStyledPosition[103]]: {
        className: "little-block"
      },
      [noStyledPosition[104]]: {
        className: "little-block"
      },
      [noStyledPosition[105]]: {
        className: "little-block"
      },
      [noStyledPosition[106]]: {
        className: "little-block"
      },
      [noStyledPosition[107]]: {
        className: "little-block"
      },
      [noStyledPosition[108]]: {
        className: "little-block"
      },
      [noStyledPosition[109]]: {
        className: "little-block"
      },
      [noStyledPosition[110]]: {
        className: "little-block"
      },
      [noStyledPosition[111]]: {
        className: "little-block"
      },
      [noStyledPosition[112]]: {
        className: "little-block"
      },
      [noStyledPosition[113]]: {
        className: "little-block"
      },
      [noStyledPosition[114]]: {
        className: "little-block"
      },
      [noStyledPosition[115]]: {
        className: "little-block"
      },
      [noStyledPosition[116]]: {
        className: "little-block"
      },
      [noStyledPosition[117]]: {
        className: "little-block"
      },
      [noStyledPosition[118]]: {
        className: "little-block"
      },
      [noStyledPosition[119]]: {
        className: "little-block"
      },
      [noStyledPosition[120]]: {
        className: "little-block"
      },
      [noStyledPosition[121]]: {
        className: "little-block"
      },
      [noStyledPosition[122]]: {
        className: "little-block"
      },
      [noStyledPosition[123]]: {
        className: "little-block"
      },
      [noStyledPosition[124]]: {
        className: "little-block"
      },
      [noStyledPosition[125]]: {
        className: "little-block"
      },
      [noStyledPosition[126]]: {
        className: "little-block"
      },
      [noStyledPosition[127]]: {
        className: "little-block"
      },
      [noStyledPosition[128]]: {
        className: "little-block"
      },
      [noStyledPosition[129]]: {
        className: "little-block"
      },
      [noStyledPosition[130]]: {
        className: "little-block"
      },
      [noStyledPosition[131]]: {
        className: "little-block"
      },
      [noStyledPosition[132]]: {
        className: "little-block"
      },
      [noStyledPosition[133]]: {
        className: "little-block"
      },
      [noStyledPosition[134]]: {
        className: "little-block"
      },
      [noStyledPosition[135]]: {
        className: "little-block"
      },
      [noStyledPosition[136]]: {
        className: "little-block"
      },
      [noStyledPosition[137]]: {
        className: "little-block"
      },
      [noStyledPosition[138]]: {
        className: "little-block"
      },
      [noStyledPosition[139]]: {
        className: "little-block"
      },
      [noStyledPosition[140]]: {
        className: "little-block"
      },
      [noStyledPosition[141]]: {
        className: "little-block"
      },
      [noStyledPosition[142]]: {
        className: "little-block"
      },
      [noStyledPosition[143]]: {
        className: "little-block"
      },
      [noStyledPosition[144]]: {
        className: "little-block"
      },
      [noStyledPosition[145]]: {
        className: "little-block"
      },
      [noStyledPosition[146]]: {
        className: "little-block"
      },
      [noStyledPosition[147]]: {
        className: "little-block"
      },
      [noStyledPosition[148]]: {
        className: "little-block"
      },
      [noStyledPosition[149]]: {
        className: "little-block"
      },
      [noStyledPosition[150]]: {
        className: "little-block"
      },
      [noStyledPosition[151]]: {
        className: "little-block"
      },
      [noStyledPosition[152]]: {
        className: "little-block"
      },
      [noStyledPosition[153]]: {
        className: "little-block"
      },
      [noStyledPosition[154]]: {
        className: "little-block"
      },
      [noStyledPosition[155]]: {
        className: "little-block"
      },
      [noStyledPosition[156]]: {
        className: "little-block"
      },
      [noStyledPosition[157]]: {
        className: "little-block"
      },
      [noStyledPosition[158]]: {
        className: "little-block"
      },
      [noStyledPosition[159]]: {
        className: "little-block"
      },
      [noStyledPosition[160]]: {
        className: "little-block"
      },
      [noStyledPosition[161]]: {
        className: "little-block"
      },
      [noStyledPosition[162]]: {
        className: "little-block"
      },
      [noStyledPosition[163]]: {
        className: "little-block"
      },
      [noStyledPosition[164]]: {
        className: "little-block"
      },
      [noStyledPosition[165]]: {
        className: "little-block"
      },
      [noStyledPosition[166]]: {
        className: "little-block"
      },
      [noStyledPosition[167]]: {
        className: "little-block"
      },
      [noStyledPosition[168]]: {
        className: "little-block"
      },
      [noStyledPosition[169]]: {
        className: "little-block"
      },
      [noStyledPosition[170]]: {
        className: "little-block"
      },
      [noStyledPosition[171]]: {
        className: "little-block"
      },
      [noStyledPosition[172]]: {
        className: "little-block"
      },
      [noStyledPosition[173]]: {
        className: "little-block"
      },
      [noStyledPosition[174]]: {
        className: "little-block"
      },
      [noStyledPosition[175]]: {
        className: "little-block"
      },
      [noStyledPosition[176]]: {
        className: "little-block"
      },
      [noStyledPosition[177]]: {
        className: "little-block"
      },
      [noStyledPosition[178]]: {
        className: "little-block"
      },
      [noStyledPosition[179]]: {
        className: "little-block"
      },
      [noStyledPosition[180]]: {
        className: "little-block"
      },
      [noStyledPosition[181]]: {
        className: "little-block"
      },
      [noStyledPosition[182]]: {
        className: "little-block"
      },
      [noStyledPosition[183]]: {
        className: "little-block"
      },
      [noStyledPosition[184]]: {
        className: "little-block"
      },
      [noStyledPosition[185]]: {
        className: "little-block"
      },
      [noStyledPosition[186]]: {
        className: "little-block"
      },
      [noStyledPosition[187]]: {
        className: "little-block"
      },
      [noStyledPosition[188]]: {
        className: "little-block"
      },
      [noStyledPosition[189]]: {
        className: "little-block"
      },
      [noStyledPosition[190]]: {
        className: "little-block"
      },
      [noStyledPosition[191]]: {
        className: "little-block"
      },
      [noStyledPosition[192]]: {
        className: "little-block"
      },
      [noStyledPosition[193]]: {
        className: "little-block"
      },
      [noStyledPosition[194]]: {
        className: "little-block"
      },
      [noStyledPosition[195]]: {
        className: "little-block"
      },
      [noStyledPosition[196]]: {
        className: "little-block"
      },
      [noStyledPosition[197]]: {
        className: "little-block"
      },
      [noStyledPosition[198]]: {
        className: "little-block"
      },
      [noStyledPosition[199]]: {
        className: "little-block"
      },
      [noStyledPosition[200]]: {
        className: "little-block"
      },
      [noStyledPosition[201]]: {
        className: "little-block"
      },
      [noStyledPosition[202]]: {
        className: "little-block"
      },
      [noStyledPosition[203]]: {
        className: "little-block"
      },
      [noStyledPosition[204]]: {
        className: "little-block"
      },
      [noStyledPosition[205]]: {
        className: "little-block"
      },
      [noStyledPosition[206]]: {
        className: "little-block"
      },
      [noStyledPosition[207]]: {
        className: "little-block"
      },
      [noStyledPosition[208]]: {
        className: "little-block"
      },
      [noStyledPosition[209]]: {
        className: "little-block"
      },
      [noStyledPosition[210]]: {
        className: "little-block"
      },
      [noStyledPosition[211]]: {
        className: "little-block"
      },
      [noStyledPosition[212]]: {
        className: "little-block"
      },
      [noStyledPosition[213]]: {
        className: "little-block"
      },
      [noStyledPosition[214]]: {
        className: "little-block"
      },
      [noStyledPosition[215]]: {
        className: "little-block"
      },
      [noStyledPosition[216]]: {
        className: "little-block"
      },
      [noStyledPosition[217]]: {
        className: "little-block"
      },
      [noStyledPosition[218]]: {
        className: "little-block"
      },
      [noStyledPosition[219]]: {
        className: "little-block"
      },
      [noStyledPosition[220]]: {
        className: "little-block"
      },
      [noStyledPosition[221]]: {
        className: "little-block"
      },
      [noStyledPosition[222]]: {
        className: "little-block"
      },
      [noStyledPosition[223]]: {
        className: "little-block"
      },
      [noStyledPosition[224]]: {
        className: "little-block"
      },
      [noStyledPosition[225]]: {
        className: "little-block"
      },
      [noStyledPosition[226]]: {
        className: "little-block"
      },
      [noStyledPosition[227]]: {
        className: "little-block"
      },
      [noStyledPosition[228]]: {
        className: "little-block"
      },
      [noStyledPosition[229]]: {
        className: "little-block"
      },
      [noStyledPosition[230]]: {
        className: "little-block"
      },
      [noStyledPosition[231]]: {
        className: "little-block"
      },
      [noStyledPosition[232]]: {
        className: "little-block"
      },
      [noStyledPosition[233]]: {
        className: "little-block"
      },
      [noStyledPosition[234]]: {
        className: "little-block"
      },
      [noStyledPosition[235]]: {
        className: "little-block"
      },
      [noStyledPosition[236]]: {
        className: "little-block"
      },
      [noStyledPosition[237]]: {
        className: "little-block"
      },
      [noStyledPosition[238]]: {
        className: "little-block"
      },
      [noStyledPosition[239]]: {
        className: "little-block"
      },
      [noStyledPosition[240]]: {
        className: "little-block"
      },
      [noStyledPosition[241]]: {
        className: "little-block"
      },
      [noStyledPosition[242]]: {
        className: "little-block"
      },
      [noStyledPosition[243]]: {
        className: "little-block"
      },
      [noStyledPosition[244]]: {
        className: "little-block"
      },
      [noStyledPosition[245]]: {
        className: "little-block"
      },
      [noStyledPosition[246]]: {
        className: "little-block"
      },
      [noStyledPosition[247]]: {
        className: "little-block"
      },
      [noStyledPosition[248]]: {
        className: "little-block"
      },
      [noStyledPosition[249]]: {
        className: "little-block"
      },
      [noStyledPosition[250]]: {
        className: "little-block"
      },
      [noStyledPosition[251]]: {
        className: "little-block"
      },
      [noStyledPosition[252]]: {
        className: "little-block"
      },
      [noStyledPosition[253]]: {
        className: "little-block"
      },
      [noStyledPosition[254]]: {
        className: "little-block"
      },
      [noStyledPosition[255]]: {
        className: "little-block"
      },
      [noStyledPosition[256]]: {
        className: "little-block"
      },
      [noStyledPosition[257]]: {
        className: "little-block"
      },
      [noStyledPosition[258]]: {
        className: "little-block"
      },
      [noStyledPosition[259]]: {
        className: "little-block"
      },
      [noStyledPosition[260]]: {
        className: "little-block"
      },
      [noStyledPosition[261]]: {
        className: "little-block"
      },
      [noStyledPosition[262]]: {
        className: "little-block"
      },
      [noStyledPosition[263]]: {
        className: "little-block"
      },
      [noStyledPosition[264]]: {
        className: "little-block"
      },
      [noStyledPosition[265]]: {
        className: "little-block"
      },
      [noStyledPosition[266]]: {
        className: "little-block"
      },
      [noStyledPosition[267]]: {
        className: "little-block"
      },
      [noStyledPosition[268]]: {
        className: "little-block"
      },
      [noStyledPosition[269]]: {
        className: "little-block"
      },
      [noStyledPosition[270]]: {
        className: "little-block"
      },
      [noStyledPosition[271]]: {
        className: "little-block"
      },
      [noStyledPosition[272]]: {
        className: "little-block"
      },
      [noStyledPosition[273]]: {
        className: "little-block"
      },
      [noStyledPosition[274]]: {
        className: "little-block"
      },
      [noStyledPosition[275]]: {
        className: "little-block"
      },
      [noStyledPosition[276]]: {
        className: "little-block"
      },
      [noStyledPosition[277]]: {
        className: "little-block"
      },
      [noStyledPosition[278]]: {
        className: "little-block"
      },
      [noStyledPosition[279]]: {
        className: "little-block"
      },
      [noStyledPosition[280]]: {
        className: "little-block"
      },
      [noStyledPosition[281]]: {
        className: "little-block"
      },
      [noStyledPosition[282]]: {
        className: "little-block"
      },
      [noStyledPosition[283]]: {
        className: "little-block"
      },
      [noStyledPosition[284]]: {
        className: "little-block"
      },
      [noStyledPosition[285]]: {
        className: "little-block"
      },
      [noStyledPosition[286]]: {
        className: "little-block"
      },
      [noStyledPosition[287]]: {
        className: "little-block"
      },
      [noStyledPosition[288]]: {
        className: "little-block"
      },
      [noStyledPosition[289]]: {
        className: "little-block"
      },
      [noStyledPosition[290]]: {
        className: "little-block"
      },
      [noStyledPosition[291]]: {
        className: "little-block"
      },
      [noStyledPosition[292]]: {
        className: "little-block"
      },
      [noStyledPosition[293]]: {
        className: "little-block"
      },
      [noStyledPosition[294]]: {
        className: "little-block"
      },
      [noStyledPosition[295]]: {
        className: "little-block"
      },
      [noStyledPosition[296]]: {
        className: "little-block"
      },
      [noStyledPosition[297]]: {
        className: "little-block"
      },
      [noStyledPosition[298]]: {
        className: "little-block"
      },
      [noStyledPosition[299]]: {
        className: "little-block"
      },
      [noStyledPosition[300]]: {
        className: "little-block"
      },
      [noStyledPosition[301]]: {
        className: "little-block"
      },
      [noStyledPosition[302]]: {
        className: "little-block"
      },
      [noStyledPosition[303]]: {
        className: "little-block"
      },
      [noStyledPosition[304]]: {
        className: "little-block"
      },
      [noStyledPosition[305]]: {
        className: "little-block"
      },
      [noStyledPosition[306]]: {
        className: "little-block"
      },
      [noStyledPosition[307]]: {
        className: "little-block"
      },
      [noStyledPosition[308]]: {
        className: "little-block"
      },
      [noStyledPosition[309]]: {
        className: "little-block"
      },
      [noStyledPosition[310]]: {
        className: "little-block"
      },
      [noStyledPosition[311]]: {
        className: "little-block"
      },
      [noStyledPosition[312]]: {
        className: "little-block"
      },
      [noStyledPosition[313]]: {
        className: "little-block"
      },
      [noStyledPosition[314]]: {
        className: "little-block"
      },
      [noStyledPosition[315]]: {
        className: "little-block"
      },
      [noStyledPosition[316]]: {
        className: "little-block"
      },
      [noStyledPosition[317]]: {
        className: "little-block"
      },
      [noStyledPosition[318]]: {
        className: "little-block"
      },
      [noStyledPosition[319]]: {
        className: "little-block"
      },
      [noStyledPosition[320]]: {
        className: "little-block"
      },
      [noStyledPosition[321]]: {
        className: "little-block"
      },
      [noStyledPosition[322]]: {
        className: "little-block"
      },

    })
    
  }

  function changeUp() {
    setPosition({
      position: position.position - 18
    });
    console.log("Position: " + position.position);
    
    let noStyledPosition = [];

    let counter = position.position + 1;
    console.log("Counter: " + counter);

    while(counter <= 325) {
      noStyledPosition.push(counter);
      counter++;
    }

    counter = position.position - 1;

    while(counter >= 2) {
      noStyledPosition.push(counter);
      counter--;
    }

    setPositionState({
      [position.position]: {
        className: "little-block-selected"
      },
      [noStyledPosition[0]]: {
        className: "little-block"
      },
      [noStyledPosition[1]]: {
        className: "little-block"
      },
      [noStyledPosition[2]]: {
        className: "little-block"
      },
      [noStyledPosition[3]]: {
        className: "little-block"
      },
      [noStyledPosition[4]]: {
        className: "little-block"
      },
      [noStyledPosition[5]]: {
        className: "little-block"
      },
      [noStyledPosition[6]]: {
        className: "little-block"
      },
      [noStyledPosition[7]]: {
        className: "little-block"
      },
      [noStyledPosition[8]]: {
        className: "little-block"
      },
      [noStyledPosition[9]]: {
        className: "little-block"
      },
      [noStyledPosition[10]]: {
        className: "little-block"
      },
      [noStyledPosition[11]]: {
        className: "little-block"
      },
      [noStyledPosition[12]]: {
        className: "little-block"
      },
      [noStyledPosition[13]]: {
        className: "little-block"
      },
      [noStyledPosition[14]]: {
        className: "little-block"
      },
      [noStyledPosition[15]]: {
        className: "little-block"
      },
      [noStyledPosition[16]]: {
        className: "little-block"
      },
      [noStyledPosition[17]]: {
        className: "little-block"
      },
      [noStyledPosition[18]]: {
        className: "little-block"
      },
      [noStyledPosition[19]]: {
        className: "little-block"
      },
      [noStyledPosition[20]]: {
        className: "little-block"
      },
      [noStyledPosition[21]]: {
        className: "little-block"
      },
      [noStyledPosition[22]]: {
        className: "little-block"
      },
      [noStyledPosition[23]]: {
        className: "little-block"
      },
      [noStyledPosition[24]]: {
        className: "little-block"
      },
      [noStyledPosition[25]]: {
        className: "little-block"
      },
      [noStyledPosition[26]]: {
        className: "little-block"
      },
      [noStyledPosition[27]]: {
        className: "little-block"
      },
      [noStyledPosition[28]]: {
        className: "little-block"
      },
      [noStyledPosition[29]]: {
        className: "little-block"
      },
      [noStyledPosition[30]]: {
        className: "little-block"
      },
      [noStyledPosition[31]]: {
        className: "little-block"
      },
      [noStyledPosition[32]]: {
        className: "little-block"
      },
      [noStyledPosition[33]]: {
        className: "little-block"
      },
      [noStyledPosition[34]]: {
        className: "little-block"
      },
      [noStyledPosition[35]]: {
        className: "little-block"
      },
      [noStyledPosition[36]]: {
        className: "little-block"
      },
      [noStyledPosition[37]]: {
        className: "little-block"
      },
      [noStyledPosition[38]]: {
        className: "little-block"
      },
      [noStyledPosition[39]]: {
        className: "little-block"
      },
      [noStyledPosition[40]]: {
        className: "little-block"
      },
      [noStyledPosition[41]]: {
        className: "little-block"
      },
      [noStyledPosition[42]]: {
        className: "little-block"
      },
      [noStyledPosition[43]]: {
        className: "little-block"
      },
      [noStyledPosition[44]]: {
        className: "little-block"
      },
      [noStyledPosition[45]]: {
        className: "little-block"
      },
      [noStyledPosition[46]]: {
        className: "little-block"
      },
      [noStyledPosition[47]]: {
        className: "little-block"
      },
      [noStyledPosition[48]]: {
        className: "little-block"
      },
      [noStyledPosition[49]]: {
        className: "little-block"
      },
      [noStyledPosition[50]]: {
        className: "little-block"
      },
      [noStyledPosition[51]]: {
        className: "little-block"
      },
      [noStyledPosition[52]]: {
        className: "little-block"
      },
      [noStyledPosition[53]]: {
        className: "little-block"
      },
      [noStyledPosition[54]]: {
        className: "little-block"
      },
      [noStyledPosition[55]]: {
        className: "little-block"
      },
      [noStyledPosition[56]]: {
        className: "little-block"
      },
      [noStyledPosition[57]]: {
        className: "little-block"
      },
      [noStyledPosition[58]]: {
        className: "little-block"
      },
      [noStyledPosition[59]]: {
        className: "little-block"
      },
      [noStyledPosition[60]]: {
        className: "little-block"
      },
      [noStyledPosition[61]]: {
        className: "little-block"
      },
      [noStyledPosition[62]]: {
        className: "little-block"
      },
      [noStyledPosition[63]]: {
        className: "little-block"
      },
      [noStyledPosition[64]]: {
        className: "little-block"
      },
      [noStyledPosition[65]]: {
        className: "little-block"
      },
      [noStyledPosition[66]]: {
        className: "little-block"
      },
      [noStyledPosition[67]]: {
        className: "little-block"
      },
      [noStyledPosition[68]]: {
        className: "little-block"
      },
      [noStyledPosition[69]]: {
        className: "little-block"
      },
      [noStyledPosition[70]]: {
        className: "little-block"
      },
      [noStyledPosition[71]]: {
        className: "little-block"
      },
      [noStyledPosition[72]]: {
        className: "little-block"
      },
      [noStyledPosition[73]]: {
        className: "little-block"
      },
      [noStyledPosition[74]]: {
        className: "little-block"
      },
      [noStyledPosition[75]]: {
        className: "little-block"
      },
      [noStyledPosition[76]]: {
        className: "little-block"
      },
      [noStyledPosition[77]]: {
        className: "little-block"
      },
      [noStyledPosition[78]]: {
        className: "little-block"
      },
      [noStyledPosition[79]]: {
        className: "little-block"
      },
      [noStyledPosition[80]]: {
        className: "little-block"
      },
      [noStyledPosition[81]]: {
        className: "little-block"
      },
      [noStyledPosition[82]]: {
        className: "little-block"
      },
      [noStyledPosition[83]]: {
        className: "little-block"
      },
      [noStyledPosition[84]]: {
        className: "little-block"
      },
      [noStyledPosition[85]]: {
        className: "little-block"
      },
      [noStyledPosition[86]]: {
        className: "little-block"
      },
      [noStyledPosition[87]]: {
        className: "little-block"
      },
      [noStyledPosition[88]]: {
        className: "little-block"
      },
      [noStyledPosition[89]]: {
        className: "little-block"
      },
      [noStyledPosition[90]]: {
        className: "little-block"
      },
      [noStyledPosition[91]]: {
        className: "little-block"
      },
      [noStyledPosition[92]]: {
        className: "little-block"
      },
      [noStyledPosition[93]]: {
        className: "little-block"
      },
      [noStyledPosition[94]]: {
        className: "little-block"
      },
      [noStyledPosition[95]]: {
        className: "little-block"
      },
      [noStyledPosition[96]]: {
        className: "little-block"
      },
      [noStyledPosition[97]]: {
        className: "little-block"
      },
      [noStyledPosition[98]]: {
        className: "little-block"
      },
      [noStyledPosition[99]]: {
        className: "little-block"
      },
      [noStyledPosition[100]]: {
        className: "little-block"
      },
      [noStyledPosition[101]]: {
        className: "little-block"
      },
      [noStyledPosition[102]]: {
        className: "little-block"
      },
      [noStyledPosition[103]]: {
        className: "little-block"
      },
      [noStyledPosition[104]]: {
        className: "little-block"
      },
      [noStyledPosition[105]]: {
        className: "little-block"
      },
      [noStyledPosition[106]]: {
        className: "little-block"
      },
      [noStyledPosition[107]]: {
        className: "little-block"
      },
      [noStyledPosition[108]]: {
        className: "little-block"
      },
      [noStyledPosition[109]]: {
        className: "little-block"
      },
      [noStyledPosition[110]]: {
        className: "little-block"
      },
      [noStyledPosition[111]]: {
        className: "little-block"
      },
      [noStyledPosition[112]]: {
        className: "little-block"
      },
      [noStyledPosition[113]]: {
        className: "little-block"
      },
      [noStyledPosition[114]]: {
        className: "little-block"
      },
      [noStyledPosition[115]]: {
        className: "little-block"
      },
      [noStyledPosition[116]]: {
        className: "little-block"
      },
      [noStyledPosition[117]]: {
        className: "little-block"
      },
      [noStyledPosition[118]]: {
        className: "little-block"
      },
      [noStyledPosition[119]]: {
        className: "little-block"
      },
      [noStyledPosition[120]]: {
        className: "little-block"
      },
      [noStyledPosition[121]]: {
        className: "little-block"
      },
      [noStyledPosition[122]]: {
        className: "little-block"
      },
      [noStyledPosition[123]]: {
        className: "little-block"
      },
      [noStyledPosition[124]]: {
        className: "little-block"
      },
      [noStyledPosition[125]]: {
        className: "little-block"
      },
      [noStyledPosition[126]]: {
        className: "little-block"
      },
      [noStyledPosition[127]]: {
        className: "little-block"
      },
      [noStyledPosition[128]]: {
        className: "little-block"
      },
      [noStyledPosition[129]]: {
        className: "little-block"
      },
      [noStyledPosition[130]]: {
        className: "little-block"
      },
      [noStyledPosition[131]]: {
        className: "little-block"
      },
      [noStyledPosition[132]]: {
        className: "little-block"
      },
      [noStyledPosition[133]]: {
        className: "little-block"
      },
      [noStyledPosition[134]]: {
        className: "little-block"
      },
      [noStyledPosition[135]]: {
        className: "little-block"
      },
      [noStyledPosition[136]]: {
        className: "little-block"
      },
      [noStyledPosition[137]]: {
        className: "little-block"
      },
      [noStyledPosition[138]]: {
        className: "little-block"
      },
      [noStyledPosition[139]]: {
        className: "little-block"
      },
      [noStyledPosition[140]]: {
        className: "little-block"
      },
      [noStyledPosition[141]]: {
        className: "little-block"
      },
      [noStyledPosition[142]]: {
        className: "little-block"
      },
      [noStyledPosition[143]]: {
        className: "little-block"
      },
      [noStyledPosition[144]]: {
        className: "little-block"
      },
      [noStyledPosition[145]]: {
        className: "little-block"
      },
      [noStyledPosition[146]]: {
        className: "little-block"
      },
      [noStyledPosition[147]]: {
        className: "little-block"
      },
      [noStyledPosition[148]]: {
        className: "little-block"
      },
      [noStyledPosition[149]]: {
        className: "little-block"
      },
      [noStyledPosition[150]]: {
        className: "little-block"
      },
      [noStyledPosition[151]]: {
        className: "little-block"
      },
      [noStyledPosition[152]]: {
        className: "little-block"
      },
      [noStyledPosition[153]]: {
        className: "little-block"
      },
      [noStyledPosition[154]]: {
        className: "little-block"
      },
      [noStyledPosition[155]]: {
        className: "little-block"
      },
      [noStyledPosition[156]]: {
        className: "little-block"
      },
      [noStyledPosition[157]]: {
        className: "little-block"
      },
      [noStyledPosition[158]]: {
        className: "little-block"
      },
      [noStyledPosition[159]]: {
        className: "little-block"
      },
      [noStyledPosition[160]]: {
        className: "little-block"
      },
      [noStyledPosition[161]]: {
        className: "little-block"
      },
      [noStyledPosition[162]]: {
        className: "little-block"
      },
      [noStyledPosition[163]]: {
        className: "little-block"
      },
      [noStyledPosition[164]]: {
        className: "little-block"
      },
      [noStyledPosition[165]]: {
        className: "little-block"
      },
      [noStyledPosition[166]]: {
        className: "little-block"
      },
      [noStyledPosition[167]]: {
        className: "little-block"
      },
      [noStyledPosition[168]]: {
        className: "little-block"
      },
      [noStyledPosition[169]]: {
        className: "little-block"
      },
      [noStyledPosition[170]]: {
        className: "little-block"
      },
      [noStyledPosition[171]]: {
        className: "little-block"
      },
      [noStyledPosition[172]]: {
        className: "little-block"
      },
      [noStyledPosition[173]]: {
        className: "little-block"
      },
      [noStyledPosition[174]]: {
        className: "little-block"
      },
      [noStyledPosition[175]]: {
        className: "little-block"
      },
      [noStyledPosition[176]]: {
        className: "little-block"
      },
      [noStyledPosition[177]]: {
        className: "little-block"
      },
      [noStyledPosition[178]]: {
        className: "little-block"
      },
      [noStyledPosition[179]]: {
        className: "little-block"
      },
      [noStyledPosition[180]]: {
        className: "little-block"
      },
      [noStyledPosition[181]]: {
        className: "little-block"
      },
      [noStyledPosition[182]]: {
        className: "little-block"
      },
      [noStyledPosition[183]]: {
        className: "little-block"
      },
      [noStyledPosition[184]]: {
        className: "little-block"
      },
      [noStyledPosition[185]]: {
        className: "little-block"
      },
      [noStyledPosition[186]]: {
        className: "little-block"
      },
      [noStyledPosition[187]]: {
        className: "little-block"
      },
      [noStyledPosition[188]]: {
        className: "little-block"
      },
      [noStyledPosition[189]]: {
        className: "little-block"
      },
      [noStyledPosition[190]]: {
        className: "little-block"
      },
      [noStyledPosition[191]]: {
        className: "little-block"
      },
      [noStyledPosition[192]]: {
        className: "little-block"
      },
      [noStyledPosition[193]]: {
        className: "little-block"
      },
      [noStyledPosition[194]]: {
        className: "little-block"
      },
      [noStyledPosition[195]]: {
        className: "little-block"
      },
      [noStyledPosition[196]]: {
        className: "little-block"
      },
      [noStyledPosition[197]]: {
        className: "little-block"
      },
      [noStyledPosition[198]]: {
        className: "little-block"
      },
      [noStyledPosition[199]]: {
        className: "little-block"
      },
      [noStyledPosition[200]]: {
        className: "little-block"
      },
      [noStyledPosition[201]]: {
        className: "little-block"
      },
      [noStyledPosition[202]]: {
        className: "little-block"
      },
      [noStyledPosition[203]]: {
        className: "little-block"
      },
      [noStyledPosition[204]]: {
        className: "little-block"
      },
      [noStyledPosition[205]]: {
        className: "little-block"
      },
      [noStyledPosition[206]]: {
        className: "little-block"
      },
      [noStyledPosition[207]]: {
        className: "little-block"
      },
      [noStyledPosition[208]]: {
        className: "little-block"
      },
      [noStyledPosition[209]]: {
        className: "little-block"
      },
      [noStyledPosition[210]]: {
        className: "little-block"
      },
      [noStyledPosition[211]]: {
        className: "little-block"
      },
      [noStyledPosition[212]]: {
        className: "little-block"
      },
      [noStyledPosition[213]]: {
        className: "little-block"
      },
      [noStyledPosition[214]]: {
        className: "little-block"
      },
      [noStyledPosition[215]]: {
        className: "little-block"
      },
      [noStyledPosition[216]]: {
        className: "little-block"
      },
      [noStyledPosition[217]]: {
        className: "little-block"
      },
      [noStyledPosition[218]]: {
        className: "little-block"
      },
      [noStyledPosition[219]]: {
        className: "little-block"
      },
      [noStyledPosition[220]]: {
        className: "little-block"
      },
      [noStyledPosition[221]]: {
        className: "little-block"
      },
      [noStyledPosition[222]]: {
        className: "little-block"
      },
      [noStyledPosition[223]]: {
        className: "little-block"
      },
      [noStyledPosition[224]]: {
        className: "little-block"
      },
      [noStyledPosition[225]]: {
        className: "little-block"
      },
      [noStyledPosition[226]]: {
        className: "little-block"
      },
      [noStyledPosition[227]]: {
        className: "little-block"
      },
      [noStyledPosition[228]]: {
        className: "little-block"
      },
      [noStyledPosition[229]]: {
        className: "little-block"
      },
      [noStyledPosition[230]]: {
        className: "little-block"
      },
      [noStyledPosition[231]]: {
        className: "little-block"
      },
      [noStyledPosition[232]]: {
        className: "little-block"
      },
      [noStyledPosition[233]]: {
        className: "little-block"
      },
      [noStyledPosition[234]]: {
        className: "little-block"
      },
      [noStyledPosition[235]]: {
        className: "little-block"
      },
      [noStyledPosition[236]]: {
        className: "little-block"
      },
      [noStyledPosition[237]]: {
        className: "little-block"
      },
      [noStyledPosition[238]]: {
        className: "little-block"
      },
      [noStyledPosition[239]]: {
        className: "little-block"
      },
      [noStyledPosition[240]]: {
        className: "little-block"
      },
      [noStyledPosition[241]]: {
        className: "little-block"
      },
      [noStyledPosition[242]]: {
        className: "little-block"
      },
      [noStyledPosition[243]]: {
        className: "little-block"
      },
      [noStyledPosition[244]]: {
        className: "little-block"
      },
      [noStyledPosition[245]]: {
        className: "little-block"
      },
      [noStyledPosition[246]]: {
        className: "little-block"
      },
      [noStyledPosition[247]]: {
        className: "little-block"
      },
      [noStyledPosition[248]]: {
        className: "little-block"
      },
      [noStyledPosition[249]]: {
        className: "little-block"
      },
      [noStyledPosition[250]]: {
        className: "little-block"
      },
      [noStyledPosition[251]]: {
        className: "little-block"
      },
      [noStyledPosition[252]]: {
        className: "little-block"
      },
      [noStyledPosition[253]]: {
        className: "little-block"
      },
      [noStyledPosition[254]]: {
        className: "little-block"
      },
      [noStyledPosition[255]]: {
        className: "little-block"
      },
      [noStyledPosition[256]]: {
        className: "little-block"
      },
      [noStyledPosition[257]]: {
        className: "little-block"
      },
      [noStyledPosition[258]]: {
        className: "little-block"
      },
      [noStyledPosition[259]]: {
        className: "little-block"
      },
      [noStyledPosition[260]]: {
        className: "little-block"
      },
      [noStyledPosition[261]]: {
        className: "little-block"
      },
      [noStyledPosition[262]]: {
        className: "little-block"
      },
      [noStyledPosition[263]]: {
        className: "little-block"
      },
      [noStyledPosition[264]]: {
        className: "little-block"
      },
      [noStyledPosition[265]]: {
        className: "little-block"
      },
      [noStyledPosition[266]]: {
        className: "little-block"
      },
      [noStyledPosition[267]]: {
        className: "little-block"
      },
      [noStyledPosition[268]]: {
        className: "little-block"
      },
      [noStyledPosition[269]]: {
        className: "little-block"
      },
      [noStyledPosition[270]]: {
        className: "little-block"
      },
      [noStyledPosition[271]]: {
        className: "little-block"
      },
      [noStyledPosition[272]]: {
        className: "little-block"
      },
      [noStyledPosition[273]]: {
        className: "little-block"
      },
      [noStyledPosition[274]]: {
        className: "little-block"
      },
      [noStyledPosition[275]]: {
        className: "little-block"
      },
      [noStyledPosition[276]]: {
        className: "little-block"
      },
      [noStyledPosition[277]]: {
        className: "little-block"
      },
      [noStyledPosition[278]]: {
        className: "little-block"
      },
      [noStyledPosition[279]]: {
        className: "little-block"
      },
      [noStyledPosition[280]]: {
        className: "little-block"
      },
      [noStyledPosition[281]]: {
        className: "little-block"
      },
      [noStyledPosition[282]]: {
        className: "little-block"
      },
      [noStyledPosition[283]]: {
        className: "little-block"
      },
      [noStyledPosition[284]]: {
        className: "little-block"
      },
      [noStyledPosition[285]]: {
        className: "little-block"
      },
      [noStyledPosition[286]]: {
        className: "little-block"
      },
      [noStyledPosition[287]]: {
        className: "little-block"
      },
      [noStyledPosition[288]]: {
        className: "little-block"
      },
      [noStyledPosition[289]]: {
        className: "little-block"
      },
      [noStyledPosition[290]]: {
        className: "little-block"
      },
      [noStyledPosition[291]]: {
        className: "little-block"
      },
      [noStyledPosition[292]]: {
        className: "little-block"
      },
      [noStyledPosition[293]]: {
        className: "little-block"
      },
      [noStyledPosition[294]]: {
        className: "little-block"
      },
      [noStyledPosition[295]]: {
        className: "little-block"
      },
      [noStyledPosition[296]]: {
        className: "little-block"
      },
      [noStyledPosition[297]]: {
        className: "little-block"
      },
      [noStyledPosition[298]]: {
        className: "little-block"
      },
      [noStyledPosition[299]]: {
        className: "little-block"
      },
      [noStyledPosition[300]]: {
        className: "little-block"
      },
      [noStyledPosition[301]]: {
        className: "little-block"
      },
      [noStyledPosition[302]]: {
        className: "little-block"
      },
      [noStyledPosition[303]]: {
        className: "little-block"
      },
      [noStyledPosition[304]]: {
        className: "little-block"
      },
      [noStyledPosition[305]]: {
        className: "little-block"
      },
      [noStyledPosition[306]]: {
        className: "little-block"
      },
      [noStyledPosition[307]]: {
        className: "little-block"
      },
      [noStyledPosition[308]]: {
        className: "little-block"
      },
      [noStyledPosition[309]]: {
        className: "little-block"
      },
      [noStyledPosition[310]]: {
        className: "little-block"
      },
      [noStyledPosition[311]]: {
        className: "little-block"
      },
      [noStyledPosition[312]]: {
        className: "little-block"
      },
      [noStyledPosition[313]]: {
        className: "little-block"
      },
      [noStyledPosition[314]]: {
        className: "little-block"
      },
      [noStyledPosition[315]]: {
        className: "little-block"
      },
      [noStyledPosition[316]]: {
        className: "little-block"
      },
      [noStyledPosition[317]]: {
        className: "little-block"
      },
      [noStyledPosition[318]]: {
        className: "little-block"
      },
      [noStyledPosition[319]]: {
        className: "little-block"
      },
      [noStyledPosition[320]]: {
        className: "little-block"
      },
      [noStyledPosition[321]]: {
        className: "little-block"
      },
      [noStyledPosition[322]]: {
        className: "little-block"
      },

    })
    
  }
  

  return (
    <>
    <div className="BOX">
    <div className="Game">
      <div className="block">
        <div className="block-block" id="1"></div>
        <div className="block-block" id="2"></div>
        <div className="block-block" id="3"></div>
        <div className="block-block" id="4"></div>
        <div className="block-block" id="5"></div>
        <div className="block-block" id="6"></div>
        <div className="block-block" id="7"></div>
        <div className="block-block" id="8"></div>
        <div className="block-block" id="9"></div>
        <div className="block-block"  id="10"></div>
        <div className="block-block"  id="11"></div>
        <div className="block-block"  id="12"></div>
        <div className="block-block"  id="13"></div>
        <div className="block-block"  id="14"></div>
        <div className="block-block"  id="15"></div>
        <div className="block-block"  id="16"></div>
        <div className="block-block"  id="17"></div>
        <div className="block-block"  id="18"></div>
        <div className="block-block"  id="19"></div>
        <div className="block-block"  id="20"></div>
      </div>

      <div className="block">
       <div className="block-block" id="21"></div>
        <div className={positionState[2].className} id="22"></div>
        <div className={positionState[3].className} id="23"></div>
        <div className={positionState[4].className} id="24"></div>
        <div className={positionState[5].className} id="25"></div>
        <div className={positionState[6].className} id="26"></div>
        <div className={positionState[7].className} id="27"></div>
        <div className={positionState[8].className} id="28"></div>
        <div className={positionState[9].className} id="29"></div>
        <div className={positionState[10].className} id="30"></div>
        <div className={positionState[11].className} id="31"></div>
        <div className={positionState[12].className} id="32"></div>
        <div className={positionState[13].className} id="33"></div>
        <div className={positionState[14].className} id="34"></div>
        <div className={positionState[15].className} id="35"></div>
        <div className={positionState[16].className} id="36"></div>
        <div className={positionState[17].className} id="37"></div>
        <div className={positionState[18].className} id="38"></div>
        <div className={positionState[19].className} id="39"></div>
        <div className="block-block" id="40"></div>
      </div>

      <div className="block">
        <div className="block-block" id="41"></div>
        <div className={positionState[20].className} id="42"></div>
        <div className={positionState[21].className} id="43"></div>
        <div className={positionState[22].className} id="44"></div>
        <div className={positionState[23].className} id="45"></div>
        <div className={positionState[24].className} id="46"></div>
        <div className={positionState[25].className} id="47"></div>
        <div className={positionState[26].className} id="48"></div>
        <div className={positionState[27].className} id="49"></div>
        <div className={positionState[28].className} id="50"></div>
        <div className={positionState[29].className} id="51"></div>
        <div className={positionState[30].className} id="52"></div>
        <div className={positionState[31].className} id="53"></div>
        <div className={positionState[32].className} id="54"></div>
        <div className={positionState[33].className} id="55"></div>
        <div className={positionState[34].className} id="56"></div>
        <div className={positionState[35].className} id="57"></div>
        <div className={positionState[36].className} id="58"></div>
        <div className={positionState[37].className} id="59"></div>
        <div className="block-block" id="60"></div>

      </div>
      <div className="block">
        <div className="block-block" id="61"></div>
        <div className={positionState[38].className} id="62"></div>
        <div className={positionState[39].className} id="63"></div>
        <div className={positionState[40].className} id="64"></div>
        <div className={positionState[41].className} id="65"></div>
        <div className={positionState[42].className} id="66"></div>
        <div className={positionState[43].className} id="67"></div>
        <div className={positionState[44].className} id="68"></div>
        <div className={positionState[45].className} id="69"></div>
        <div className={positionState[46].className} id="70"></div>
        <div className={positionState[47].className} id="71"></div>
        <div className={positionState[48].className} id="72"></div>
        <div className={positionState[49].className} id="73"></div>
        <div className={positionState[50].className} id="74"></div>
        <div className={positionState[51].className} id="75"></div>
        <div className={positionState[52].className} id="76"></div>
        <div className={positionState[53].className} id="77"></div>
        <div className={positionState[54].className} id="78"></div>
        <div className={positionState[55].className} id="79"></div>
        <div className="block-block" id="80"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="81"></div>
        <div className={positionState[56].className} id="82"></div>
        <div className={positionState[57].className} id="83"></div>
        <div className={positionState[58].className} id="84"></div>
        <div className={positionState[59].className} id="85"></div>
        <div className={positionState[60].className} id="86"></div>
        <div className={positionState[61].className} id="87"></div>
        <div className={positionState[62].className} id="88"></div>
        <div className={positionState[63].className} id="89"></div>
        <div className={positionState[64].className} id="90"></div>
        <div className={positionState[65].className} id="91"></div>
        <div className={positionState[66].className} id="92"></div>
        <div className={positionState[67].className} id="93"></div>
        <div className={positionState[68].className} id="94"></div>
        <div className={positionState[69].className} id="95"></div>
        <div className={positionState[70].className} id="96"></div>
        <div className={positionState[71].className} id="97"></div>
        <div className={positionState[72].className} id="98"></div>
        <div className={positionState[73].className} id="99"></div>
        <div className="block-block" id="100"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="101"></div>
        <div className={positionState[74].className} id="102"></div>
        <div className={positionState[75].className} id="103"></div>
        <div className={positionState[76].className} id="104"></div>
        <div className={positionState[77].className} id="105"></div>
        <div className={positionState[78].className} id="106"></div>
        <div className={positionState[79].className} id="107"></div>
        <div className={positionState[80].className} id="108"></div>
        <div className={positionState[81].className} id="109"></div>
        <div className={positionState[82].className} id="110"></div>
        <div className={positionState[83].className} id="111"></div>
        <div className={positionState[84].className} id="112"></div>
        <div className={positionState[85].className} id="113"></div>
        <div className={positionState[86].className} id="114"></div>
        <div className={positionState[87].className} id="115"></div>
        <div className={positionState[88].className} id="116"></div>
        <div className={positionState[89].className} id="117"></div>
        <div className={positionState[90].className} id="118"></div>
        <div className={positionState[91].className} id="119"></div>
        <div className="block-block" id="120"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="121"></div>
        <div className={positionState[92].className} id="122"></div>
        <div className={positionState[93].className} id="123"></div>
        <div className={positionState[94].className} id="124"></div>
        <div className={positionState[95].className} id="125"></div>
        <div className={positionState[96].className} id="126"></div>
        <div className={positionState[97].className} id="127"></div>
        <div className={positionState[98].className} id="128"></div>
        <div className={positionState[99].className} id="129"></div>
        <div className={positionState[100].className} id="130"></div>
        <div className={positionState[101].className} id="131"></div>
        <div className={positionState[102].className} id="132"></div>
        <div className={positionState[103].className} id="133"></div>
        <div className={positionState[104].className} id="134"></div>
        <div className={positionState[105].className} id="135"></div>
        <div className={positionState[106].className} id="136"></div>
        <div className={positionState[107].className} id="137"></div>
        <div className={positionState[108].className} id="138"></div>
        <div className={positionState[109].className} id="139"></div>
        <div className="block-block" id="140"></div>

      </div>
      <div className="block">
        
        <div className="block-block"id="141"></div>
        <div className={positionState[110].className} id="142"></div>
        <div className={positionState[111].className} id="143"></div>
        <div className={positionState[112].className} id="144"></div>
        <div className={positionState[113].className} id="145"></div>
        <div className={positionState[114].className} id="146"></div>
        <div className={positionState[115].className} id="147"></div>
        <div className={positionState[116].className} id="148"></div>
        <div className={positionState[117].className} id="149"></div>
        <div className={positionState[118].className} id="150"></div>
        <div className={positionState[119].className} id="151"></div>
        <div className={positionState[120].className} id="152"></div>
        <div className={positionState[121].className} id="153"></div>
        <div className={positionState[122].className} id="154"></div>
        <div className={positionState[123].className} id="155"></div>
        <div className={positionState[124].className} id="156"></div>
        <div className={positionState[125].className} id="157"></div>
        <div className={positionState[126].className} id="158"></div>
        <div className={positionState[127].className} id="159"></div>
        <div className="block-block" id="160"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="161"></div>
        <div className={positionState[128].className} id="162"></div>
        <div className={positionState[129].className} id="163"></div>
        <div className={positionState[130].className} id="164"></div>
        <div className={positionState[131].className} id="165"></div>
        <div className={positionState[132].className} id="166"></div>
        <div className={positionState[133].className} id="167"></div>
        <div className={positionState[134].className} id="168"></div>
        <div className={positionState[135].className} id="169"></div>
        <div className={positionState[136].className} id="170"></div>
        <div className={positionState[137].className} id="171"></div>
        <div className={positionState[138].className} id="172"></div>
        <div className={positionState[139].className} id="173"></div>
        <div className={positionState[140].className} id="174"></div>
        <div className={positionState[141].className} id="175"></div>
        <div className={positionState[142].className} id="176"></div>
        <div className={positionState[143].className} id="177"></div>
        <div className={positionState[144].className} id="178"></div>
        <div className={positionState[145].className} id="179"></div>
        <div className="block-block" id="180"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="181"></div>
        <div className={positionState[146].className} id="182"></div>
        <div className={positionState[147].className} id="183"></div>
        <div className={positionState[148].className} id="184"></div>
        <div className={positionState[149].className} id="185"></div>
        <div className={positionState[150].className} id="186"></div>
        <div className={positionState[151].className} id="187"></div>
        <div className={positionState[152].className} id="188"></div>
        <div className={positionState[153].className} id="189"></div>
        <div className={positionState[154].className} id="190"></div>
        <div className={positionState[155].className} id="191"></div>
        <div className={positionState[156].className} id="192"></div>
        <div className={positionState[157].className} id="193"></div>
        <div className={positionState[158].className} id="194"></div>
        <div className={positionState[159].className} id="195"></div>
        <div className={positionState[160].className} id="196"></div>
        <div className={positionState[161].className} id="197"></div>
        <div className={positionState[162].className} id="198"></div>
        <div className={positionState[163].className} id="209"></div>
        <div className="block-block" id="200"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="201"></div>
        <div className={positionState[164].className} id="202"></div>
        <div className={positionState[165].className} id="203"></div>
        <div className={positionState[166].className} id="204"></div>
        <div className={positionState[167].className} id="205"></div>
        <div className={positionState[168].className} id="206"></div>
        <div className={positionState[169].className} id="207"></div>
        <div className={positionState[170].className} id="208"></div>
        <div className={positionState[171].className} id="209"></div>
        <div className={positionState[172].className} id="210"></div>
        <div className={positionState[173].className} id="211"></div>
        <div className={positionState[174].className} id="212"></div>
        <div className={positionState[175].className} id="213"></div>
        <div className={positionState[176].className} id="214"></div>
        <div className={positionState[177].className} id="215"></div>
        <div className={positionState[178].className} id="216"></div>
        <div className={positionState[179].className} id="217"></div>
        <div className={positionState[180].className} id="218"></div>
        <div className={positionState[181].className} id="219"></div>
        <div className="block-block" id="220"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="221"></div>
        <div className={positionState[182].className} id="222"></div>
        <div className={positionState[183].className} id="223"></div>
        <div className={positionState[184].className} id="224"></div>
        <div className={positionState[185].className} id="225"></div>
        <div className={positionState[186].className} id="226"></div>
        <div className={positionState[187].className} id="227"></div>
        <div className={positionState[188].className} id="228"></div>
        <div className={positionState[189].className} id="229"></div>
        <div className={positionState[190].className} id="230"></div>
        <div className={positionState[191].className} id="231"></div>
        <div className={positionState[192].className} id="232"></div>
        <div className={positionState[193].className} id="233"></div>
        <div className={positionState[194].className} id="234"></div>
        <div className={positionState[195].className} id="235"></div>
        <div className={positionState[196].className} id="236"></div>
        <div className={positionState[197].className} id="237"></div>
        <div className={positionState[198].className} id="238"></div>
        <div className={positionState[199].className} id="239"></div>
        <div className="block-block" id="240"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="241"></div>
        <div className={positionState[200].className} id="242"></div>
        <div className={positionState[201].className} id="243"></div>
        <div className={positionState[202].className} id="244"></div>
        <div className={positionState[203].className} id="245"></div>
        <div className={positionState[204].className} id="246"></div>
        <div className={positionState[205].className} id="247"></div>
        <div className={positionState[206].className} id="248"></div>
        <div className={positionState[207].className} id="249"></div>
        <div className={positionState[208].className} id="250"></div>
        <div className={positionState[209].className} id="251"></div>
        <div className={positionState[210].className} id="252"></div>
        <div className={positionState[211].className} id="253"></div>
        <div className={positionState[212].className} id="254"></div>
        <div className={positionState[213].className} id="255"></div>
        <div className={positionState[214].className} id="256"></div>
        <div className={positionState[215].className} id="257"></div>
        <div className={positionState[216].className} id="258"></div>
        <div className={positionState[217].className} id="259"></div>
        <div className="block-block" id="260"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="261"></div>
        <div className={positionState[218].className} id="262"></div>
        <div className={positionState[219].className} id="263"></div>
        <div className={positionState[220].className} id="264"></div>
        <div className={positionState[221].className} id="265"></div>
        <div className={positionState[222].className} id="266"></div>
        <div className={positionState[223].className} id="267"></div>
        <div className={positionState[224].className} id="268"></div>
        <div className={positionState[225].className} id="269"></div>
        <div className={positionState[226].className} id="270"></div>
        <div className={positionState[227].className} id="271"></div>
        <div className={positionState[228].className} id="272"></div>
        <div className={positionState[229].className} id="273"></div>
        <div className={positionState[230].className} id="274"></div>
        <div className={positionState[231].className} id="275"></div>
        <div className={positionState[232].className} id="276"></div>
        <div className={positionState[233].className} id="277"></div>
        <div className={positionState[234].className} id="278"></div>
        <div className={positionState[235].className} id="279"></div>
        <div className="block-block" id="280"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="281"></div>
        <div className={positionState[236].className} id="282"></div>
        <div className={positionState[237].className} id="283"></div>
        <div className={positionState[238].className} id="284"></div>
        <div className={positionState[239].className} id="285"></div>
        <div className={positionState[240].className} id="286"></div>
        <div className={positionState[241].className} id="287"></div>
        <div className={positionState[242].className} id="288"></div>
        <div className={positionState[243].className} id="289"></div>
        <div className={positionState[244].className} id="290"></div>
        <div className={positionState[245].className} id="291"></div>
        <div className={positionState[246].className} id="292"></div>
        <div className={positionState[247].className} id="293"></div>
        <div className={positionState[248].className} id="294"></div>
        <div className={positionState[249].className} id="295"></div>
        <div className={positionState[250].className} id="296"></div>
        <div className={positionState[251].className} id="297"></div>
        <div className={positionState[252].className} id="298"></div>
        <div className={positionState[253].className} id="299"></div>
        <div className="block-block" id="300"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="301"></div>
        <div className={positionState[254].className} id="302"></div>
        <div className={positionState[255].className} id="303"></div>
        <div className={positionState[256].className} id="304"></div>
        <div className={positionState[257].className} id="305"></div>
        <div className={positionState[258].className} id="306"></div>
        <div className={positionState[259].className} id="307"></div>
        <div className={positionState[260].className} id="308"></div>
        <div className={positionState[261].className} id="309"></div>
        <div className={positionState[262].className} id="310"></div>
        <div className={positionState[263].className} id="311"></div>
        <div className={positionState[264].className} id="312"></div>
        <div className={positionState[265].className} id="313"></div>
        <div className={positionState[266].className} id="314"></div>
        <div className={positionState[267].className} id="315"></div>
        <div className={positionState[268].className} id="316"></div>
        <div className={positionState[269].className} id="317"></div>
        <div className={positionState[270].className} id="318"></div>
        <div className={positionState[271].className} id="319"></div>
        <div className="block-block" id="320"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="321"></div>
        <div className={positionState[272].className} id="322"></div>
        <div className={positionState[273].className} id="323"></div>
        <div className={positionState[274].className} id="324"></div>
        <div className={positionState[275].className} id="325"></div>
        <div className={positionState[276].className} id="326"></div>
        <div className={positionState[277].className} id="327"></div>
        <div className={positionState[278].className} id="328"></div>
        <div className={positionState[279].className} id="329"></div>
        <div className={positionState[280].className} id="330"></div>
        <div className={positionState[281].className} id="331"></div>
        <div className={positionState[282].className} id="332"></div>
        <div className={positionState[283].className} id="333"></div>
        <div className={positionState[284].className} id="334"></div>
        <div className={positionState[285].className} id="335"></div>
        <div className={positionState[286].className} id="336"></div>
        <div className={positionState[287].className} id="337"></div>
        <div className={positionState[288].className} id="338"></div>
        <div className={positionState[289].className} id="339"></div>
        <div className="block-block" id="340"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="341"></div>
        <div className={positionState[290].className} id="342"></div>
        <div className={positionState[291].className} id="343"></div>
        <div className={positionState[292].className} id="344"></div>
        <div className={positionState[293].className} id="345"></div>
        <div className={positionState[294].className} id="346"></div>
        <div className={positionState[295].className} id="347"></div>
        <div className={positionState[296].className} id="348"></div>
        <div className={positionState[297].className} id="349"></div>
        <div className={positionState[298].className} id="350"></div>
        <div className={positionState[299].className} id="351"></div>
        <div className={positionState[300].className} id="352"></div>
        <div className={positionState[301].className} id="353"></div>
        <div className={positionState[302].className} id="354"></div>
        <div className={positionState[303].className} id="355"></div>
        <div className={positionState[304].className} id="356"></div>
        <div className={positionState[305].className} id="357"></div>
        <div className={positionState[306].className} id="358"></div>
        <div className={positionState[307].className} id="359"></div>
        <div className="block-block" id="360"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="361"></div>
        <div className={positionState[308].className} id="362"></div>
        <div className={positionState[309].className} id="363"></div>
        <div className={positionState[310].className} id="364"></div>
        <div className={positionState[311].className} id="365"></div>
        <div className={positionState[312].className} id="366"></div>
        <div className={positionState[313].className} id="367"></div>
        <div className={positionState[314].className} id="368"></div>
        <div className={positionState[315].className} id="369"></div>
        <div className={positionState[316].className} id="370"></div>
        <div className={positionState[317].className} id="371"></div>
        <div className={positionState[318].className} id="372"></div>
        <div className={positionState[319].className} id="373"></div>
        <div className={positionState[320].className} id="374"></div>
        <div className={positionState[321].className} id="375"></div>
        <div className={positionState[322].className} id="376"></div>
        <div className={positionState[323].className} id="377"></div>
        <div className={positionState[324].className} id="378"></div>
        <div className={positionState[325].className} id="379"></div>
        <div className="block-block" id="380"></div>

      </div>
      <div className="block">
        
        <div className="block-block" id="381"></div>
        <div className="block-block" id="382"></div>
        <div className="block-block" id="383"></div>
        <div className="block-block" id="384"></div>
        <div className="block-block" id="385"></div>
        <div className="block-block" id="386"></div>
        <div className="block-block" id="387"></div>
        <div className="block-block" id="388"></div>
        <div className="block-block" id="389"></div>
        <div className="block-block" id="390"></div>
        <div className="block-block" id="391"></div>
        <div className="block-block" id="392"></div>
        <div className="block-block" id="393"></div>
        <div className="block-block" id="394"></div>
        <div className="block-block" id="395"></div>
        <div className="block-block" id="396"></div>
        <div className="block-block" id="397"></div>
        <div className="block-block" id="398"></div>
        <div className="block-block" id="399"></div>
        <div className="block-block" id="400"></div>

      </div>
    </div>
    </div>
    <div className="controls">
            <FaArrowLeft className="icon" onClick={changeLeft}></FaArrowLeft>
            <FaArrowDown className="icon" onClick={changeDown}></FaArrowDown>
            <FaArrowUp className="icon" onClick={changeUp}></FaArrowUp>
            <FaArrowRight className="icon" onClick={changeRight}></FaArrowRight>
        </div>
    </>
  );
}

export default Game;
