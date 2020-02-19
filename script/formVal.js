
const formReg = document.getElementById('formReg');
const companyName = document.getElementById('companyName');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const password2 = document.getElementById('password2');


// Functions


// Check if email is valid 
function validateDaEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Show Error 
function showError (input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}



// Show Success 

function showSuccess (input){
    const formControl = input.parentElement;
    formControl.className = "form-group success"
}

// EventListeners

formReg.addEventListener('submit', function(e) {
    e.preventDefault();
    if(companyName.value === ''){
        showError(companyName, 'Company name required');
    } else {
        showSuccess(companyName);
    }

    if(username.value === ''){
        showError(username, 'Username required');
    } else {
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    } 
    else if (!validateDaEmail(email.value)) {
        showError(email, 'Email is not valid');
    }
    else {
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'Please retype password');
    } else {
        showSuccess(password2);
    }
});