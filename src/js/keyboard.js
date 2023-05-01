import englishLayout from './keyboard-layouts/eng-layout';
import ukrainianLayout from './keyboard-layouts/ua-layout';

class Keyboard {
  constructor(dest = document.body, layout = 'eng', platform = 'basic') {
    this.dest = dest;
    this.platform = platform;

    if (layout === 'eng') {
      this.layout = englishLayout;
    } else if (layout === 'ua') {
      this.layout = ukrainianLayout;
    }
  }

  add() {
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    this.dest.append(this.keyboard);

    this.row0 = document.createElement('div');
    this.row0.className = 'row';
    this.keyboard.append(this.row0);

    this.row1 = document.createElement('div');
    this.row1.className = 'row';
    this.keyboard.append(this.row1);

    this.row2 = document.createElement('div');
    this.row2.className = 'row';
    this.keyboard.append(this.row2);

    this.row3 = document.createElement('div');
    this.row3.className = 'row';
    this.keyboard.append(this.row3);

    this.row4 = document.createElement('div');
    this.row4.className = 'row';
    this.keyboard.append(this.row4);

    for (let i = 0; i < this.layout.length; i += 1) {
      const {
        row, content, modifier, type,
      } = this.layout[i];

      this.addButton(row, content, modifier, type);
    }
  }

  addButton(row, symbol, modifier, type = 'basic') {
    const rowNum = `row${row}`;
    const button = document.createElement('div');

    switch (type) {
      case 'basic':
        button.className = 'basic-button';
        break;
      case 'backspace-button':
        button.className = 'backspace-button';
        break;
      case 'ctrl-button':
        button.className = 'ctrl-button';
        break;
      case 'enter-button':
        button.className = 'enter-button';
        break;
      case 'meta-basic-button':
        button.className = 'meta-basic-button';
        break;
      case 'meta-button':
        button.className = 'meta-button';
        break;
      case 'space-button':
        button.className = 'space-button';
        break;
      case 'tab-button':
        button.className = 'tab-button';
        break;
      case 'tilda-button':
        button.className = 'tilda-button';
        break;
      default:
        break;
    }

    button.textContent = symbol;

    if (modifier) {
      const buttonModifier = document.createElement('div');
      buttonModifier.className = 'button-modifier';
      buttonModifier.textContent = modifier;
      button.append(buttonModifier);
    }

    this[rowNum].append(button);
  }
}

export default Keyboard;
