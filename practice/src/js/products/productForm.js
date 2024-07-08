import {
  validateForm,
  validateString,
  validateInteger,
  validateImage,
  validateFloat,
  validateLength,
  validatePositive,
  validateMaxValue,
  validateAlphaNumericCharacter,
  displayValidationErrors,
  hasValidationErrors,
} from '../helpers/validateForm';
import Toast from '../helpers/toastify';
import { ACTIONS } from '../constants/actionType';
import { MESSAGES } from '../constants/message';
import ProductService from '../services/product';
import ProductTemplate from '../templates/productTemplate';

export default class ProductForm {
  constructor(action) {
    this.productService = new ProductService();
    this.productTemplate = new ProductTemplate();
    this.action = action;
    this.displayProductForm();
  }

  /**
   * Displays the product form page.
   * @returns {void}
   */
  displayProductForm = async () => {
    this.productTemplate.toggleIndicator(true);

    let data = {};

    if (this.action === ACTIONS.EDIT) {
      const productId = new URLSearchParams(window.location.search).get('id');

      if (productId) {
        data = await this.productService.getByID(productId);
      }
    }

    this.productTemplate.renderProductFormPage(data);

    this.productTemplate.toggleIndicator(false);

    this.bindProductForm();
  };

  /**
   * Binds the event listener to the product form.
   */
  bindProductForm = () => {
    const formElement = document.getElementById('form-content');

    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

      this.productTemplate.toggleIndicator(true);

      const formData = this.getFormData();

      const { formError } = validateForm(formData.validationSchema);

      displayValidationErrors(formError);

      const hasFormValid = !hasValidationErrors(formError);

      if (!hasFormValid) {
        this.productTemplate.toggleIndicator(false);
        return;
      }

      const product = formData.product;

      let response;

      switch (this.action) {
        case ACTIONS.ADD: {
          response = await this.productService.add(product);

          if (response.isSuccess) {
            Toast.success(MESSAGES.ADD_PRODUCT_SUCCESS_MESSAGE);

            this.clearFormFields();
          } else {
            Toast.error(MESSAGES.ADD_PRODUCT_FAILED_MESSAGE);
          }

          this.productTemplate.toggleIndicator(false);

          break;
        }
        case ACTIONS.EDIT: {
          const productId = new URLSearchParams(window.location.search).get(
            'id'
          );

          response = await this.productService.edit(productId, product);

          if (response.isSuccess) {
            Toast.success(MESSAGES.EDIT_PRODUCT_SUCCESS_MESSAGE);
          } else {
            Toast.error(MESSAGES.EDIT_PRODUCT_FAILED_MESSAGE);
          }

          this.productTemplate.toggleIndicator(false);

          break;
        }
      }
    });
  };

  /**
   * Retrieves form data from input fields and constructs a validation schema.
   * @returns {Object} - Object containing validation schema for form fields.
   */
  getFormData = () => {
    const productForm = document.getElementById('product-form');
    const nameValue = productForm.querySelector('#name').value;
    const priceValue = productForm.querySelector('#price').value;
    const imageURLValue = productForm.querySelector('#image-url').value;
    const quantityValue = productForm.querySelector('#quantity').value;

    const validationSchema = {
      name: {
        field: 'Name',
        value: nameValue,
        validators: [
          (value) => validateLength({ key: 'Name', value, min: 2, max: 50 }),
          validateString,
          validateAlphaNumericCharacter,
        ],
      },
      price: {
        field: 'Price',
        value: priceValue,
        validators: [
          (value) => validateMaxValue({ key: 'Price', value, max: 50 }),
          validateFloat,
          validatePositive,
        ],
      },
      imageURL: {
        field: 'Image URL',
        value: imageURLValue,
        validators: [validateImage],
      },
      quantity: {
        field: 'Quantity',
        value: quantityValue,
        validators: [
          (value) => validateMaxValue({ key: 'Quantity', value, max: 10000 }),
          validateInteger,
          validatePositive,
        ],
      },
    };

    const product = {
      name: nameValue,
      price: priceValue,
      imageURL: imageURLValue,
      quantity: quantityValue,
    };

    return { validationSchema, product };
  };

  /**
   * Clears all input fields in the form.
   */
  clearFormFields = () => {
    const productForm = document.getElementById('product-form');
    const inputs = productForm.querySelectorAll('.input-form');

    inputs.forEach((input) => (input.value = ''));
  };
}
