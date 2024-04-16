// Write a JavaScript program to count and display dropdown list items in an alert window.


function getOptions() {
  let selectElement = document.getElementById('mySelect');
  let options = selectElement.options;
  let optionCount = options.length;
  let optionList = '';

  for (let i = 0; i < optionCount; i++) {
    optionList += options[i].text + '\n';
  }

  alert('Number of items: ' + optionCount + '\nItem:\n' + optionList);
}
