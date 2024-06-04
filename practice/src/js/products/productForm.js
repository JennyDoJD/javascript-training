import ProductService from '../services/productService';
import { validateProductForm } from '../helpers/validateForm';
import { hasValidationErrors } from '../helpers/validateForm';

export default class ProductForm {
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

      const formData = this.getFormValues();

      const validationResult = validateProductForm(formData);

      // Check if there are any validation errors
      if (hasValidationErrors(validationResult.formError)) {
        return;
      }

      // Call the ProductService to add the product
      await this.productService.add(formData);
    });
  }

  /**
   * Retrieves input values from the product form inputs.
   * @returns {Object} - Object containing input values.
   */
  getFormValues() {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const imageURLInput = document.getElementById('image-url');
    const quantityInput = document.getElementById('quantity');

    const name = nameInput.value;
    const price = parseFloat(priceInput.value);
    const imageURL = imageURLInput.value;
    const quantity = parseInt(quantityInput.value);

    return {
      name,
      price,
      imageURL,
      quantity,
    };
  }
}