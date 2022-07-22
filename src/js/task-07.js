const rangeInputEl = document.querySelector('#font-size-control');
const textEl = document.getElementById('text');

function onInput(event) {
    const textFontSize = rangeInputEl.value;
    textEl.style.fontSize = `${textFontSize}px`;
}

rangeInputEl.addEventListener('input', onInput);

