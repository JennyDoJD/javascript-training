import ProductList from './products/productList';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import ProductForm from './products/productForm';
import handleNavLinkClick from './helpers/sidebar';

// Render products using ProductList instance
const service = new ProductService();
const template = new ProductTemplate();
const productList = new ProductList(service, template);

productList.init();

// Initialize the handler for the form
const productForm = new ProductForm(service, template);

productForm.init();
