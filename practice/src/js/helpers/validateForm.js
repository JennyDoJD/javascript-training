import { LABELS } from '../constants/label';
import { REGEX_PATTERNS } from '../constants/regex';

/**
 * Validates if the value is empty (consisting only of whitespace characters)
 * @param {Object} params - An object containing key and value to validate
 * @param {string} params.key - The field identifier
 * @param {string} params.value - The value of the field to be validated
 * @returns {string} - An error message if the value is empty, otherwise an empty string
 */
const validateEmpty = ({ key, value }) => {
  return value.trim() === '' ? `${LABELS[key]} is required` : '';
};

/**
 * Checks if the value is a number
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {number} params.value - The value of that field
 * @returns {string} - An error message if the value is not an integer, otherwise an empty string
 */
const validateInteger = ({ key, value }) => {
  return !REGEX_PATTERNS.integerRegex.test(value)
    ? `${LABELS[key]} must be a integer.`
    : '';
};

/**
 * Checks if the value is a number
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {number} params.value - The value of that field
 * @returns {string} - An error message if the value is not a float, otherwise an empty string
 */
const validateFloat = ({ key, value }) => {
  return !REGEX_PATTERNS.digitRegex.test(value)
    ? `${LABELS[key]} must be a float.`
    : '';
};

/**
 * Checks if the value is a string
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {string} params.value - The value of that field
 * @returns {string} - An error message if the value is not a string, otherwise an empty string
 */
const validateString = ({ key, value }) => {
  return typeof value !== 'string' || isNaN(value) === false
    ? `${LABELS[key]} must be a string.`
    : '';
};

/**
 * Checks if the value is valid format
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {string} params.value - The value of that field
 * @returns {string} - An error message if the value is not a valid image URL, otherwise an empty string
 */
const validateImage = ({ key, value }) => {
  return !REGEX_PATTERNS.imageUrlRegex.test(value)
    ? `Please make sure ${LABELS[key]} starts with 'http://' or 'https://' and ends with .jpg or .png`
    : '';
};

/**
 * Checks if the value is longer than minimum length
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {string} params.value - The value of that field
 * @param {number} [params.min=3] - The minimum length required (default is 2)
 * @returns {string} - An error message if the length requirement is not met, otherwise an empty string
 */
const validateLength = ({ key, value, min = 2, max = 50 }) =>
  value.trim().length < min || value.trim().length > max
    ? `${LABELS[key]} must have between ${min} and ${max} characters.`
    : '';

/**
 * Checks if the value is a positive number
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {number} params.value - The value of that field
 * @returns {string} - An error message if the value is not a positive number, otherwise an empty string
 */
const validatePositive = ({ key, value }) =>
  parseFloat(value) < 0 ? `${LABELS[key]} must be a positive number.` : '';

/**
 * Validates the form data
 * @param {Object} data - The form data
 * @returns {Object} An object containing validation results
 */
function validateForm(data) {
  const validationSchema = {
    Name: [validateString, validateLength],
    Price: [validateFloat, validatePositive],
    ImageURL: [validateImage],
    Quantity: [validateInteger, validatePositive],
  };

  const formError = {};
  for (const key in data) {
    // If the key exists in the validationSchema
    if (validationSchema.hasOwnProperty(key)) {
      const value = data[key];
      // Get the array of validator methods associated with the key
      const validators = validationSchema[key];

      formError[key] = validateEmpty({ key, value });

      for (let validator of validators) {
        if (formError[key] !== '') {
          break;
        }

        formError[key] = validator({ key, value });
      }
    }
  }

  return { formError };
}

export {
  validateString,
  validateInteger,
  validateImage,
  validateEmpty,
  validateFloat,
  validateLength,
  validatePositive,
  validateForm,
};
