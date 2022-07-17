const rangeInputEl = document.querySelector('#font-size-control');
const textEl = document.getElementById('text');

rangeInputEl.addEventListener('input', onInput);

function onInput(event) {
    const textFontSize = rangeInputEl.value;
    textEl.style.fontSize = `${textFontSize}px`;
}