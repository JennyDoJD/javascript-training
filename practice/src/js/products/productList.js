export default class ProductList {
  constructor(service, template) {
    this.productService = service;
    this.productTemplate = template;
    this.currentParams = {};
  }

  /**
   * Initializes the ProductList instance
   * This method renders the products initially and binds event handlers
   */
  async init() {
    await this.displayProducts();

    this.handlerEventHandlers();
  }

  /**
   * Fetch all products from the ProductService
   * Render the products using the ProductTemplate component
   */
  async displayProducts(params = {}) {
    try {
      this.productTemplate.toggleIndicator(true);
      this.currentParams = { ...this.currentParams, ...params };

      const products = await this.productService.getList(this.currentParams);

      this.productTemplate.renderProducts(products);
    } catch (error) {
      this.productTemplate.showLoadFailureToast();
    } finally {
      this.productTemplate.toggleIndicator(false);
    }
  }

  /**
   * Binds event handlers for managing product.
   */
  handlerEventHandlers = () => {
    this.productTemplate.bindToggleModal();
    this.productTemplate.bindDeleteModalEvents(this.handlerConfirmDelete);
    this.productTemplate.bindSearchProduct(this.handlerSearchProduct);
    this.productTemplate.bindSortProducts(this.handlerSortProducts);
  };

  /**
   * Handles the confirmation of product deletion.
   * This method attempts to delete a product by its ID, renders updated products,
   * and displays success or failure messages accordingly.
   * @param {string} id - The ID of the product to be deleted.
   */
  handlerConfirmDelete = async (id) => {
    try {
      await this.productService.deleteByID(id);
      await this.displayProducts();

      this.productTemplate.showDeleteSuccessToast();
    } catch (error) {
      this.productTemplate.showDeleteFailureToast();
    } finally {
      this.productTemplate.toggleDeleteModal();
    }
  };

  /**
   * Handles the search of products by keyword.
   * @param {Object} params - The search criteria object containing the keyword.
   */
  handlerSearchProduct = async (params = {}) => {
    await this.displayProducts(params);
  };

  /**
   * Handles sorting of products.
   * @param {Object} params - The sorting parameters.
   */
  handlerSortProducts = async (params = {}) => {
    await this.displayProducts(params);
  };
}
