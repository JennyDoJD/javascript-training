import { ACTION } from '../constants/actionType';

/**
 * Determines the action to be taken based on the URL parameters.
 * @returns {string} - Returns the appropriate action type, either ACTION.EDIT or ACTION.ADD.
 */
function getActionFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  document.title = productId ? 'Edit product' : 'Create a new product';
  return productId ? ACTION.EDIT : ACTION.ADD;
}

export default getActionFromUrl;
