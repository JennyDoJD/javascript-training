import ProductService from '../services/productService';
import ProductTemplate from '../templates/productTemplate';

export default class ProductList {
  constructor() {
    this.productService = new ProductService();
    this.productContainer = document.querySelector('.homepage-main');
  }

  /**
   * Render products on the homepage
   */
  async renderProducts() {
    try {
      const products = await this.productService.getAllProducts();
      ProductTemplate.renderProducts(products);
    } catch (error) {
      console.error('Failed to render products:', error);
    }
  }
}
