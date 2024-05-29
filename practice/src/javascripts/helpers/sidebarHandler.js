export function handleNavLinkClick(event) {
  // Check if the clicked element is a nav-link inside a nav-item
  if (event.target.classList.contains('nav-link')) {
    const clickedNavItem = event.target.closest('.nav-item');

    // Check if the clicked nav-item is already active
    if (!clickedNavItem.classList.contains('active')) {
      // Remove 'active' class from the currently active nav-item
      const activeNavItem = document.querySelector('.nav-item.active');

      if (activeNavItem) {
        activeNavItem.classList.remove('active');
      }

      // Add 'active' class to the parent nav-item of the clicked nav-link
      clickedNavItem.classList.add('active');
    }
  }
}
