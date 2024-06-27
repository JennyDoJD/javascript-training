import ProductForm from './products/productForm';
import handleNavLinkClick from './helpers/sidebarHandler';
import getActionFromUrl from './helpers/actionHandler';

(function () {
  const action = getActionFromUrl();

  // Initialize the ProductForm with appropriate action (add or edit)
  new ProductForm(action);
})();
