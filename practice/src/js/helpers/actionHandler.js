import { ACTION } from '../constants/actionType';

function getActionFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    document.title = 'Edit Product';
    return ACTION.EDIT;
  } else {
    document.title = 'Create a new product';
    return ACTION.ADD;
  }
}

export default getActionFromUrl;
