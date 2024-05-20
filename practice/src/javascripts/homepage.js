import iconEdit from '../assets/images/icons/edit.png';
import iconDelete from '../assets/images/icons/delete.png';

const apiUrl = 'https://663896844253a866a24e6014.mockapi.io/api/products';
const productList = document.querySelector('.homepage-main');

// Send a GET request to the API
fetch(apiUrl)
  .then((response) => {
    // Check if the request was successful
    if (response.ok) {
      // Returns JSON data
      return response.json();
    }
    // If there is an error, throw an exception
    throw new Error(`Failed to fetch data from ${apiUrl}`);
  })
  .then((data) => {
    // Processing JSON data
    data.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('card', 'card-product');

      productCard.innerHTML = `
        <div class="card-header">
          <img src="${iconDelete}" alt="delete icon" data-productId="${product.id}" />
        </div>
        <div>
          <figure class="card-image">
            <img src="${product.imageURL}" alt="food" class="card-item" />
          </figure>
          <div class="card-title">
            <p class="tertiary-title card-name">${product.name}</p>
            <div class="main-desc card-desc">
              <p>$${product.price}</p>
              <span class="circle">&#8729;</span>
              <p>${product.quantity} Bowls</p>
            </div>
          </div>
        </div>
        <div>
          <a href="javascript:void(0)" class="btn btn-edit" data-productId="${product.id}">
            <img src="${iconEdit}" alt="edit icon" />
            Edit dish
          </a>
        </div>
      `;
      productList.appendChild(productCard);
    });
  })
  .catch((error) => {
    // Error handling
    console.error(error);
  });
