/**
 * Handles the click event on navigation links.
 * @param {Event} event - The click event triggered by the user.
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

// Add event listener to the nav-list to handle clicks on navigation links
document
  .querySelector('.nav-list')
  .addEventListener('click', handleNavLinkClick);
