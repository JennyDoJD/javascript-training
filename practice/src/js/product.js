import ProductForm from './products/productForm';
import handleNavLinkClick from './helpers/sidebarHandler';
import getActionFromUrl from './helpers/actionHandler';

(function () {
  const action = getActionFromUrl();
  const navList = document.querySelector('.nav-list');

  // Initialize the ProductForm with appropriate action (add or edit)
  new ProductForm(action);

  // Add event listener to the nav-list to handle clicks on navigation links
  navList.addEventListener('click', handleNavLinkClick);
})();
