import { ACTION } from '../constants/action';

const currentURL = window.location.pathname;
let action;

if (currentURL.includes('editProduct.html')) {
  action = ACTION.EDIT;
} else if (currentURL.includes('addProduct.html')) {
  action = ACTION.ADD;
}

export default action;
