//  Write a JavaScript program to calculate sphere volume.
function calculateVolume() {
  // get the radius value from the input
  const radius = parseFloat(document.getElementById('get-radius').value);
  // calculate the volume of the sphere
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  // display the values
  document.getElementById('get-volume').value = volume.toFixed(4);
}
