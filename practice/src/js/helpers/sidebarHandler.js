function handleNavLinkClick(event) {
  // Check if the clicked element or its parent is a nav-link inside a nav-item
  const parentItem = event.target.closest('.nav-item');
  if (parentItem) {
    // Check if the clicked nav-item is already active
    if (!parentItem.classList.contains('active')) {
      // Remove 'active' class from the currently active nav-item
      const activeNavItem = document.querySelector('.nav-item.active');
      if (activeNavItem) {
        activeNavItem.classList.remove('active');
      }

      // Add 'active' class to the parent nav-item of the clicked nav-link
      parentItem.classList.add('active');
    }
  }
}

export { handleNavLinkClick };
