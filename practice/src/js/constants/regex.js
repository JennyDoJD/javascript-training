const REGEX_PATTERNS = {
  digitRegex: /^-?\d*\.?\d+$/,
  integerRegex: /^-?\d+$/,
  imageUrlRegex: /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg|webp))/i,
  alphaNumericCharacterRegex:
    /^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>~`_+=-\s]*$/,
};

export { REGEX_PATTERNS };
