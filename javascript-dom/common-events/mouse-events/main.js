// onclick
const changeText = () => {
  const p = document.querySelector('p');
  p.textContent = 'I changed because of an inline event handler.'
}

// ondblClick
const myButton = document.getElementById('myButton');
myButton.addEventListener('dblclick', function() {
  alert('You double clicked the button!');
});

const myElement = document.getElementById('myElement');

// mouseenter
myElement.addEventListener('mouseenter', function() {
  myElement.textContent = 'Mouse is inside';
});

// mouseleave
myElement.addEventListener('mouseleave', function() {
  myElement.textContent = 'Mouse Enter here';
})
