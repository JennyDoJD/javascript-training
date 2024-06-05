import iconAction from '../../assets/images/icons/icons.svg';
import Toast from '../helpers/toastify';
import { MESSAGES } from '../constants/message';

export default class ProductTemplate {
  constructor() {
    this.deleteModal = document.getElementById('delete-product-modal');
  }
  /**
   * Clears the main content container on the page
   * Effectively removing all of its child elements
   */
  clearMainContainer() {
    const mainContent = document.getElementById('product-list');
    mainContent.innerHTML = '';
  }

  /**
   * Displays product list of products on the view
   * @param {Object[]} products - An array of product objects to be displayed
   */
  renderProducts(products) {
    this.clearMainContainer();

    const mainContent = document.getElementById('product-list');

    if (!Array.isArray(products)) {
      throw new Error('Invalid data received from API');
    }

    if (!products.length) {
      mainContent.innerHTML = `<h2 class="main-title">No Result</h2>`;
      return;
    }

    let productListHTML = '<div class="card-product-list">';
    products.forEach((product) => {
      productListHTML += this.createProductCard(product);
    });
    productListHTML += '</div>';

    mainContent.innerHTML = productListHTML;
  }

  /**
   * Create HTML markup for a product card
   * @param {Object} product - The product object containing id, name, price, imageURL, and quantity.
   * @returns {string} - The HTML markup for the product card.
   */
  createProductCard(product) {
    const { id, name, price, imageURL, quantity } = product;

    const deleteIcon = document.createElement('svg');
    deleteIcon.dataset.productId = product.id;

    deleteIcon.addEventListener('click', () => {
      this.showDeleteModal(product.id);
    });

    return `
    <div class="card card-product" data-id="${id}">
      <div class="card-header">
      <svg width="15" height="15" data-product-id="${id}" class="delete-product-icon">
        <use xlink:href="${iconAction}#delete-icon" />
      </svg>
      </div>
      <div>
        <figure class="card-image">
          <img src="${imageURL}" alt="food-image" class="card-item" />
        </figure>
        <div class="card-text">
          <p class="tertiary-title card-name">${name}</p>
          <div class="main-desc card-desc">
            <span>$ ${price}</span>
            <span class="circle">&#8729;</span>
            <span>${quantity} Bowls</span>
          </div>
        </div>
      </div>
      <div>
        <a href="javascript:void(0)" class="btn btn-edit">
          <svg width="20" height="20">
            <use xlink:href="${iconAction}#edit-icon" />
          </svg>
          Edit dish
        </a>
      </div>
    </div>
  `;
  }

  // Show the delete product modal and set the dataset for confirmation
  showDeleteModal = (productId) => {
    const deleteModal = document.getElementById('delete-product-modal');
    deleteModal.classList.toggle('hidden');

    const confirmBtn = document.getElementById('confirm-btn-delete');
    confirmBtn.dataset.productId = productId;
  };

  // Bind events for delete modal confirmation and cancellation
  bindDeleteModalEvents = (handleConfirmDelete) => {
    const confirmBtn = document.getElementById('confirm-btn-delete');
    const cancelBtn = document.getElementById('cancel-btn-delete');

    confirmBtn.addEventListener('click', async () => {
      const id = confirmBtn.dataset.productId;

      await handleConfirmDelete(id);
    });

    cancelBtn.addEventListener('click', () => {
      this.showDeleteModal();
    });
  };

  // Bind event for toggling the modal
  bindToggleModal = () => {
    document.addEventListener('click', (e) => {
      const target = e.target;
      const id = target.getAttribute('data-id');

      if (target.classList.contains('delete-product-icon')) {
        this.showDeleteModal(id);
      }
    });
  };

  // Display a toast notification for successful deletion
  showDeleteSuccessToast() {
    Toast.success(MESSAGES.DELETE_PRODUCT_SUCCESS_MSG);
  }

  // Display a toast notification for deletion failure
  showDeleteFailureToast() {
    Toast.error(MESSAGES.DELETE_PRODUCT_FAILED_MSG);
  }
}
