// Change the body style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, san-serif';

// Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('nickname').textContent = 'Loi Do';
document.getElementById('favorites').textContent = 'Fubao';
document.getElementById('hometown').textContent = 'Da Nang';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = 'listitem';
  items[i].style.color = 'red';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
let myImage = document.createElement('img');
myImage.src = 'https://i.pinimg.com/550x/a9/a1/cd/a9a1cd1c70b35363e6b13903544f0935.jpg';
document.body.appendChild(myImage);
