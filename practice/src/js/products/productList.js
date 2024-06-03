export default class ProductList {
  constructor(service, template) {
    this.productService = service;
    this.productTemplate = template;
  }

  async init() {
    await this.renderProducts();

    this.bindDeleteProductEvent();
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
   * Binds the click event to handle product deletion.
   * When a delete icon is clicked, it displays a delete modal,
   * deletes the corresponding product, and shows success/failure messages.
   */
  bindDeleteProductEvent() {
    document.addEventListener('click', async (event) => {
      const deleteIcon = event.target.closest('[data-product-id]');

      if (deleteIcon) {
        const productId = deleteIcon.dataset.productId;

        try {
          this.productTemplate.showDeleteModal(async () => {
            const response = await this.productService.delete(productId);

            if (response.isSuccess) {
              this.productTemplate.showDeleteSuccessToast();
              await this.renderProducts(); // await for the rendering after deletion
            } else {
              this.productTemplate.showDeleteFailureToast();
            }
          });
        } catch (error) {
          console.error(error);
          this.productTemplate.showDeleteFailureToast();
        }
      }
    });
  }
}
