// Write a JavaScript function to add rows to a table.

function insert_Row() {
  // get a reference to the table
  const table = document.getElementById('sampleTable');

  // create a new row and two data cells
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // set content for the data cells
  cell1.innerHTML = 'New row cell1';
  cell2.innerHTML = 'New row cell2';
};
