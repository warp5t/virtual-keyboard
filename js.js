const keyboard = {
  body: document.getElementById('body'),
  bodyKeyboard: document.createElement('div'),
  display: document.createElement('div'),
  ammountsBtn: 64,
  subscribeBtn_1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'Caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  subscribeBtn_2: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'Caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  subscribeBtn_3: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  subscribeBtn_4: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'Caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
};

function bodyCreating() {
  keyboard.body.classList.add('body-main');
  keyboard.bodyKeyboard.classList.add('body-keyboard');
  keyboard.body.prepend(keyboard.bodyKeyboard);
  keyboard.display.classList.add('display-keyboard');
  keyboard.body.prepend(keyboard.display);
}

bodyCreating();

function btnFilling() {
  for (let i = 0; keyboard.ammountsBtn > i; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button-keyboard');
    keyboard.bodyKeyboard.prepend(button);
  }
  const buttons = document.querySelectorAll('.button-keyboard');
  for (let i = 0; buttons.length > i; i += 1) {
    if (i === 14) {
      buttons[13].classList.add('btn-14');
    } else if (i === 15) {
      buttons[14].classList.add('btn-15');
    } else if (i === 30) {
      buttons[29].classList.add('btn-30');
    } else if (i === 42) {
      buttons[41].classList.add('btn-42');
    } else if (i === 43) {
      buttons[42].classList.add('btn-43');
    } else if (i === 57) {
      buttons[56].classList.add('btn-57');
    } else if (i === 56) {
      buttons[55].classList.add('btn-56');
    } else if (i === 55) {
      buttons[54].classList.add('btn-55');
    } else if (i === 59) {
      buttons[58].classList.add('btn-60');
    }
  }
}
btnFilling();

function btnSubscribing() {
  const buttons = document.querySelectorAll('.button-keyboard');
  for (let i = 0; keyboard.ammountsBtn > i; i += 1) {
    buttons[i].innerText = keyboard.subscribeBtn_1[i];
  }
}
btnSubscribing();
