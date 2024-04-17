// Write a JavaScript program to get the window width and height (any time the window is resized).


function updateWindowSize() {
  const widthElement = document.getElementById('wd-width');
  const heightElement = document.getElementById('wd-height');

  // get window width and height
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // update the text content of the span elements
  widthElement.textContent = windowWidth + 'px';
  heightElement.textContent = windowHeight + 'px';
}
updateWindowSize();

// attach event listener for window size
window.addEventListener('resize', updateWindowSize);
