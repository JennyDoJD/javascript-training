// Write a JavaScript program to remove items from a drop-down list.
function removeColor() {
  const selectElement = document.getElementById('select-color');
  selectElement.remove(selectElement.selectedIndex);
}
