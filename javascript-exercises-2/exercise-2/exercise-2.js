// Write a JavaScript function to get the values of First and Last names of the following form.
function getFormvalue() {
  // Get the form element
  let form = document.getElementById('form1');

  // Get the values of the first and last name inputs
  let firstName = form.elements['fname'].value;
  let lastName = form.elements['lname'].value;

  // Display the values
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}
