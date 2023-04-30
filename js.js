const keyboard = {
  body: document.getElementById('body'),
  bodyKeyboard: document.createElement('div'),
  display: document.createElement('textarea'),
  ammountsBtn: 64,
  codeConfig: 1,
  lang: 'engl',
  confBtn_1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_2: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_3_sgn: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_4: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_5: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'ё', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_6_sng: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'Ё', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
};

class ButtonsParameters {
  constructor() {
    this.shift = false;
    this.alt = false;
    this.tab = false;
    this.capsLock = false;
    this.ctrl = false;
    this.win = false;
  }

  switchingAlt() {
    if (this.alt === false) {
      this.alt = true;
    } else {
      this.alt = false;
    }
  }

  switchingShift() {
    if (this.shift === false) {
      this.shift = true;
    } else {
      this.shift = false;
    }
  }

  switchingTab() {
    if (this.tab === false) {
      this.tab = true;
    } else {
      this.tab = false;
    }
  }

  switchingCapsLock() {
    if (this.capsLock === false) {
      this.capsLock = true;
    } else {
      this.capsLock = false;
    }
  }

  switchingCtrl() {
    if (this.ctrl === false) {
      this.ctrl = true;
    } else {
      this.ctrl = false;
    }
  }

  switchingWin() {
    if (this.win === false) {
      this.win = true;
    } else {
      this.win = false;
    }
  }
}

const btnParam = new ButtonsParameters();

function bodyCreating() {
  keyboard.body.classList.add('body-main');
  keyboard.bodyKeyboard.classList.add('body-keyboard');
  keyboard.body.prepend(keyboard.bodyKeyboard);
  keyboard.display.classList.add('display-keyboard');
  keyboard.display.id = 'textarea';
  keyboard.body.prepend(keyboard.display);

  const manual = document.createElement('div');
  const createdOS = document.createElement('div');
  manual.classList.add('instruction-text');
  createdOS.classList.add('instruction-text');
  manual.textContent = 'Смена языка shift + ctrl';
  createdOS.textContent = 'Клавиатура создана в Ubuntu 16.04 но желательно проверять в ОС Windows';
  keyboard.body.append(manual);
  keyboard.body.append(createdOS);
}
bodyCreating();

function atributeSetting() {
  keyboard.display.setAttribute('readonly', 'readonly');
}
atributeSetting();

