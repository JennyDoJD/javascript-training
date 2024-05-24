import { fetchProducts } from '../services/productService';
import { ProductCard } from '../templates/product';

/**
 * Create function to render products on the page
 * Call renderProductList to display products on page load
 */
async function renderProductList() {
  const products = await fetchProducts();
  const productListContainer = document.getElementById('product-list');
  if (productListContainer) {
    productListContainer.innerHTML = products.map(ProductCard).join('');
  }
}

renderProductList();
