import {
  validateForm,
  validateString,
  validateInteger,
  validateImage,
  validateFloat,
  validateLength,
  validatePositive,
  displayValidationErrors,
  hasValidationErrors,
} from '../helpers/validateForm';
import Toast from '../helpers/toastify';
import { ACTION } from '../constants/actionType';
import { MESSAGES } from '../constants/message';
import { URLS } from '../constants/url';

export default class ProductForm {
  constructor(service, template, action) {
    this.productService = service;
    this.productTemplate = template;
    this.action = action;
  }

  /**
   * Calls displaying product add form.
   */
  async init() {
    this.displayProductForm();
  }

  /**
   * Displays the product form page.
   * @returns {void}
   */
  async displayProductForm() {
    let data = {};

    if (this.action === ACTION.EDIT) {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');

      data = await this.productService.getByID(productId);
    }

    this.productTemplate.renderProductFormPage(data);

    this.bindProductForm();
  }

  /**
   * Binds the event listener to the product form.
   */
  bindProductForm() {
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

        this.productTemplate.redirectPage(URLS.HOME);
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

        this.productTemplate.redirectPage(URLS.HOME);
      }

      this.displayProductForm();
    });
  }

  /**
   * Retrieves form data from input fields and constructs a validation schema.
   * @returns {Object} - Object containing validation schema for form fields.
   */
  getFormData() {
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
        validators: [validateFloat, validatePositive],
      },
      imageURL: {
        field: 'Image URL',
        value: imageURLValue,
        validators: [validateImage],
      },
      quantity: {
        field: 'Quantity',
        value: quantityValue,
        validators: [validateInteger, validatePositive],
      },
    };

    const product = {
      name: nameValue,
      price: priceValue,
      imageURL: imageURLValue,
      quantity: quantityValue,
    };

    return { validationSchema, product };
  }
}
