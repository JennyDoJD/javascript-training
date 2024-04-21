// Write a JavaScript program to get the window width and height (any time the window is resized).
function updateWindowSize() {
  const widthElement = document.getElementById('wd-width');
  const heightElement = document.getElementById('wd-height');

  // Get window width and height
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Update the text content of the span elements
  widthElement.textContent = windowWidth + 'px';
  heightElement.textContent = windowHeight + 'px';
}
updateWindowSize();

// Attach event listener for window size
window.addEventListener('resize', updateWindowSize);
