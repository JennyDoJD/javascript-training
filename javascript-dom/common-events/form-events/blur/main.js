const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

usernameInput.addEventListener('blur', function() {
  console.log('Username input has lost focus.');
});

passwordInput.addEventListener('blur', function() {
  console.log('Password input has lost focus.');
});
