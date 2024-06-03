import ProductService from '../services/productService';
import { validateProductForm } from '../helpers/validateForm';
import { hasValidationErrors } from '../helpers/validateForm';

export default class ProductFormHandler {
  constructor() {
    this.productService = new ProductService();
  }

  /**
   * Initializes the product form by adding a submit event listener.
   * When the form is submitted, it prevents the default form submission behavior,
   * retrieves input values, validates the form, and adds the product using ProductService.
   * If there are any validation errors, they are handled appropriately.
   */
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

      const validationResult = validateProductForm({
        Name: name,
        Price: price,
        ImageURL: imageURL,
        Quantity: quantity,
      });

      // Check if there are any validation errors
      if (hasValidationErrors(validationResult.formError)) {
        return;
      }

      // Call the ProductService to add the product
      await this.productService.add({ name, price, imageURL, quantity });
    });
  }
}
