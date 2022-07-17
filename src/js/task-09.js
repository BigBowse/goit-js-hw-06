function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
// const widget = document.querySelector('.widget');
const colorNameLabel = document.querySelector('.color');
const chngColorBtn = document.querySelector('.change-color');

chngColorBtn.addEventListener('click', onBtnClk);

function onBtnClk(event) {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  colorNameLabel.textContent = bgColor;
}
