import ProductService from '../services/productService';
import { validateForm } from '../helpers/validateForm';

export default class ProductFormHandler {
  constructor() {
    this.productService = new ProductService();
  }

  init() {
    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('name');
      const priceInput = document.getElementById('price');
      const imageURLInput = document.getElementById('image-url');
      const quantityInput = document.getElementById('quantity');

      const name = nameInput.value;
      const price = parseFloat(priceInput.value);
      const imageURL = imageURLInput.value;
      const quantity = parseInt(quantityInput.value);

      const validationResult = validateForm({
        Name: name,
        Price: price,
        ImageURL: imageURL,
        Quantity: quantity,
      });

      if (
        Object.values(validationResult.formError).some((error) => error !== '')
      ) {
        // Handle displaying errors to the user
        return;
      }

      try {
        // Call the ProductService to add the product
        await this.productService.add({ name, price, imageURL, quantity });
      } catch (error) {
        console.error('An error occurred while adding the product:', error);
      }
    });
  }
}
