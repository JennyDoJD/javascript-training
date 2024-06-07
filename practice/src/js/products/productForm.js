import ProductService from '../services/productService';
import {
  validateProductForm,
  hasValidationErrors,
  productValidationSchema,
} from '../helpers/validateForm';

export default class ProductForm {
  constructor() {
    this.productService = new ProductService();
  }

  /**
   * Calls displaying product form add
   */
  async init() {
    await this.displayProductAddForm();
  }

  /**
   * Displays the product add form and sets up event listeners for form submission and input changes.
   */
  displayProductAddForm() {
    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = this.getFormValues();
      const validationResult = validateProductForm(
        formData,
        productValidationSchema
      );

      this.displayValidationErrors(validationResult.formError);

      // Check if there are any validation errors
      if (hasValidationErrors(validationResult.formError)) {
        return;
      }

      // Call the ProductService to add the product
      await this.productService.add(formData);
    });

    productForm.addEventListener('input', (event) => {
      const { id, value } = event.target;
      this.clearValidationError(id);
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

  /**
   * Displays validation errors next to the corresponding form fields.
   * @param {Object} errors - Object containing validation errors.
   */
  displayValidationErrors(errors) {
    for (const key in errors) {
      const errorMessage = errors[key];
      const errorElement = document.getElementById(
        `${key.toLowerCase()}-error`
      );
      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    }
  }

  /**
   * Clears validation error message for a specific input field.
   * @param {string} id - The ID of the input field.
   */
  clearValidationError(id) {
    const errorElement = document.getElementById(`${id}-error`);
    if (errorElement) {
      errorElement.textContent = '';
    }
  }
}
