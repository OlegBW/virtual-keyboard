import Editor from './editor.js';
import Keyboard from './keyboard.js';

const editor = new Editor();

editor.add();
const keyboard = new Keyboard(editor.addContent.bind(editor), document.body, 'ua');
keyboard.add();
