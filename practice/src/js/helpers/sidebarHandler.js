const navList = document.querySelector('.nav-list');

/**
 * Handles the click event on a navigation link item.
 * @param {Event} event - The click event triggered by the navigation link.
 */
function handleNavLinkClick(event) {
  const navLinkItem = event.target.closest('.nav-item');

  if (navLinkItem && !navLinkItem.classList.contains('active')) {
    const activeNavItem = document.querySelector('.nav-item.active');

    if (activeNavItem) {
      activeNavItem.classList.remove('active');
    }

    navLinkItem.classList.add('active');
  }
}

// Add event listener to the nav-list to handle clicks on navigation links
navList.addEventListener('click', handleNavLinkClick);

export default handleNavLinkClick;
