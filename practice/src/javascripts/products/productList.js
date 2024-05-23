import iconAction from '../../assets/images/icons/icons.svg';

export const displayProduct = (products) => {
  let contentProduct = '';
  if (products) {
    products.forEach((item) => {
      contentProduct += productTemplate(item);
    });
  } else {
    contentProduct = '';
  }
  return contentProduct;
};

export const productList = (product) => {
  const { id, imageURL, name, price, quantity } = product;
  return `
    <div class="card-header" data-productId="${product.id}">
      <svg width="15" height="15">
        <use xlink:href="${iconAction}#delete-icon" />
      </svg>
    </div>
    <div>
      <figure class="card-image">
        <img src="${product.imageURL}" alt="food" class="card-item" />
      </figure>
      <div class="card-text">
        <p class="tertiary-title card-name">${product.name}</p>
        <div class="main-desc card-desc">
          <span>$${product.price}</span>
          <span class="circle">&#8729;</span>
          <span>${product.quantity} Bowls</span>
        </div>
      </div>
    </div>
    <div>
      <a href="javascript:void(0)" class="btn btn-edit" />
        <svg width="20" height="20">
          <use xlink:href="${iconAction}#edit-icon" />
        </svg>
        Edit dish
      </a>
    </div>
    `;
};
