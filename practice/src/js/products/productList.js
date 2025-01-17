import { MESSAGES } from '../constants/message';
import Toast from '../helpers/toastify';

export default class ProductList {
  constructor(service, template) {
    this.productService = service;
    this.productTemplate = template;
    this.currentParams = {};
  }

  /**
   * Initializes the ProductList instance.
   * This method renders the products initially and binds event handlers.
   */
  init = async () => {
    await this.displayProducts();

    this.bindEventHandles();
  };

  /**
   * Fetch all products from the ProductService.
   * Render the products using the ProductTemplate component.
   */
  displayProducts = async (params = {}) => {
    this.productTemplate.toggleIndicator(true);
    this.currentParams = { ...this.currentParams, ...params };

    const products = await this.productService.getList(this.currentParams);

    if (products) {
      this.productTemplate.renderProducts(products);
    } else {
      this.productTemplate.renderProducts();

      Toast.error(MESSAGES.GET_PRODUCT_FAILED_MESSAGE);
    }

    this.productTemplate.toggleIndicator(false);
  };

  /**
   * Binds event handlers for managing product.
   */
  bindEventHandles = () => {
    this.productTemplate.bindToggleModal();
    this.productTemplate.bindDeleteModalEvents(this.handleConfirmDelete);
    this.productTemplate.bindSearchProduct(this.displayProducts);
    this.productTemplate.bindSortProducts(this.displayProducts);
  };

  /**
   * Handles the confirmation of product deletion.
   * This method attempts to delete a product by its ID, renders updated products,
   * and displays success or failure messages accordingly.
   * @param {string} id - The ID of the product to be deleted.
   */
  handleConfirmDelete = async (id) => {
    const success = await this.productService.deleteByID(id);

    if (success) {
      await this.displayProducts();

      Toast.success(MESSAGES.DELETE_PRODUCT_SUCCESS_MESSAGE);
    } else {
      Toast.error(MESSAGES.DELETE_PRODUCT_FAILED_MESSAGE);
    }

    this.productTemplate.toggleDeleteModal();
  };
}
