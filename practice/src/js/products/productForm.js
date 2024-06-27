import {
  validateForm,
  validateString,
  validateInteger,
  validateImage,
  validateFloat,
  validateLength,
  validatePositive,
  validateMaxValue,
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
    this.productTemplate.toggleIndicator(true);

    let data = {};

    if (this.action === ACTION.EDIT) {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');

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

      try {
        let response;

        if (this.action === ACTION.ADD) {
          response = await this.productService.add(product);
        } else if (this.action === ACTION.EDIT) {
          const urlParams = new URLSearchParams(window.location.search);
          const productId = urlParams.get('id');

          response = await this.productService.edit(productId, product);
        }

        if (response.isSuccess) {
          Toast.success(
            this.action === ACTION.ADD
              ? MESSAGES.ADD_PRODUCT_SUCCESS_MSG
              : MESSAGES.EDIT_PRODUCT_SUCCESS_MSG
          );

          if (this.action === ACTION.ADD) {
            this.clearFormFields();
          }
        } else {
          Toast.error(
            this.action === ACTION.ADD
              ? MESSAGES.ADD_PRODUCT_FAILED_MSG
              : MESSAGES.EDIT_PRODUCT_FAILED_MSG
          );
        }
      } catch (error) {
        Toast.error(MESSAGES.GENERAL_ERROR_MSG);
      } finally {
        this.productTemplate.toggleIndicator(false);
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
          validateString,
          (value) => validateLength({ key: 'Name', value, min: 2, max: 50 }),
        ],
      },
      price: {
        field: 'Price',
        value: priceValue,
        validators: [
          validateFloat,
          validatePositive,
          (value) => validateMaxValue({ key: 'Price', value, max: 50 }),
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
          validateInteger,
          validatePositive,
          (value) => validateMaxValue({ key: 'Quantity', value, max: 10000 }),
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
