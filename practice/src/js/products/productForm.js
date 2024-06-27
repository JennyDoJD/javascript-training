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
import { ACTION } from '../constants/actionType';
import { MESSAGES } from '../constants/message';
import ProductService from '../services/productService';
import ProductTemplate from '../templates/productTemplate';

export default class ProductForm {
  constructor(action) {
    this.productService = new ProductService();
    this.productTemplate = new ProductTemplate();
    this.action = action;
  }

  /**
   * Calls displaying product add form.
   */
  init = async () => {
    this.displayProductForm();
  };

  /**
   * Displays the product form page.
   * @returns {void}
   */
  displayProductForm = async () => {
    let data = {};

    if (this.action === ACTION.EDIT) {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');

      if (productId) {
        data = await this.productService.getByID(productId);
      }
    }

    this.productTemplate.renderProductFormPage(data);

    this.bindProductForm();
  };

  /**
   * Binds the event listener to the product form.
   */
  bindProductForm = () => {
    const formElement = document.getElementById('form-content');

    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = this.getFormData();

      const { formError } = validateForm(formData.validationSchema);

      displayValidationErrors(formError);

      const hasFormValid = !hasValidationErrors(formError);

      if (!hasFormValid) {
        return;
      }

      const product = formData.product;

      if (this.action === ACTION.ADD) {
        const { isSuccess } = await this.productService.add(product);

        if (!isSuccess) {
          return Toast.error(MESSAGES.ADD_PRODUCT_FAILED_MSG);
        }

        Toast.success(MESSAGES.ADD_PRODUCT_SUCCESS_MSG);

        this.clearFormFields();
      } else if (this.action === ACTION.EDIT) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        const { isSuccess } = await this.productService.edit(
          productId,
          product
        );

        if (!isSuccess) {
          return Toast.error(MESSAGES.EDIT_PRODUCT_FAILED_MSG);
        }

        Toast.success(MESSAGES.EDIT_PRODUCT_SUCCESS_MSG);
      }
    });
  };

  /**
   * Retrieves form data from input fields and constructs a validation schema.
   * @returns {Object} - Object containing validation schema for form fields.
   */
  getFormData = () => {
    const nameValue = document.getElementById('name').value;
    const priceValue = document.getElementById('price').value;
    const imageURLValue = document.getElementById('image-url').value;
    const quantityValue = document.getElementById('quantity').value;

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
    const inputs = document.querySelectorAll('.input-form');

    inputs.forEach((input) => (input.value = ''));
  };
}
