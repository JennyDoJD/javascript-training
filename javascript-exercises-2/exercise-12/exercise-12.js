// Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.
function highlightText() {
  // Get all the strong elements within the document
  const boldText = document.querySelectorAll('strong');

  // Add the 'bold-color' class to each strong element
  boldText.forEach(text => {
    text.classList.add('bold-color');
  });
}

function returnNormalText() {
  // Get all the strong element withing the document
  const boldText = document.querySelectorAll('strong');

  // Remove the 'bold-color' class to each strong element
  boldText.forEach(text => {
    text.classList.remove('bold-color');
  });
}
