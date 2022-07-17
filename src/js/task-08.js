const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        Email: email,
        Password: password,
    }

    if ( email === "" || password === "") {
        window.alert('Please, fill in all the necessary fields');
    }

     // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log('Name', name);
    //     console.log('Value', value);
    // })

    console.log(formData);
    form.reset();
}




