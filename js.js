const keyboard = {
  body: document.getElementById('body'),
  bodyKeyboard: document.createElement('div'),
  display: document.createElement('textarea'),
  ammountsBtn: 64,
  confBtn_1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_2: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_3_sgn: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspase',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'Del',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_4: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_5: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'ё', '↑',
    'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
  confBtn_6_sng: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspase',
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
}

const btnParam = new ButtonsParameters();

function bodyCreating() {
  keyboard.body.classList.add('body-main');
  keyboard.bodyKeyboard.classList.add('body-keyboard');
  keyboard.body.prepend(keyboard.bodyKeyboard);
  keyboard.display.classList.add('display-keyboard');
  keyboard.display.id = 'textarea';
  keyboard.body.prepend(keyboard.display);
}
bodyCreating();

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

function btnSubscribing() {
  for (let i = 0; keyboard.ammountsBtn > i; i += 1) {
    keyboard.btns[i].innerText = keyboard.confBtn_1[i];
  }
}
btnSubscribing();

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

// ----------------------- carriage -----------------------------

// function carriageInit() {
//   const carriage = document.createElement('span');
//   carriage.innerText = '|';
//   carriage.classList.add('carriage');
//   const displayBoard = document.querySelector('.display-keyboard');
//   displayBoard.append(carriage);
// }
// carriageInit();

// class Blink {
//   constructor() {
//     this.permission = true;
//   }

//   switching() {
//     const carriage = document.querySelector('.carriage');
//     if (this.permission === false) {
//       carriage.classList.add('carriage-dissapear');
//       this.permission = true;
//     } else {
//       carriage.classList.remove('carriage-dissapear');
//       this.permission = false;
//     }
//   }
// }

// const blink = new Blink();

// setInterval(() => {
//   blink.switching();
// }, 500);

//  ----------------------- mouse -------------------------

function mouseAnimating() {
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
  keyboard.btns.forEach((element) => {
    element.addEventListener('mouseout', () => {
      element.classList.remove('button-active-mouse');
    });
  });
}
mouseAnimating();

// function elemCutting() {
//   const displayBoard = document.querySelector('.display-keyboard'); 
//   let text = displayBoard.textContent;
//   text = text.slice(0, -2) + text.slice(-1);
//   displayBoard.textContent = text;
// }

function mouseTaping() {
  const displayBoard = document.getElementById('textarea');
  keyboard.btns.forEach((element) => {
    element.addEventListener('mousedown', () => {
      const displayText = displayBoard.value;
      if (element.innerText === '') {
        const spaceSymb = document.createTextNode(String.fromCharCode(160));
        displayBoard.appendChild(spaceSymb);
      } else if (element.innerText === 'Backspace') {
        let text = displayBoard.value;
        text = text.slice(0, -1);
        displayBoard.value = text;
      } else if (element.innerText === 'Ctrl') {
        btnParam.switchingCtrl();
      } else if (element.innerText === 'Win') {
        console.log('cancel');
      } else if (element.innerText === 'Alt') {
        btnParam.switchingAlt();
      } else if (element.innerText === 'CapsLock') {
        btnParam.switchingCapsLock();
        if (btnParam.capsLock === false) {
          element.classList.remove('tab-activ');
        } else if (btnParam.capsLock === true) {
          element.classList.add('tab-activ');
        }
      } else if (element.innerText === 'Shift') {
        btnParam.switchingShift();
      } else if (element.innerText === 'Tab') {
        displayBoard.value += '\t';
        btnParam.switchingTab();
      } else if (element.innerText === 'Del') {
        console.log('cancel Del');
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
      // else if (displayBoard.innerText.length === 1) {
      //   displayBoard.textContent = element.textContent + displayText;
      //   carriageInit();
      //   elemCutting();
      // } else if (displayBoard.innerText.length > 1) {
      //   displayBoard.textContent = displayText + element.textContent;
      //   carriageInit();
      //   elemCutting();
      // }
    });
    element.addEventListener('mouseup', () => {
      if (element.innerText === 'Ctrl') {
        btnParam.switchingCtrl();
      } else if (element.innerText === 'Win') {
        console.log('cancel Win');
      } else if (element.innerText === 'Alt') {
        btnParam.switchingAlt();
        console.log('cancel');
      } else if (element.innerText === 'Shift') {
        btnParam.switchingShift();
        console.log(btnParam.shift, 'btnParam.shift');
      }
    });
  });
}
mouseTaping();
