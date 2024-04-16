// Write a JavaScript program to remove items from a drop-down list.


function removeColor() {
  let selectElement = document.getElementById('colorSelect');
  selectElement.remove(selectElement.selectedIndex);
}
