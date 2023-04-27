const keyboard = {
  body: document.getElementById('body'),
  bodyKeyboard: document.createElement('div'),
  display: document.createElement('div'),
  ammountsBtn: 65,
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
    } else if (i === 60) {
      buttons[59].classList.add('btn-60');
    }
  }
}
btnFilling();

function btnSubscribing(){

}
