// Write a JavaScript program to count and display dropdown list items in an alert window.
function getOptions() {
  const selectElement = document.getElementById('select-color');
  const options = selectElement.options;
  const optionCount = options.length;
  let optionList = '';

  for (let i = 0; i < optionCount; i++) {
    optionList += options[i].text + '\n';
  }

  alert('Number of items: ' + optionCount + '\nItem:\n' + optionList);
}
