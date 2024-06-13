import {
  validateForm,
  validateString,
  validateInteger,
  validateImage,
  validateFloat,
  validateLength,
  validatePositive,
} from '../helpers/validateForm';

export default class ProductForm {
  constructor(service, template) {
    this.productService = service;
    this.productTemplate = template;
  }

  /**
   * Calls displaying product add form
   */
  async init() {
    await this.displayProductForm();
    this.bindProductForm;
  }

  async displayProductForm(data = {}) {
    this.productTemplate.renderProductFormPage(data);
  }

  bindProductForm() {
    const formElement = document.getElementById('product-form');

    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

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

      const { formError } = validateForm(validationSchema);

      this.displayValidationErrors(formError);

      const isPassed = !hasValidationErrors(formError);
      if (!isPassed) {
        return;
      }

      this.displayProductForm();
    });
  }
}
