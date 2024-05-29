import ProductService from '../services/productService';
import ProductTemplate from '../templates/productTemplate';

export default class ProductList {
  constructor() {
    this.productService = new ProductService();
    this.productContainer = document.querySelector('.homepage-main');
    this.productTemplate = new ProductTemplate();
  }

  /**
   * Fetch all products from the ProductService
   * Render the products using the ProductTemplate component
   */
  async renderProducts() {
    const products = await this.productService.getAll();
    this.productTemplate.renderProducts(products);
  }
}
