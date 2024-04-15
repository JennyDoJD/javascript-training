const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

usernameInput.addEventListener('focus', function() {
  console.log('Username input has received focus.');
});

passwordInput.addEventListener('focus', function() {
  console.log('Password input has received focus.');
});
