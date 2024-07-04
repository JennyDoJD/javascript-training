import ProductForm from './products/productForm';
import handleNavLinkClick from './helpers/sidebarHandler';
import getActionFromUrl from './helpers/actionHandler';

(function () {
  const action = getActionFromUrl();

  // Initialize the ProductForm with appropriate action (add or edit)
  new ProductForm(action);

  // Add event listener to handle clicks on navigation links
  document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('.nav-list');

    if (navList) {
      navList.addEventListener('click', handleNavLinkClick);
    }
  });
})();
