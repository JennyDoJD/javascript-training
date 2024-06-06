require('dotenv').config();

const API = {
  BASE_URL: process.env.BASE_API_URL,
  PRODUCTS_ENDPOINT: 'products',
};

export { API };
