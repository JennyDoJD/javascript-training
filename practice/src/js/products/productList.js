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

      const products = await this.productService.getList(params);

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
      await this.renderProducts();

      this.productTemplate.showDeleteSuccessToast();
    } catch (error) {
      this.productTemplate.showDeleteFailureToast();
    } finally {
      this.productTemplate.toggleDeleteModal();
    }
  };

  /**
   * Handles the search of products by keyword.
   * @param {Object} searchCriteria - The search criteria object containing the search keyword.
   * @returns {Promise<Object[]>} - A promise that resolves to an array of matched products.
   */
  handlerSearchProduct = async (searchCriteria) => {
    const { name } = searchCriteria;
    const products = await this.productService.searchByName(name);

    return products;
  };

  /**
   * Handle sorting of products
   * @param {Object} params - The sorting parameters
   */
  handlerSortProducts = async (params = {}) => {
    await this.renderProducts(params);
  };
}
