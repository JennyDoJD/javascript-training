import ProductList from './products/productList';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import handleNavLinkClick from './helpers/sidebarHandler';

(function () {
  // Initialize the ProductList
  const service = new ProductService();
  const template = new ProductTemplate();
  const productList = new ProductList(service, template);

  productList.init();
})();
