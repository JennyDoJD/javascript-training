// Clicking on the button the font, font size, and color of the paragraph text will be changed.

function changeText() {
  // get the paragraph element by its id
  let paragraph = document.getElementById('text');

  // modify the style properties
  paragraph.style.font = 'Arial, sans-serif';
  paragraph.style.fontSize = '20px';
  paragraph.style.color = 'pink';
}
