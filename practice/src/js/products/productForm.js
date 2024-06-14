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
import ACTION from '../constants/action';

export default class ProductForm {
  constructor(service, template, action) {
    this.productService = service;
    this.productTemplate = template;
    this.action = action;
  }

  /**
   * Calls displaying product add form
   */
  async init() {
    await this.displayProductForm();
  }

  async displayProductForm() {
    let data = {};
    this.productTemplate.renderProductFormPage(data);
    this.bindProductForm();
  }

  /**
   * Binds the event listener to the product form.
   */
  bindProductForm() {
    const formElement = document.getElementById('product-form');
    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = this.getFormData();

      const { formError } = validateForm(formData.validationSchema);

      displayValidationErrors(formError);

      const isPassed = !hasValidationErrors(formError);

      if (!isPassed) {
        return;
      }

      const product = formData.product;

      switch (this.action) {
        case ACTION.ADD:
          await this.addProduct(product);
          break;
        case ACTION.EDIT:
          await this.editProduct(product);
          break;
      }
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
        validators: [validateString, validateLength],
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

  /**
   * Asynchronously adds a product.
   * @param {Object} product - The product information to add.
   */
  async addProduct(product) {
    try {
      const response = await this.productService.add(product);

      if (response.isSuccess) {
        Toast.success(MESSAGES.ADD_PRODUCT_SUCCESS_MSG);

        this.productTemplate.redirectPage(URLS.HOME);
      } else {
        Toast.error(MESSAGES.ADD_PRODUCT_FAILED_MSG);
      }
    } catch (error) {
      Toast.error(MESSAGES.ADD_PRODUCT_FAILED_MSG);
    }
  }
}
