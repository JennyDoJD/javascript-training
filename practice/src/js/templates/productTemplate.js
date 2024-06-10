import iconAction from '../../assets/images/icons/icons.svg';
import renderFormInputTemplate from './productFormInputTemplate';
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
      this.toggleDeleteModal(product.id);
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

  /**
   * Renders a form for creating a product
   */
  renderProductFormPage(data = {}) {
    this.clearMainContainer();

    const { id, name = '', price = '', imageURL = '', quantity = '' } = data;
    const formInputs = [
      { field: 'Name', value: name, id: 'name' },
      { field: 'Price', value: price, id: 'price' },
      { field: 'Image URL', value: imageURL, id: 'image-url' },
      { field: 'Quantity', value: quantity, id: 'quantity' },
    ];

    const mainContent = document.getElementById('form-content');

    mainContent.innerHTML = `
      <div class="form-wrapper">
        <h2 class="main-heading">Create new a product</h2>
        <form data-product-id="${id}" id="product-form" action="javascript:void(0)" class="form-control">
          ${renderFormInputTemplate(formInputs)}
          <div class="form-button">
            <button class="btn btn-primary btn-confirm" type="reset">
              Cancel
            </button>
            <button
              class="btn btn-secondary btn-confirm"
              type="submit"
              id="button-submit">
              Save
            </button>
          </div>
        </form>
      </div>
    `;
  }

  /**
   *  Show the delete product modal and set the dataset for confirmation.
   * @param {string} productId - The ID of the product to be deleted.
   */
  toggleDeleteModal = (productId) => {
    const deleteModal = document.getElementById('delete-product-modal');
    deleteModal.classList.toggle('hidden');

    const confirmBtn = document.getElementById('confirm-btn-delete');
    confirmBtn.dataset.productId = productId;
  };

  /**
   * Bind events for delete modal confirmation and cancellation.
   * @param {Function} handleConfirmDelete - Callback function to handle delete confirmation.
   */
  bindDeleteModalEvents = (handleConfirmDelete) => {
    const confirmBtn = document.getElementById('confirm-btn-delete');
    const cancelBtn = document.getElementById('cancel-btn-delete');

    confirmBtn.addEventListener('click', async () => {
      const id = confirmBtn.dataset.productId;
      await handleConfirmDelete(id);
    });

    cancelBtn.addEventListener('click', () => {
      this.toggleDeleteModal();
    });
  };

  /**
   * Binds event listener to toggle the delete product modal when clicking on delete product icons.
   */
  bindToggleModal = () => {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('delete-product-icon')) {
        const id = target.parentElement.parentElement.dataset.id;

        this.toggleDeleteModal(id);
      }
    });
  };

  /**
   * Display a toast notification for successful deletion
   */
  showDeleteSuccessToast() {
    Toast.success(MESSAGES.DELETE_PRODUCT_SUCCESS_MSG);
  }

  /**
   * Display a toast notification for deletion failure
   */
  showDeleteFailureToast() {
    Toast.error(MESSAGES.DELETE_PRODUCT_FAILED_MSG);
  }

  /**
   * Binds the event for sorting products.
   * @param {Function} handleSort - The callback function to handle sorting.
   */
  bindSortProducts = (handleSort) => {
    const sortDropdown = document.querySelector('.sort-list');

    if (sortDropdown) {
      sortDropdown.addEventListener('change', (e) => {
        const sortOption = e.target.value;
        handleSort(sortOption);
      });
    }
  };

  /**
   * Show the loading indicator.
   * @param {boolean} isHidden - A flag indicating whether the indicator should be hidden.
   */
  toggleIndicator(isHidden) {
    const indicatorElement = document.querySelector('.indicator');

    indicatorElement.classList.toggle('hidden', !isHidden);
  }

  /**
   * Display a toast notification for failed when to load products
   */
  showLoadFailureToast() {
    Toast.error(MESSAGES.GET_PRODUCT_FAILED_MSG);
  }
}
