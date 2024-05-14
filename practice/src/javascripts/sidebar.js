// Identify the links in the sidebar and add/remove the 'active' class when clicked
document.querySelector('.nav-list').addEventListener('click', function (event) {
  // Check if the clicked element is a nav-link inside a nav-item
  if (event.target.classList.contains('nav-link')) {
    // Remove 'active' class from all nav-items
    document
      .querySelectorAll('.nav-item.active')
      .forEach((item) => item.classList.remove('active'));

    // Add 'active' class to the parent nav-item of the clicked nav-link
    event.target.closest('.nav-item').classList.add('active');
  }
});
