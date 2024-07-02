import { ACTIONS } from '../constants/actionType';

/**
 * Determines the action to be taken based on the URL parameters.
 * @returns {string} - Returns the appropriate action type, either ACTIONS.EDIT or ACTIONS.ADD.
 */
function getActionFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  document.title = productId ? 'Edit product' : 'Create a new product';
  return productId ? ACTIONS.EDIT : ACTIONS.ADD;
}

export default getActionFromUrl;
