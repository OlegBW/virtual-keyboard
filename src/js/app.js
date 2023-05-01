import Editor from './editor.js';
import Keyboard from './keyboard.js';

const totalCaption = document.createElement('p');
totalCaption.className = 'logo-caption';
totalCaption.textContent = 'Virtual Keyboard';
document.body.append(totalCaption);

const editor = new Editor();
editor.add();
const keyboard = new Keyboard(editor.addContent.bind(editor), document.body, 'ua');
keyboard.add();

const platformCaption = document.createElement('p');
platformCaption.className = 'platform';
platformCaption.textContent = 'The keyboard works on a common standard (Win, etc.)';

const hotkeyCaption = document.createElement('p');
hotkeyCaption.className = 'hotkey';
hotkeyCaption.textContent = 'Shift + Alt changes the language, use Shift to use modifiers';

document.body.append(platformCaption);
document.body.append(hotkeyCaption);
