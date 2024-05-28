import ProductService from '../services/productService';
import ProductListView from '../templates/product';

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
      const products = await this.productService.getAll();

      ProductListView.renderProducts(products);
    } catch (error) {
      console.error('Failed to render products:', error);
    }
  }
}
