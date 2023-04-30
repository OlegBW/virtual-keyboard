import Editor from "./editor.js";
import Keyboard from "./keyboard.js";

const platform = (navigator.platform.includes("Mac")) ? "mac" : "basic";
console.log(platform);

const keyboard = new Keyboard(document.body, "ua");
keyboard.add();
