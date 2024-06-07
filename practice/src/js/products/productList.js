export default class ProductList {
  constructor(service, template) {
    this.productService = service;
    this.productTemplate = template;
    this.sortSelect = document.getElementById('sort-select');
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
  async renderProducts() {
    const products = await this.productService.getAll();

    this.productTemplate.renderProducts(products);
  }

  /**
   * Binds event handlers for managing product deletion.
   * This method binds event handlers to toggle the delete modal and confirm deletion.
   */
  handlerEventHandlers = () => {
    this.productTemplate.bindToggleModal();
    this.productTemplate.bindDeleteModalEvents(this.handlerConfirmDelete);
    this.bindSortChange();
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
   * Handles the sorting change event.
   * This method is triggered when the user changes the sorting criteria.
   */
  handleSortChange = async () => {
    const sortBy = this.sortSelect.value.split('-')[0];
    const sortOrder = this.sortSelect.value.split('-')[1];
    const sortedProducts = await this.productService.getSortedProducts(
      sortBy,
      sortOrder
    );
    this.productTemplate.renderProducts(sortedProducts);
  };

  /**
   * Binds event listener for sorting changes.
   * This method adds an event listener to the sort select element to handle sorting changes.
   */
  bindSortChange = () => {
    this.sortSelect.addEventListener('change', this.handleSortChange);
  };
}
