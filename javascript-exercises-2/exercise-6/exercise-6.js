// Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.
function changeContent() {
  const row = parseInt(prompt('Enter the row index(0,1,2):'));
  const column = parseInt(prompt('Enter the column index(0,1):'));
  const content = prompt('Enter the new content for the cell:');

  // Get the table
  const table = document.getElementById('myTable');

  // Check if the table exists
  if (!table) {
    alert('Table not found!');
    return;
  }

  // Check if the row and column are within valid range
  if (row >= 0 && row < table.rows.length && column >= 0 && column < table.rows[row].cells.length) {
    // Update the content of the specified cell
    table.rows[row].cells[column].innerHTML = content;
  } else {
    alert('Invalid row or column index!');
  }
}
