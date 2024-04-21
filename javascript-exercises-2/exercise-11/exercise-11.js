// Write a JavaScript program to display a random image (clicking on a button) from the following list.
function displayImage() {
  const images = [
    {
      url: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg',
      width: '240',
      height: '160',
    },
    {
      url: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg',
      width: '320',
      height: '195',
    },
    {
      url: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg',
      width: '500',
      height: '343'
    }
  ];

  // Get a random index within the range of images array
  const randomIndex = Math.floor(Math.random() * images.length);

  // Get the random image object from the array
  const randomImage = images[randomIndex];

  // Get the <img> element
  const imgElement = document.getElementById('randomImage');

  // Set the src attribute of the <img> element to the random image URL
  imgElement.src = randomImage.url;
  imgElement.width = randomImage.width;
  imgElement.height = randomImage.height;
}
