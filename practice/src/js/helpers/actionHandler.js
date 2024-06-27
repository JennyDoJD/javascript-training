import { ACTION } from '../constants/actionType';

function getActionFromUrl() {
  let action;
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    action = ACTION.EDIT;
    document.title = 'Edit Product';
  } else {
    action = ACTION.ADD;
    document.title = 'Create a new product';
  }

  return action;
}

export default getActionFromUrl;
