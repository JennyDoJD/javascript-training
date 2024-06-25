import { ACTION } from '../constants/actionType';

const currentURL = window.location.pathname;
let action;

if (currentURL.includes('productForm.html')) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    action = ACTION.EDIT;
    document.title = 'Edit Product';
  } else {
    action = ACTION.ADD;
    document.title = 'Create a new product';
  }
}

export default action;
