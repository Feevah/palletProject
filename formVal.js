
const form = document.getElementById('form');
const companyName = document.getElementById('companyName');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("submit");
});