// Write a JavaScript program to remove items from a drop-down list.
function removeColor() {
  const selectElement = document.getElementById('colorSelect');
  selectElement.remove(selectElement.selectedIndex);
}
