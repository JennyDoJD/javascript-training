import ProductForm from './products/productForm';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import handleNavLinkClick from './helpers/sidebarHandler';
import action from './helpers/actionHandler';

(function () {
  // Initialize the ProductForm with appropriate action (add or edit)
  const service = new ProductService();
  const template = new ProductTemplate();
  const productForm = new ProductForm(service, template, action);

  productForm.init();
})();
