const myInput = document.getElementById('myInput');

// keydown
myInput.addEventListener('keydown', function(event) {
  console.log('Key down:', event.key);
});

// keyup
myInput.addEventListener('keyup', function(event) {
    console.log('Key up:', event.key);
  });

// keypress
myInput.addEventListener('keypress', function(event) {
    console.log('Key press:', event.key);
  });
