import { REGEX_PATTERNS } from '../constants/regex';

let formError = {};

/**
 * Validates if the value is empty (consisting only of whitespace characters).
 * @param {Object} params - An object containing key and value to validate.
 * @param {string} params.key - The field identifier.
 * @param {string} params.value - The value of the field to be validated.
 * @returns {string} - An error message if the value is empty, otherwise an empty string.
 */
const validateEmpty = ({ key, value }) =>
  (formError[key] = value.trim() === '' ? `${key} is required.` : '');

/**
 * Checks if the value is a number.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {number} params.value - The value of that field.
 * @returns {string} - An error message if the value is not an integer, otherwise an empty string.
 */
const validateInteger = ({ key, value }) =>
  (formError[key] = !REGEX_PATTERNS.INTEGER_REGEX.test(value)
    ? `${key} must be an integer.`
    : '');

/**
 * Checks if the value is a number.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {number} params.value - The value of that field.
 * @returns {string} - An error message if the value is not a float, otherwise an empty string.
 */
const validateFloat = ({ key, value }) =>
  (formError[key] = !REGEX_PATTERNS.DECIMAL_NUMBER_REGEX.test(value)
    ? `${key} must be a float.`
    : '');

/**
 * Checks if the value is a string.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {string} params.value - The value of that field.
 * @returns {string} - An error message if the value is not a string, otherwise an empty string.
 */
const validateString = ({ key, value }) =>
  (formError[key] =
    typeof value !== 'string' ? `${key} must be a string.` : '');

/**
 * Checks if the value is valid format.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {string} params.value - The value of that field.
 * @returns {string} - An error message if the value is not a valid image URL, otherwise an empty string.
 */
const validateImage = ({ key, value }) =>
  (formError[key] = !REGEX_PATTERNS.IMAGE_URL_REGEX.test(value)
    ? `Please make sure ${key} starts with 'http://' or 'https://' and ends with .jpg, .png, .gif, .svg, .jpeg or .webp.`
    : '');

/**
 * Checks if the value does not exceed the maximum value.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {number} params.value - The value of that field.
 * @param {number} params.max - The maximum allowed value.
 * @returns {string} - An error message if the value exceeds the max, otherwise an empty string.
 */
const validateMaxValue = ({ key, value, max }) =>
  (formError[key] =
    parseFloat(value) > max ? `${key} must not exceed ${max}.` : '');

/**
 * Checks if the value is longer than minimum length.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {string} params.value - The value of that field.
 * @param {number} [params] - The minimum length required.
 * @param {number} [params] - The maximum length required.
 * @returns {string} - An error message if the length requirement is not met, otherwise an empty string.
 */
const validateLength = ({ key, value, min, max }) => {
  const trimmedValue = typeof value === 'string' ? value.trim() : value;
  const errorMessage =
    typeof trimmedValue !== 'undefined' &&
    (trimmedValue.length < min || trimmedValue.length > max)
      ? `${key} must have between ${min} and ${max} characters.`
      : '';

  formError[key] = errorMessage;
};

/**
 * Checks if the value is a positive number.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {number} params.value - The value of that field.
 * @returns {string} - An error message if the value is not a positive number, otherwise an empty string.
 */
const validatePositive = ({ key, value }) =>
  (formError[key] =
    parseFloat(value) <= 0
      ? `${key} must be a positive number greater than zero.`
      : '');

/**
 * Checks the value contains at least one letter and can include letters, numbers, and special characters.
 * @param {Object} params - An object.
 * @param {string} params.key - The field that needs to check.
 * @param {string} params.value - The value of that field.
 * @returns {string} - An error message if the value does not meet the criteria, otherwise an empty string.
 */
const validateAlphaNumericCharacter = ({ key, value }) =>
  (formError[key] = !REGEX_PATTERNS.ALPHA_NUMERIC_CHARACTER_REGEX.test(value)
    ? `${key} must contain at least one letter and can include numbers, and special characters.`
    : '');

/**
 * Validates the product form data.
 * @param {Object} data - The product form data.
 * @returns {Object} An object containing validation results.
 */
const validateForm = (validationSchema) => {
  formError = {};

  for (const key in validationSchema) {
    const { field, value, validators } = validationSchema[key];

    validateEmpty({ key: field, value });

    if (formError[field] !== '') {
      continue;
    }

    for (const validator of validators) {
      if (typeof validator === 'function') {
        validator(value);
      }

      if (formError[field] !== '') {
        break;
      }

      validator({ key: field, value });
    }
  }

  return { formError };
};

/**
 * Displays validation errors next to the corresponding form fields.
 * @param {Object} errors - Object containing validation errors.
 * @returns {void}
 */
const displayValidationErrors = (formError) => {
  const errorMsgElements = document.querySelectorAll('[data-field-error]');

  errorMsgElements.forEach((element) => {
    element.textContent = '';
  });

  for (const key in formError) {
    const value = formError[key];

    const errorMsgElement = document.querySelector(
      `[data-field-error='${key}']`
    );

    if (errorMsgElement) {
      errorMsgElement.textContent = value;
    }
  }
};

/**
 * Checks if there are any validation errors in the form error object.
 * @param {Object} formError - The object containing validation errors for each form field.
 * @returns {boolean} - True if there are any validation errors, otherwise false.
 */
const hasValidationErrors = (formError) => {
  return Object.values(formError).some((error) => error !== '');
};

export {
  validateString,
  validateInteger,
  validateImage,
  validateEmpty,
  validateFloat,
  validateLength,
  validatePositive,
  validateForm,
  validateMaxValue,
  validateAlphaNumericCharacter,
  hasValidationErrors,
  displayValidationErrors,
};
