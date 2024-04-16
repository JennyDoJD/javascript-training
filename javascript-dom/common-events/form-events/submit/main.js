const myForm = document.getElementById('myForm');

// the 'submit' event is triggered when the form is submitted
myForm.addEventListener('submit', function(event) {
    // prevent the default form submission action
  event.preventDefault();

  // get the values of input fields and validate
  const usernameValue = document.getElementById('username').value;
  const passwordValue = document.getElementById('password').value;

  if (usernameValue === '' || passwordValue === '') {
    alert('Please fill in all fields');
  } else {
    alert('Form submitted successfully');
  }
});
