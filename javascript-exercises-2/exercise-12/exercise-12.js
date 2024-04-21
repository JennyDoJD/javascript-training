// Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.
function highlightText() {
  // get all the strong elements within the document
  const boldText = document.querySelectorAll('strong');

  // add the 'bold-color' class to each strong element
  boldText.forEach(text => {
    text.classList.add('bold-color');
  });
}

function returnNormalText() {
  // get all the strong element withing the document
  const boldText = document.querySelectorAll('strong');

  // remove the 'bold-color' class to each strong element
  boldText.forEach(text => {
    text.classList.remove('bold-color');
  });
}
