// Write a JavaScript function to get the values of First and Last names of the following form.
function getFormValue() {
  // Get the form element
  const form = document.getElementById('user-profile');

  // Get the values of the first and last name inputs
  const firstName = form.elements['fname'].value;
  const lastName = form.elements['lname'].value;

  // Display the values
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}
