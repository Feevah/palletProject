const formReg = document.getElementById('formReg');
const companyName = document.getElementById('companyName');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('Retyped-password');


// Functions


// Check if email is valid 
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
       showError(input, 'Email is not valid');
    }
}


// Show Error 
function showError (input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Check required fields

function checkRequired (inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getInputName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });

}

// Show Success 

function showSuccess (input){
    const formControl = input.parentElement;
    formControl.className = "form-group success"
}

// Check passwords match 

function checkPasswords (input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

// Get input name 
function getInputName (input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

// Check input Length 
function checkLength(input, min, max){
    if(input.value.length < min) {
        showError(input, `${getInputName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${getInputName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

// EventListeners

formReg.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([companyName, username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(companyName, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswords(password, password2)

});