import iconAction from '../../assets/images/icons/icons.svg';
import renderFormInputsHTML from './renderFormInputTemplate';

export default class ProductTemplate {
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

    return `
    <div class="card card-product">
      <div class="card-header">
        <svg width="15" height="15" data-productId=${id}>
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

  renderProductFormPage(data = {}) {
    this.clearMainContainer();

    const { id, name = '', price = '', imageURL = '', quantity = '' } = data;
    const formInputs = [
      { field: 'Name', value: name, id: 'name' },
      { field: 'Price', value: price, id: 'price' },
      { field: 'Image URL', value: imageURL, id: 'image-url' },
      { field: 'Quantity', value: quantity, id: 'quantity' },
    ];

    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
      <div class="form-wrapper">
        <h2 class="main-heading">Create new a product</h2>
        <form data-product-id="${id}" id="product-form" action="javascript:void(0)" class="form-control">
          ${renderFormInputsHTML(formInputs)}
          <div class="form-button">
            <button class="btn btn-primary btn-confirm" type="reset">
              Cancel
            </button>
            <button
              class="btn btn-secondary btn-confirm"
              type="submit"
              id="button-submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    `;
  }
}
