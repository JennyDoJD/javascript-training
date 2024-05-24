import ProductList from './products/productList';

window.addEventListener('DOMContentLoaded', () => {
  const productList = new ProductList();
  productList.renderProducts();
});
