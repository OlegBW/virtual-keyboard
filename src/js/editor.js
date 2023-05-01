class Editor {
  constructor(dest = document.body) {
    this.dest = dest;
  }

  add() {
    const editor = document.createElement('textarea');
    editor.className = 'editor';
    this.editor = editor;
    this.dest.append(editor);
  }

  addContent(content) {
    if (content === 'Backspace') {
      this.editor.value = this.editor.value.slice(0, -1);
    } else if (content === 'Del') {
      const cursorPos = this.editor.selectionStart;
      let editValue = this.editor.value;
      editValue = editValue.slice(0, cursorPos) + editValue.slice(cursorPos + 1, editValue.length);
      this.editor.value = editValue;
      this.editor.selectionStart = cursorPos;
      this.editor.selectionEnd = cursorPos;
    } else {
      let inputValue = content;

      switch (inputValue) {
        case 'Tab':
          inputValue = '    ';
          break;
        case '':
          inputValue = ' ';
          break;
        case 'Shift':
        case 'Alt':
        case 'Ctrl':
        case 'Win':
        case 'Caps Lock':
        case 'Enter':
          inputValue = '';
          break;
        default:
          break;
      }

      this.editor.value += inputValue;
    }
  }
}

export default Editor;
