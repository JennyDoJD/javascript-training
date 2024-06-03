import ProductList from './products/productList';
import ProductTemplate from './templates/productTemplate';
import ProductService from './services/productService';
import { handleNavLinkClick } from './helpers/sidebarHandler';

// Render products using ProductList instance
const service = new ProductService();
const template = new ProductTemplate();
const productList = new ProductList(service, template);

productList.renderProducts();

// Add event listener to the nav-list to handle clicks on navigation links
document
  .querySelector('.nav-list')
  .addEventListener('click', handleNavLinkClick);

/**
 * Handle click event.
 * If the user clicks on the delete icon of a product, display a confirmation modal for deletion.
 * If confirmed, call the API to delete the product. If successful, display a success message and update the product list.
 * If unsuccessful, display an error message.
 * @param {Event} event - The click event
 */
document.addEventListener('click', async (event) => {
  const deleteIcon = event.target.closest('[data-product-id]');

  if (deleteIcon) {
    const productId = deleteIcon.dataset.productId;

    try {
      productList.productTemplate.showDeleteModal(async () => {
        const response = await productList.productService.delete(productId);

        if (response.isSuccess) {
          productList.productTemplate.showDeleteSuccessToast();

          productList.renderProducts();
        } else {
          productList.productTemplate.showDeleteFailureToast();
        }
      });
    } catch (error) {
      console.error(error);

      productList.productTemplate.showDeleteFailureToast();
    }
  }
});
