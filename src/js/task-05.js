const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

function onInputChange(event) {
    if (input.value === '') {
        nameLabel.textContent = 'Anonymous';
    } else {
        nameLabel.textContent = input.value;
    }
}

input.addEventListener('input', onInputChange);

