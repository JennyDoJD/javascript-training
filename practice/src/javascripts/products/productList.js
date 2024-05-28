import ProductService from '../services/productService';
import ProductTemplate from '../templates/productTemplate';

export default class ProductList {
  constructor() {
    this.productService = new ProductService();
    this.productContainer = document.querySelector('.homepage-main');
  }

  /**
   * Fetch all products from the ProductService
   * Render the products using the ProductTemplate component
   * Log an error message if rendering fails
   */
  async renderProducts() {
    try {
      const products = await this.productService.getAll();
      ProductTemplate.renderProducts(products);
    } catch (error) {
      console.error('Failed to render products:', error);
    }
  }
}
