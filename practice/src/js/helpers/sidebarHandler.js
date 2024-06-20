/**
 * Handles the click event on a navigation link item.
 * @param {Event} event - The click event triggered by the navigation link.
 */
function handleNavLinkClick(event) {
  const navLinkItem = event.target.closest('.nav-item');

  if (navLinkItem) {
    if (!navLinkItem.classList.contains('active')) {
      const activeNavItem = document.querySelector('.nav-item.active');

      if (activeNavItem) {
        activeNavItem.classList.remove('active');
      }

      navLinkItem.classList.add('active');
    }
  }
}

export default handleNavLinkClick;
