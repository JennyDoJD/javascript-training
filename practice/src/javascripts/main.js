import ProductList from './products/productList';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import { handleNavLinkClick } from './helpers/sidebarHandler';

const service = new ProductService();
const template = new ProductTemplate();
const productList = new ProductList(service, template);

productList.renderProducts();

// Add event listener to the navigation list to handle clicks on navigation links
document
  .querySelector('.nav-list')
  .addEventListener('click', handleNavLinkClick);
