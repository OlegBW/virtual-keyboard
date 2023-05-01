const basicLayout = [
  {
    row: 0,
    content: '`',
    modifier: '~',
    type: 'tilda-button',
  },
  {
    row: 0,
    content: '1',
    modifier: '!',
    type: 'basic',
  },
  {
    row: 0,
    content: '2',
    modifier: '@',
    type: 'basic',
  },
  {
    row: 0,
    content: '3',
    modifier: '#',
    type: 'basic',
  },
  {
    row: 0,
    content: '4',
    modifier: '$',
    type: 'basic',
  },
  {
    row: 0,
    content: '5',
    modifier: '%',
    type: 'basic',
  },
  {
    row: 0,
    content: '6',
    modifier: ':',
    type: 'basic',
  },
  {
    row: 0,
    content: '7',
    modifier: '?',
    type: 'basic',
  },
  {
    row: 0,
    content: '8',
    modifier: '*',
    type: 'basic',
  },
  {
    row: 0,
    content: '9',
    modifier: '(',
    type: 'basic',
  },
  {
    row: 0,
    content: '0',
    modifier: ')',
    type: 'basic',
  },
  {
    row: 0,
    content: '-',
    modifier: '_',
    type: 'basic',
  },
  {
    row: 0,
    content: '=',
    modifier: '+',
    type: 'basic',
  },
  {
    row: 0,
    content: 'Backspace',
    modifier: '',
    type: 'backspace-button',
  },

  // Row 1
  {
    row: 1,
    content: 'Tab',
    modifier: '',
    type: 'tab-button',
  },
  {
    row: 1,
    content: 'Й',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Ц',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'У',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'К',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Е',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Н',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Г',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Ш',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Щ',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'З',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Х',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Ї',
    modifier: '',
    type: 'basic',
  },
  {
    row: 1,
    content: '\\',
    modifier: '/',
    type: 'basic',
  },
  {
    row: 1,
    content: 'Del',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 2,
    content: 'Caps Lock',
    modifier: '',
    type: 'meta-button',
  },

  {
    row: 2,
    content: 'Ф',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'І',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'В',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'А',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'П',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'Р',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'О',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'Л',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'Д',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'Ж',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'Є',
    modifier: '',
    type: 'basic',
  },
  {
    row: 2,
    content: 'Enter',
    modifier: '',
    type: 'enter-button',
  },
  {
    row: 3,
    content: 'Shift',
    modifier: '',
    type: 'meta-button',
  },
  {
    row: 3,
    content: '\\',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'Я',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'Ч',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'С',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'М',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'И',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'Т',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'Ь',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'Б',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: 'Ю',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: '/',
    modifier: '',
    type: 'basic',
  },
  {
    row: 3,
    content: '↑',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 3,
    content: 'Shift',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 4,
    content: 'Ctrl',
    modifier: '',
    type: 'ctrl-button',
  },
  {
    row: 4,
    content: 'Win',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 4,
    content: 'Alt',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 4,
    content: '',
    modifier: '',
    type: 'space-button',
  },
  {
    row: 4,
    content: 'Alt',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 4,
    content: 'Ctrl',
    modifier: '',
    type: 'ctrl-button',
  },
  {
    row: 4,
    content: '←',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 4,
    content: '↓',
    modifier: '',
    type: 'meta-basic-button',
  },
  {
    row: 4,
    content: '→',
    modifier: '',
    type: 'meta-basic-button',
  },
];

export default basicLayout;