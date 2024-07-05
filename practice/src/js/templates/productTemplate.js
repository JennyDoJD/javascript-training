import iconAction from '../../assets/images/icons/icons.svg';
import renderFormInputTemplate from '../templates/formInputTemplate';
import debounce from '../helpers/debounce';
import { MESSAGES } from '../constants/message';
import defaultImage from '../../assets/images/default.png';

export default class ProductTemplate {
  /**
   * Displays product list of products on the view.
   * @param {Object[]} products - An array of product objects to be displayed.
   */
  renderProducts(products) {
    const mainContent = document.getElementById('product-list');

    if (!Array.isArray(products)) {
      mainContent.innerHTML = `<span class="main-title">${MESSAGES.NOT_FOUND}</span>`;

      return;
    }

    let productListHTML = '<div class="card-product-list">';
    products.forEach((product) => {
      productListHTML += this.renderProductCard(product);
    });
    productListHTML += '</div>';

    mainContent.innerHTML = productListHTML;
  }

  /**
   * Create HTML markup for a product card.
   * @param {Object} product - The product object containing id, name, price, imageURL, and quantity.
   * @returns {string} - The HTML markup for the product card.
   */
  renderProductCard(product) {
    const { id, name, price, imageURL, quantity } = product;

    return `
    <div class="card card-product" data-id="${id}">
      <div class="card-header">
        <div class="delete-product-icon" data-product-id="${id}">
          <svg width="15" height="15">
            <use xlink:href="${iconAction}#delete-icon" />
          </svg>
        </div>
      </div>
      <div>
        <figure class="card-image">
          <img src="${imageURL}" alt="food-image" class="card-item" onerror="this.onerror=null; this.src='${defaultImage}'" />
        </figure>
        <div class="card-text">
          <p class="tertiary-title card-name" title="${name}">${name}</p>
          <div class="main-desc card-desc">
            <span>$ ${price}</span>
            <span class="circle">&#8729;</span>
            <span>${quantity} Bowls</span>
          </div>
        </div>
      </div>
      <div>
        <a href="product.html?id=${id}" class="btn btn-edit">
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
   * Renders a form for creating a product.
   */
  renderProductFormPage(data = {}) {
    const { id, name = '', price = '', imageURL = '', quantity = '' } = data;
    const formInputs = [
      { field: 'Name', value: name, id: 'name' },
      { field: 'Price', value: price, id: 'price', type: 'number' },
      { field: 'Image URL', value: imageURL, id: 'image-url' },
      { field: 'Quantity', value: quantity, id: 'quantity', type: 'number' },
    ];

    const headingPage =
      Object.keys(data).length === 0
        ? MESSAGES.ADD_PRODUCT_HEADING
        : MESSAGES.EDIT_PRODUCT_HEADING;

    const formContent = document.getElementById('form-content');

    formContent.innerHTML = `
      <div class="form-wrapper">
        <h2 class="main-title form-heading">${headingPage}</h2>
        <form data-product-id="${id}" id="product-form" action="javascript:void(0)" class="form-control">
          ${renderFormInputTemplate(formInputs)}
          <div class="form-button">
            <a href="/" class="btn btn-primary btn-confirm" >
              Cancel
            </a>
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
   * Creates and appends a delete confirmation modal to the DOM
   */
  renderDeleteModal() {
    const deleteModal = document.createElement('div');

    deleteModal.id = 'delete-product-modal';
    deleteModal.className = 'delete-modal hidden';
    deleteModal.innerHTML = `
      <div class="delete-modal-content">
        <p class="delete-modal-text">Are you sure you want to delete this product?</p>
        <div class="delete-modal-button">
          <button class="btn btn-primary btn-confirm" type="button" id="cancel-btn-delete">Cancel</button>
          <button class="btn btn-secondary btn-confirm" type="button" id="confirm-btn-delete">Yes</button>
        </div>
      </div>
    `;

    document.body.appendChild(deleteModal);
  }

  /**
   * Show the delete product modal and set the dataset for confirmation.
   * @param {string} productId - The ID of the product to be deleted.
   */
  toggleDeleteModal = (productId) => {
    const deleteModal = document.getElementById('delete-product-modal');

    if (!deleteModal) {
      this.renderDeleteModal();
    }

    deleteModal.classList.toggle('hidden');

    const confirmBtn = document.getElementById('confirm-btn-delete');

    if (confirmBtn) {
      confirmBtn.dataset.productId = productId;
    }
  };

  /**
   * Binds event listener to toggle the delete product modal when clicking on delete product icons.
   */
  bindToggleModal = () => {
    const productList = document.querySelector('#product-list');

    productList.addEventListener('click', (event) => {
      const deleteIcon = event.target.closest('.delete-product-icon');

      if (deleteIcon) {
        const id = deleteIcon.dataset.productId;
        this.toggleDeleteModal(id);
      }
    });
  };

  /**
   * Bind events for delete modal confirmation and cancellation.
   * @param {Function} handleConfirmDelete - Callback function to handle delete confirmation.
   */
  bindDeleteModalEvents = (handleConfirmDelete) => {
    document.addEventListener('click', async (event) => {
      const confirmBtn = event.target.closest('#confirm-btn-delete');

      if (confirmBtn) {
        const id = confirmBtn.dataset.productId;

        await handleConfirmDelete(id);
      }

      const cancelBtn = event.target.closest('#cancel-btn-delete');

      if (cancelBtn) {
        this.toggleDeleteModal();
      }
    });
  };

  /**
   * Binds the search input to the search handler function and render the results.
   * @param {Function} handlerSearchProduct - The handler function to fetch and return search results.
   */
  bindSearchProduct = (handlerSearchProduct) => {
    const searchInput = document.getElementById('input-search');

    if (!searchInput) {
      return;
    }

    searchInput.addEventListener(
      'input',
      debounce(async (e) => {
        const name = e.target.value.trim();
        await handlerSearchProduct({ name });
      }, 300)
    );
  };

  /**
   * Binds the event for sorting products.
   * @param {Function} handlerSort - The callback function to handle sorting.
   */
  bindSortProducts = (handlerSort) => {
    const sortDropdown = document.querySelector('.sort-list');

    if (sortDropdown) {
      sortDropdown.addEventListener('change', (e) => {
        const selectedOption = e.target.selectedOptions[0];

        if (selectedOption) {
          const sortBy = selectedOption.getAttribute('data-sort-by');
          const order = selectedOption.getAttribute('data-order');

          handlerSort({ sortBy, order });
        }
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
}
