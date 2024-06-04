/**
 * Render HTML markup for form inputs based on the provided formInputs array.
 * @param {Object[]} formInputs - An array of objects containing field and id properties.
 * @returns {string} - The HTML markup for the form inputs.
 */
const renderFormInputTemplate = (formInputs) => {
  let formInputsHTML = '';

  for (const item of formInputs) {
    const { field, id, value = '' } = item;

    formInputsHTML += `
      <div class="form-group">
        <label for="${id}" class="tertiary-title">${field}</label>
        <input class="input-form input-form-lg" id="${id}" type="text" value="${value}"/>
        <div class="error-message" id="${id}-error"></div>
      </div>
    `;
  }

  return formInputsHTML;
};

export default renderFormInputTemplate;
