function createTable() {
  let rows = parseInt(prompt('Enter the number of rows:'));
  let cols = parseInt(prompt('Enter the number of columns:'));

  const table = document.getElementById('myTable');
  // Clear existing table content
  table.innerHTML = '';
  // Create rows and cells
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell(j);
      cell.innerHTML = 'Row-' + i + ' Column-' + j;
    }
  }
}
