export default class ProductList {
  constructor(service, template) {
    this.productService = service;
    this.productTemplate = template;
  }

  /**
   * Initializes the ProductList instance
   * This method renders the products initially and binds event handlers
   */
  async init() {
    await this.renderProducts();

    this.handlerEventHandlers();
  }

  /**
   * Fetch all products from the ProductService
   * Render the products using the ProductTemplate component
   */
  async renderProducts(params = {}) {
    try {
      this.productTemplate.toggleIndicator(true);

      const products = await this.productService.getAll(params);

      this.productTemplate.renderProducts(products);
    } catch (error) {
      this.productTemplate.showLoadFailureToast();
    } finally {
      this.productTemplate.toggleIndicator(false);
    }
  }

  /**
   * Binds event handlers for managing product deletion.
   * This method binds event handlers to toggle the delete modal and confirm deletion.
   */
  handlerEventHandlers = () => {
    this.productTemplate.bindToggleModal();
    this.productTemplate.bindDeleteModalEvents(this.handlerConfirmDelete);
    this.productTemplate.bindSortProducts(this.handleSortProducts);
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
      await this.renderProducts();

      this.productTemplate.showDeleteSuccessToast();
    } catch (error) {
      this.productTemplate.showDeleteFailureToast();
    } finally {
      this.productTemplate.toggleDeleteModal();
    }
  };

  /**
   * Handle sorting of products
   * @param {string} sortOption - The selected sort option in the format "field-orderBy"
   * @returns {Promise<void>} - A Promise that resolves after sorting and rendering the products
   */
  handleSortProducts = async (params = {}) => {
    if (!('sortBy' in params && 'order' in params)) {
      params.sortBy = 'name';
      params.order = 'desc';
    }

    try {
      await this.renderProducts(params);
    } catch (error) {
      this.productTemplate.showLoadFailureToast();
    }
  };
}
