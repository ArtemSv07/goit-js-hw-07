'use strict';

const form = document.querySelector("form");

const button = document.querySelector('button');
button.classList.add('button-login')

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

	event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
              return alert('All form fields must be filled in');
            }

    let objectEmailPassword = {Mail: email, Password: password}
    console.log(objectEmailPassword);

    form.reset();
};






 



