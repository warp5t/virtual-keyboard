const keyboard = {
  body: document.getElementById('body'),
  bodyKeyboard: document.createElement('div'),
  display: document.createElement('div'),
  ammountsBtn: 64,
  confBtn_1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_2: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_3_sgn: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspase',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_4: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_5: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'ё', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_6_sng: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspase',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'Ё', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'],
};

const display = {
  workWindow: document.querySelector('.display-keyboard'),
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
  keyboard.btns = buttons;
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
  for (let i = 0; keyboard.ammountsBtn > i; i += 1) {
    keyboard.btns[i].innerText = keyboard.confBtn_1[i];
  }
}
btnSubscribing();

function mouseListening() {
  for (let i = 0; keyboard.ammountsBtn > i; i += 1) {
    keyboard.btns[i].addEventListener('mousedown', () => {
      console.log(keyboard.btns[i].textContent);
      keyboard.btns[i].classList.add('button-active-mouse');
    });
  }

  keyboard.btns.forEach((element) => {
    element.addEventListener('mouseup', () => {
      element.classList.remove('button-active-mouse');
    });
  });
}

mouseListening()

function keyAnimating() {
  document.addEventListener('keydown', (event) => {
    console.log(event.keyCode, ' - keyCode');
    console.log(event.charCode, ' - charCode');
    console.log(event.which, '- which');
    console.log(event.key, ' - key');
    console.log(event.code, ' - code');
    keyboard.btns.forEach((element) => {
      if (event.code === 'ShiftLeft') {
        console.log('code 106');
        keyboard.btns[42].classList.add('button-active');
      } else if (event.code === 'ShiftRight') {
        console.log('code 108');
        keyboard.btns[54].classList.add('button-active');
      } else if (event.code === 'ControlLeft') {
        keyboard.btns[55].classList.add('button-active');
        console.log('code 110');
      } else if (event.code === 'ControlRight') {
        keyboard.btns[60].classList.add('button-active');
        console.log('code 112');
      } else if (event.code === 'ArrowLeft') {
        keyboard.btns[61].classList.add('button-active');
        console.log('code 114');
      } else if (event.code === 'ArrowRight') {
        keyboard.btns[63].classList.add('button-active');
        console.log('code 116');
      } else if (event.code === 'ArrowUp') {
        keyboard.btns[53].classList.add('button-active');
        console.log('code 118');
      } else if (event.code === 'ArrowDown') {
        keyboard.btns[62].classList.add('button-active');
        console.log('code 120');
      } else if (event.code === 'Delete') {
        keyboard.btns[28].classList.add('button-active');
        console.log('code 122');
      } else if (event.code === 'AltLeft') {
        keyboard.btns[57].classList.add('button-active');
        console.log('code 122');
      } else if (event.code === 'AltRight') {
        keyboard.btns[59].classList.add('button-active');
        console.log('code 122');
      } else if (event.code === 'Space') {
        keyboard.btns[58].classList.add('button-active');
        console.log('code 128');
      } else if (event.code === 'Slash') {
        keyboard.btns[52].classList.add('button-active');
        console.log('code 128');
      } else if (element.textContent === event.key) {
        element.classList.add('button-active');
      }
    });
  });
  document.addEventListener('keyup', (event) => {
    keyboard.btns.forEach((element) => {
      if (event.code === 'ShiftLeft') {
        console.log('code 106');
        keyboard.btns[42].classList.remove('button-active');
      } else if (event.code === 'ShiftRight') {
        console.log('code 108');
        keyboard.btns[54].classList.remove('button-active');
      } else if (event.code === 'ControlLeft') {
        keyboard.btns[55].classList.remove('button-active');
        console.log('code 110');
      } else if (event.code === 'ControlRight') {
        keyboard.btns[60].classList.remove('button-active');
        console.log('code 112');
      } else if (event.code === 'ArrowLeft') {
        keyboard.btns[61].classList.remove('button-active');
        console.log('code 114');
      } else if (event.code === 'ArrowRight') {
        keyboard.btns[63].classList.remove('button-active');
        console.log('code 116');
      } else if (event.code === 'ArrowUp') {
        keyboard.btns[53].classList.remove('button-active');
        console.log('code 118');
      } else if (event.code === 'ArrowDown') {
        keyboard.btns[62].classList.remove('button-active');
        console.log('code 120');
      } else if (event.code === 'Delete') {
        keyboard.btns[28].classList.remove('button-active');
        console.log('code 122');
      } else if (event.code === 'AltLeft') {
        keyboard.btns[57].classList.remove('button-active');
        console.log('code 122');
      } else if (event.code === 'AltRight') {
        keyboard.btns[59].classList.remove('button-active');
        console.log('code 122');
      } else if (event.code === 'Space') {
        keyboard.btns[58].classList.remove('button-active');
        console.log('code 128');
      } else if (event.which === 191) {
        keyboard.btns[52].classList.remove('button-active');
        console.log('code 128 up');
      } else if (element.textContent === event.key) {
        element.classList.remove('button-active');
      }
    });
  });
}
keyAnimating();