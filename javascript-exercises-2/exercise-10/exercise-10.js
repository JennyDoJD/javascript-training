//  Write a JavaScript program to calculate sphere volume.
function calculateVolume() {
  // Get the radius value from the input
  const radius = parseFloat(document.getElementById('get-radius').value);
  // Calculate the volume of the sphere
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  // Display the values
  document.getElementById('get-volume').value = volume.toFixed(4);
}
