import { fetchProducts } from '../services/productService';
import { ProductCard } from '../templates/product';

// Function to render products on the page
async function productList() {
  const products = await fetchProducts();
  const productListContainer = document.getElementById('product-list');
  if (productListContainer) {
    productListContainer.innerHTML = products.map(ProductCard).join('');
  }
}

// Call productList to display products on page load
productList();
