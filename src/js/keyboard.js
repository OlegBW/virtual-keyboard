import englishLayout from './keyboard-layouts/eng-layout.js';
import ukrainianLayout from './keyboard-layouts/ua-layout.js';

class Keyboard {
  constructor(output, dest = document.body, layout = 'eng') {
    const cookies = document.cookie.split('; ');

    let layoutType = cookies.find((cookie) => cookie.startsWith('lang'));
    layoutType = layoutType ? layoutType.split('=')[1] : null;

    this.dest = dest;
    this.case = 'lower';
    this.output = output;

    layoutType = layoutType ?? layout;

    if (layoutType === 'eng') {
      this.layout = englishLayout;
    } else if (layoutType === 'ua') {
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

    this.keysArr = document.querySelectorAll('.key');

    const keyboardLayout = [
      'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
      'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
      'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
      'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
      'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
    ];

    const keysPressed = new Set();

    document.addEventListener('keydown', (event) => {
      if (!keysPressed.has(event.code) && event.code !== 'CapsLock' && keyboardLayout.includes(event.code)) {
        const idx = keyboardLayout.indexOf(event.code);
        this.keysArr[idx].classList.toggle('key-pressed');

        keysPressed.add(event.code);
        this.output(this.keysArr[idx].querySelector('.button-content').textContent);

        if ((keysPressed.has('ShiftLeft') || keysPressed.has('ShiftRight')) && (keysPressed.has('AltLeft') || keysPressed.has('AltRight'))) {
          this.changeLayout();
        }

        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.changeCase();
        }

        event.preventDefault();
      } else if (keysPressed.has(event.code) && event.code === 'CapsLock') {
        const idx = keyboardLayout.indexOf(event.code);
        this.keysArr[idx].classList.toggle('key-pressed');
        keysPressed.delete('CapsLock');

        this.changeCase();
        event.preventDefault();
      } else if (!keysPressed.has(event.code) && event.code === 'CapsLock') {
        const idx = keyboardLayout.indexOf(event.code);
        this.keysArr[idx].classList.toggle('key-pressed');
        keysPressed.add(event.code);

        this.changeCase();
        event.preventDefault();
      }
    });

    document.addEventListener('keyup', (event) => {
      if (keysPressed.has(event.code) && event.code !== 'CapsLock') {
        const idx = keyboardLayout.indexOf(event.code);

        this.keysArr[idx].classList.toggle('key-pressed');
        keysPressed.delete(event.code);

        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.changeCase();
        }

        event.preventDefault();
      }
    });

    this.keyboard.addEventListener('mousedown', (event) => {
      const button = event.target.closest('.key');

      if (!button) return;

      if (!this.keyboard.contains(button)) return;

      button.classList.toggle('key-pressed');

      const content = button.querySelector('.button-content').textContent;
      this.output(content);
    });

    this.keyboard.addEventListener('mouseup', (event) => {
      const button = event.target.closest('.key');

      if (!button) return;

      if (!this.keyboard.contains(button)) return;

      button.classList.toggle('key-pressed');
    });

    this.changeCase();
  }

  addButton(row, symbol, modifier, type = 'basic') {
    const rowNum = `row${row}`;
    const button = document.createElement('div');
    const buttonContent = document.createElement('div');

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

    button.classList.add('key');

    buttonContent.textContent = symbol;

    buttonContent.className = 'button-content';
    button.append(buttonContent);
    const buttonModifier = document.createElement('div');
    buttonModifier.className = 'button-modifier';

    if (modifier) {
      buttonModifier.textContent = modifier;
    }

    button.append(buttonModifier);
    this[rowNum].append(button);
  }

  changeCase() {
    if (this.case === 'upper') {
      for (let i = 0; i < this.keysArr.length; i += 1) {
        if (this.keysArr[i].classList.contains('basic-button')) {
          const buttonContent = this.keysArr[i].querySelector('.button-content');
          buttonContent.textContent = buttonContent.textContent.toUpperCase();
        }
      }
      this.case = 'lower';
    } else if (this.case === 'lower') {
      for (let i = 0; i < this.keysArr.length; i += 1) {
        if (this.keysArr[i].classList.contains('basic-button')) {
          const buttonContent = this.keysArr[i].querySelector('.button-content');
          buttonContent.textContent = buttonContent.textContent.toLowerCase();
        }
      }
      this.case = 'upper';
    }
  }

  changeLayout() {
    if (this.layout === ukrainianLayout) {
      for (let i = 0; i < this.keysArr.length; i += 1) {
        this.keysArr[i].querySelector('.button-content').textContent = englishLayout[i].content;
        this.keysArr[i].querySelector('.button-modifier').textContent = englishLayout[i].modifier;
      }
      this.layout = englishLayout;
      document.cookie = 'lang=eng';
    } else if (this.layout === englishLayout) {
      for (let i = 0; i < this.keysArr.length; i += 1) {
        this.keysArr[i].querySelector('.button-content').textContent = ukrainianLayout[i].content;
        this.keysArr[i].querySelector('.button-modifier').textContent = ukrainianLayout[i].modifier;
      }
      this.layout = ukrainianLayout;
      document.cookie = 'lang=ua';
    }
  }
}

export default Keyboard;
