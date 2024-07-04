import ProductList from './products/productList';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import handleNavLinkClick from './helpers/sidebarHandler';

(function () {
  const service = new ProductService();
  const template = new ProductTemplate();
  const productList = new ProductList(service, template);
  const navList = document.querySelector('.nav-list');

  // Initialize the ProductList
  productList.init();

  // Add event listener to the nav-list to handle clicks on navigation links
  navList.addEventListener('click', handleNavLinkClick);
})();
