const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

startEl.addEventListener('click', onStartColor);
stopEl.addEventListener('click', onStopColor); 

function onStartColor() {
    timerId = setInterval(getRandomHexColor, 1000);
    startEl.setAttribute('disabled', 'true');
}

function onStopColor() {
    clearInterval(timerId);
    startEl.removeAttribute('disabled', 'true');
}

function getRandomHexColor() {
  return bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
