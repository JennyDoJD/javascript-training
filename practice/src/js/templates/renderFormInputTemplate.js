const renderFormInputsHTML = (formInputs) => {
  let formInputsHTML = ``;

  for (const item of formInputs) {
    const { field, id } = item;

    formInputsHTML += `
      <div class="form-group">
        <label for="${id}" class="tertiary-title">${field}</label>
        <input class="input-form input-form-lg" id="${id}" type="text" />
        <div class="error-message" id="${id}-error"></div>
      </div>
    `;
  }

  return formInputsHTML;
};

export default renderFormInputsHTML;
