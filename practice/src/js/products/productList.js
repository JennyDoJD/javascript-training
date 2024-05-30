export default class ProductList {
  constructor(service, template) {
    this.productService = service;
    this.productTemplate = template;
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
