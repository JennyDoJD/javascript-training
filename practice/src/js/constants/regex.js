const REGEX_PATTERNS = {
  DECIMAL_NUMBER_REGEX: /^-?\d*\.?\d+$/,
  INTEGER_REGEX: /^-?\d+$/,
  IMAGE_URL_REGEX:
    /^(http[s]?:\/\/)?([^\/\s]+\.[^\s]+)*(png|jpg|gif|svg|jpeg|webp)$/i,
  ALPHA_NUMERIC_CHARACTER_REGEX:
    /^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>~`_+=\-\/\s]*$/,
};

export { REGEX_PATTERNS };
