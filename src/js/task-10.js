function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const input = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const amount = +document.querySelector('#controls input').value;
createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const firstDivSize = 30;

  amount.forEach((number) => {
    const div = document.createElement('div');
    const size = firstDivSize + number * 10;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    const bgColor = getRandomHexColor();
    div.style.backgroundColor = bgColor;
    boxes.appendChild(div);
  });
} 

function destroyBoxes() {
  boxes.innerHTML = "";
}
