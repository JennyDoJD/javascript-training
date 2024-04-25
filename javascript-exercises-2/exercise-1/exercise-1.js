// Clicking on the button the font, font size, and color of the paragraph text will be changed.
function changeText() {
  // Get the paragraph element by its id
  const paragraph = document.getElementById('get-text');

  // Modify the style properties
  // paragraph.style.font = 'Arial, sans-serif';
  // paragraph.style.fontSize = '20px';
  // paragraph.style.color = 'pink';

  paragraph.style.cssText = 'font: Arial, sans-serif; font-size: 20px; color: pink';
}