function btnStyling() {
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
btnStyling();

function configSetting() {
  localStorage.setItem('keyboardLang', JSON.stringify(keyboard.lang));
  localStorage.setItem('keyboardConfig', JSON.stringify(keyboard.codeConfig));
}

function btnSubscribing() {
  if (btnParam.ctrl === true && btnParam.shift === true) {
    if (keyboard.lang === 'engl') {
      keyboard.lang = 'rus';
      keyboard.codeConfig = 4;
      configSetting();
    } else if (keyboard.lang === 'rus') {
      keyboard.lang = 'engl';
      keyboard.codeConfig = 1;
      configSetting();
    }
  }
  for (let i = 0; keyboard.ammountsBtn > i; i += 1) {
    if (keyboard.lang === 'engl') {
      if (keyboard.codeConfig === 1) {
        keyboard.btns[i].innerText = keyboard.confBtn_1[i];
      } else if (keyboard.codeConfig === 2) {
        keyboard.btns[i].innerText = keyboard.confBtn_2[i];
      } else if (keyboard.codeConfig === 3) {
        keyboard.btns[i].innerText = keyboard.confBtn_3_sgn[i];
      }
    } else if (keyboard.lang === 'rus') {
      if (keyboard.codeConfig === 4) {
        keyboard.btns[i].innerText = keyboard.confBtn_4[i];
      } else if (keyboard.codeConfig === 5) {
        keyboard.btns[i].innerText = keyboard.confBtn_5[i];
      } else if (keyboard.codeConfig === 6) {
        keyboard.btns[i].innerText = keyboard.confBtn_6_sng[i];
      }
    }
  }
}
btnSubscribing();

function keyPermAnimating() {
  const buttons = document.querySelectorAll('.button-keyboard');
  document.addEventListener('keydown', (event) => {
    buttons.forEach((element) => {
      if (event.code === 'ShiftLeft') {
        buttons[42].classList.add('button-active');
      } else if (event.code === 'ShiftRight') {
        buttons[54].classList.add('button-active');
      } else if (event.code === 'ControlLeft') {
        buttons[55].classList.add('button-active');
      } else if (event.code === 'ControlRight') {
        buttons[60].classList.add('button-active');
      } else if (event.code === 'ArrowLeft') {
        buttons[61].classList.add('button-active');
      } else if (event.code === 'ArrowRight') {
        buttons[63].classList.add('button-active');
      } else if (event.code === 'ArrowUp') {
        buttons[53].classList.add('button-active');
      } else if (event.code === 'ArrowDown') {
        buttons[62].classList.add('button-active');
      } else if (event.code === 'Delete') {
        buttons[28].classList.add('button-active');
      } else if (event.code === 'AltLeft') {
        buttons[57].classList.add('button-active');
      } else if (event.code === 'AltRight') {
        buttons[59].classList.add('button-active');
      } else if (event.code === 'Space') {
        buttons[58].classList.add('space-activ');
      } else if (event.code === 'Slash') {
        buttons[52].classList.add('button-active');
      } else if (element.textContent === event.key) {
        element.classList.add('button-active');
      }
    });
  });
  document.addEventListener('keyup', (event) => {
    keyboard.btns.forEach((element) => {
      if (event.code === 'ShiftLeft') {
        buttons[42].classList.remove('button-active');
      } else if (event.code === 'ShiftRight') {
        buttons[54].classList.remove('button-active');
      } else if (event.code === 'ControlLeft') {
        buttons[55].classList.remove('button-active');
      } else if (event.code === 'ControlRight') {
        buttons[60].classList.remove('button-active');
      } else if (event.code === 'ArrowLeft') {
        buttons[61].classList.remove('button-active');
      } else if (event.code === 'ArrowRight') {
        buttons[63].classList.remove('button-active');
      } else if (event.code === 'ArrowUp') {
        buttons[53].classList.remove('button-active');
      } else if (event.code === 'ArrowDown') {
        buttons[62].classList.remove('button-active');
      } else if (event.code === 'Delete') {
        buttons[28].classList.remove('button-active');
      } else if (event.code === 'AltLeft') {
        buttons[57].classList.remove('button-active');
      } else if (event.code === 'AltRight') {
        buttons[59].classList.remove('button-active');
      } else if (event.code === 'Space') {
        buttons[58].classList.remove('space-activ');
      } else if (event.code === 'Slash') {
        buttons[52].classList.remove('button-active');
      } else if (element.textContent === event.key) {
        element.classList.remove('button-active');
      }
    });
  });
}
keyPermAnimating();

//  ----------------------- mouse -------------------------

function mouseAnimating() {
  for (let i = 0; keyboard.ammountsBtn > i; i += 1) {
    keyboard.btns[i].addEventListener('mousedown', () => {
      // console.log(keyboard.btns[i].textContent);
      keyboard.btns[i].classList.add('button-active-mouse');
    });
  }
  keyboard.btns.forEach((element) => {
    element.addEventListener('mouseup', () => {
      element.classList.remove('button-active-mouse');
    });
  });
  keyboard.btns.forEach((element) => {
    element.addEventListener('mouseout', () => {
      element.classList.remove('button-active-mouse');
    });
  });
}
mouseAnimating();

function mouseTaping() {
  const displayBoard = document.getElementById('textarea');
  keyboard.btns.forEach((element) => {
    element.addEventListener('mousedown', () => {
      const displayText = displayBoard.value;
      if (element.innerText === '') {
        displayBoard.value += ' ';
      } else if (element.innerText === 'Backspace') {
        let text = displayBoard.value;
        text = text.slice(0, -1);
        displayBoard.value = text;
      } else if (element.innerText === 'Ctrl') {
        btnParam.switchingCtrl();
      } else if (element.innerText === 'Win') {
        // console.log('cancel');
      } else if (element.innerText === 'Alt') {
        btnParam.switchingAlt();
      } else if (element.innerText === 'CapsLock') {
        btnParam.switchingCapsLock();
        if (btnParam.capsLock === false) {
          element.classList.remove('caps-activ');
        } else if (btnParam.capsLock === true) {
          element.classList.add('caps-activ');
        }
      } else if (element.innerText === 'Shift') {
        btnParam.switchingShift();
      } else if (element.innerText === 'Tab') {
        displayBoard.value += '\t';
        btnParam.switchingTab();
      } else if (element.innerText === 'Del') {
        // console.log('cancel Del');
      } else if (element.innerText === 'Enter') {
        displayBoard.value += '\n';
      } else if (element.innerText === '←') {
        displayBoard.value += '←';
      } else if (element.innerText === '↓') {
        displayBoard.value += '↓';
      } else if (element.innerText === '→') {
        displayBoard.value += '→';
      } else if (element.innerText === '↑') {
        displayBoard.value += '↑';
      } else {
        displayBoard.value = displayText + element.textContent;
      }
    });
    element.addEventListener('mouseup', () => {
      if (element.innerText === 'Ctrl') {
        btnParam.switchingCtrl();
      } else if (element.innerText === 'Win') {
      //  console.log('cancel Win');
      } else if (element.innerText === 'Alt') {
        btnParam.switchingAlt();
      //  console.log('cancel');
      } else if (element.innerText === 'Shift') {
        btnParam.switchingShift();
      }
    });
  });
}
mouseTaping();

function keyTapping() {
  const displayBoard = document.getElementById('textarea');
  document.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === 'ArrowRight') {
      displayBoard.value += '→';
    } else if (event.key === 'ArrowLeft') {
      displayBoard.value += '←';
    } else if (event.key === 'ArrowDown') {
      displayBoard.value += '↓';
    } else if (event.key === 'ArrowUp') {
      displayBoard.value += '↑';
    } else if (event.code === 'Space') {
      displayBoard.value += ' ';
    } else if (event.code === 'Slash') {
      displayBoard.value += '/';
    } else if (event.code === 'Backspace') {
      let text = displayBoard.value;
      text = text.slice(0, -1);
      displayBoard.value = text;
    } else if (event.code === 'Enter') {
      displayBoard.value += '\n';
    } else if (event.code === 'Tab') {
      displayBoard.value += '';
    } else if (event.code === 'CapsLock') {
      btnParam.switchingCapsLock();
      if (btnParam.capsLock === false) {
        keyboard.btns[29].classList.remove('caps-activ');
        if (keyboard.lang === 'engl') {
          keyboard.codeConfig = 1;
        } else if (keyboard.lang === 'rus') {
          keyboard.codeConfig = 4;
        }
      } else if (btnParam.capsLock === true) {
        keyboard.btns[29].classList.add('caps-activ');
        if (keyboard.lang === 'engl') {
          keyboard.codeConfig = 2;
        } else if (keyboard.lang === 'rus') {
          keyboard.codeConfig = 5;
        }
      }
      displayBoard.value += '';
    } else if (event.key === 'Shift') {
      btnParam.switchingShift();
      if (keyboard.lang === 'engl') {
        keyboard.codeConfig = 3;
      } else if (keyboard.lang === 'rus') {
        keyboard.codeConfig = 6;
      }
      displayBoard.value += '';
    } else if (event.key === 'Control') {
      btnParam.switchingCtrl();
      displayBoard.value += '';
    } else if (event.key === 'Alt') {
      btnParam.switchingAlt();
      displayBoard.value += '';
    } else {
      displayBoard.value += event.key;
    }
    btnSubscribing();
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
      btnParam.switchingShift();
      if (keyboard.lang === 'engl') {
        keyboard.codeConfig = 1;
      } else if (keyboard.lang === 'rus') {
        keyboard.codeConfig = 4;
      }
      displayBoard.value += '';
    } else if (event.key === 'Control') {
      btnParam.switchingCtrl();
      displayBoard.value += '';
    } else if (event.key === 'Alt') {
      btnParam.switchingAlt();
      displayBoard.value += '';
    }
    btnSubscribing();
  });
}

keyTapping();

function apdating() {
  if (JSON.parse(localStorage.getItem('keyboardLang')) !== null) {
    keyboard.lang = JSON.parse(localStorage.getItem('keyboardLang'));
  }
  if (JSON.parse(localStorage.getItem('keyboardConfig')) !== null) {
    keyboard.codeConfig = JSON.parse(localStorage.getItem('keyboardConfig'));
  }
  btnSubscribing();
}
apdating();
