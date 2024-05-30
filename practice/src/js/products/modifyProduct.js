import { validateForm } from '../helpers/validateForm';
import {
  validateString,
  validateInteger,
  validateImage,
  validateFloat,
  validateLength,
  validatePositive,
  validateForm,
} from '../helpers/validateForm';
import { MESSAGES } from '../constants/message';

class ProductFormValidation {
  constructor(template, service, action) {
    this.template = template;
    this.service = service;
    this.action = action;
  }

  async displayProductFormPage
  /**
   * Binds event to handle product addition
   */
  bindProductFormEvent() {
    const {
      ADD_PRODUCT_FAILED_MSG,
      ADD_PRODUCT_SUCCESS_MSG,
      EDIT_PRODUCT_FAILED_MSG,
      EDIT_PRODUCT_SUCCESS_MSG,
    } = MESSAGES;
    const submitBtnElement = getElementById('btn-confirm');

    // Bind the click event to the 'Add Product' button
    addEventListener(submitBtnElement, 'click', async (event) => {
      event.preventDefault();

      // Get the values from the form inputs
      const nameValue = getElementValueById('name');
      const priceValue = getElementValueById('price');
      const imageUrlValue = getElementValueById('image-url');
      const quantityValue = getElementValueById('quantity');

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
        imageUrl: {
          field: 'Image URL',
          value: imageUrlValue,
          validators: [validateImage],
        },
        quantity: {
          field: 'Quantity',
          value: quantityValue,
          validators: [validateInteger, validatePositive],
        },
      };
      const { formError } = validateForm(validationSchema);

      // Generate new error messages based on the validation results
      generateErrorMessages(formError);

      // If there are any validation errors, stop the function
      const isPassed = Object.values(formError).every((value) => value === '');
      if (!isPassed) {
        return;
      }

      const product = {
        name: nameValue,
        price: priceValue,
        imageUrl: imageUrlValue,
        quantity: quantityValue,
      };

      switch (this.action) {
        case 'add': {
          const { isSuccess } = await this.service.add(product);

          if (!isSuccess) {
            return alert.error(ADD_PRODUCT_FAILED_MSG);
          }

          alert.success(ADD_PRODUCT_SUCCESS_MSG);
        }
      }

      this.displayProductFormPage();
    });
  }
}

export { ProductFormValidation };
