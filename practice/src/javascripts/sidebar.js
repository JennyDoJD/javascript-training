// Identify the links in the sidebar and add/remove the 'active' class when clicked
document.querySelector('.nav-list').addEventListener('click', function (event) {
  // Check if the clicked element is a nav-link inside a nav-item
  if (event.target.classList.contains('nav-link')) {
    const clickedNavItem = event.target.closest('.nav-item');

    // Check if the clicked nav-item is already active
    if (!clickedNavItem.classList.contains('active')) {
      // Remove 'active' class from all nav-items
      document
        .querySelectorAll('.nav-item.active')
        .forEach((item) => item.classList.remove('active'));

      // Add 'active' class to the parent nav-item of the clicked nav-link
      clickedNavItem.classList.add('active');
    }
  }
});
