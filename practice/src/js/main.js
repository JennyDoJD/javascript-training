import ProductList from './products/productList';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/product';
import handleNavLinkClick from './helpers/sidebarHandler';

(function () {
  const service = new ProductService();
  const template = new ProductTemplate();
  const productList = new ProductList(service, template);

  // Initialize the ProductList
  productList.init();

  // Add event listener to handle clicks on navigation links
  document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('.nav-list');

    if (navList) {
      navList.addEventListener('click', handleNavLinkClick);
    }
  });
})();
