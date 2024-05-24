import iconAction from '../../assets/images/icons/icons.svg';

// Arrow function to render product cards
export const ProductCard = (product) => `
  <div class="card card-product">
    <div class="card-header">
      <svg width="15" height="15">
        <use xlink:href="${iconAction}#delete-icon" />
      </svg>
    </div>
    <div>
      <figure class="card-image">
        <img src="${product.imageURL}" alt="food-image" class="card-item" />
      </figure>
      <div class="card-text">
        <p class="tertiary-title card-name">${product.name}</p>
        <div class="main-desc card-desc">
          <span>$ ${product.price}</span>
          <span class="circle">&#8729;</span>
          <span>${product.quantity} Bowls</span>
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
