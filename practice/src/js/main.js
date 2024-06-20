import ProductList from './products/productList';
import ProductForm from './products/productForm';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import action from './helpers/actionHandler';
import { handleNavLinkClick } from './helpers/sidebarHandler';

// Render products using ProductList instance
const service = new ProductService();
const template = new ProductTemplate();
const productList = new ProductList(service, template);

productList.init();

// Add event listener to the nav-list to handle clicks on navigation links
document
  .querySelector('.nav-list')
  .addEventListener('click', handleNavLinkClick);

// Initialize the handler for the form
const productForm = new ProductForm(service, template, action);

productForm.init();
