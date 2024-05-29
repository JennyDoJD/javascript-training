import iconAction from '../../assets/images/icons/icons.svg';

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

    if (products.length === 0) {
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
}
