//  import Editor from './editor';
import Keyboard from './keyboard';

const platform = (navigator.platform.includes('Mac')) ? 'mac' : 'basic';

const keyboard = new Keyboard(document.body, 'ua', platform);
keyboard.add();
