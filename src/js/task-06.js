const input = document.querySelector('#validation-input');
console.log(input.dataset.length)

input.addEventListener('blur', onInputBlur);

 function onInputBlur(event) {
     if (input.value.length >= input.dataset.length) {
         input.classList.add('valid');
         input.classList.remove('invalid');
     } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
     }
}