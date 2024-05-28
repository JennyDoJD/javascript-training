import iconAction from '../../assets/images/icons/icons.svg';

/**
 * View template for rendering product cards
 */
export default class ProductListView {
  /**
   * Clear the main container
   */
  static clearMainContainer() {
    const mainContent = document.getElementById('product-list');
    mainContent.innerHTML = '';
  }

  /**
   * Render products
   */
  static renderProducts(products) {
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
   */
  static createProductCard(product) {
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
