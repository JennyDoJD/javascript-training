import ProductList from './products/productList';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import { handleNavLinkClick } from './helpers/sidebarHandler';
import ProductFormHandler from './products/productFormHandler';

// Render products using ProductList instance
const service = new ProductService();
const template = new ProductTemplate();
const productList = new ProductList(service, template);

productList.renderProducts();

// Add event listener to the nav-list to handle clicks on navigation links
document
  .querySelector('.nav-list')
  .addEventListener('click', handleNavLinkClick);

// Initialize the handler for the form
const productFormHandler = new ProductFormHandler();

productFormHandler.init();
