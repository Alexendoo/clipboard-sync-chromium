'use strict';

const textarea = document.createElement('textarea');
document.body.appendChild(textarea);
paste();

clipboardTimer();

function clipboardTimer() {
  setTimeout(() => {
    if (clipboardChanged()) {
      console.log(textarea.value);
    }
    clipboardTimer();
  }, 1000);
}

function clipboardChanged() {
  let oldClipboard = textarea.value;
  paste();
  return oldClipboard !== textarea.value;
}

function paste() {
  textarea.value = '';
  textarea.focus();
  document.execCommand('paste');
}
