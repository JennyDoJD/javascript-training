import ProductForm from './products/productForm';
import handleNavLinkClick from './helpers/sidebarHandler';
import action from './helpers/actionHandler';

(function () {
  // Initialize the ProductForm with appropriate action (add or edit)
  const productForm = new ProductForm(action);

  productForm.init();
})();
