import { API } from '../constants/apiUrl';

// Function to fetch products from the API
export async function fetchProducts() {
  try {
    const response = await fetch(`${API.BASE_URL}/${API.PRODUCTS_ENDPOINT}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
