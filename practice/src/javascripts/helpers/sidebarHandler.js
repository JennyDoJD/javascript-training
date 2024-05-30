function handleNavLinkClick(event) {
  // Check if the clicked element or its parent is a nav-link inside a nav-item
  const clickedNavItem = event.target.closest('.nav-item');
  if (clickedNavItem) {
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

export { handleNavLinkClick };
