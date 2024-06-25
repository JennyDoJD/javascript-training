import iconAction from '../../assets/images/icons/icons.svg';
import renderFormInputTemplate from '../templates/formInputTemplate';
import debounce from '../helpers/debounce';
import { MESSAGES } from '../constants/message';

export default class ProductTemplate {
  constructor() {
    this.deleteModal = document.getElementById('delete-product-modal');
  }

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
      productListHTML += this.createProductCard(product);
    });
    productListHTML += '</div>';

    mainContent.innerHTML = productListHTML;
  }

  /**
   * Create HTML markup for a product card.
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
          <p class="tertiary-title card-name" title="${name}">${name}</p>
          <div class="main-desc card-desc">
            <span>$ ${price}</span>
            <span class="circle">&#8729;</span>
            <span>${quantity} Bowls</span>
          </div>
        </div>
      </div>
      <div>
        <a href="productForm.html?id=${id}" class="btn btn-edit">
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
      { field: 'Price', value: price, id: 'price' },
      { field: 'Image URL', value: imageURL, id: 'image-url' },
      { field: 'Quantity', value: quantity, id: 'quantity' },
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
   * Binds the search input to the search handler function and render the results.
   * @param {Function} handlerSearchProduct - The handler function to fetch and return search results.
   */
  bindSearchProduct = (handlerSearchProduct) => {
    const searchInput = document.getElementById('input-search');

    if (!searchInput) {
      return;
    }

    searchInput.addEventListener(
      'keyup',
      debounce(async (e) => {
        const name = e.target.value;
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
