import ProductList from './products/productList';
import ProductForm from './products/productForm';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import handleNavLinkClick from './helpers/sidebarHandler';
import action from './helpers/actionHandler';

(function () {
  // Initialize the ProductList
  const service = new ProductService();
  const template = new ProductTemplate();
  const productList = new ProductList(service, template);

  productList.init();

  // Initialize the ProductForm with appropriate action (add or edit)
  const productForm = new ProductForm(service, template, action);

  productForm.init();

  // Add event listener to the nav-list to handle clicks on navigation links
  document
    .querySelector('.nav-list')
    .addEventListener('click', handleNavLinkClick);
})();
