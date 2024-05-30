import { API } from '../constants/apiUrl';

const APIHelper = {
  /**
   * Fetches data from the API using the specified endpoint.
   * It defines an asynchronous function 'get' to fetch data from the API.
   * @param {string} endpoint- the API endpoint
   * @returns {Promise<Object>} - the JSON response
   */
  async get(endpoint) {
    try {
      const response = await fetch(`${API.BASE_URL}/${endpoint}`);

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = response.json();

      return data;
    } catch (error) {
      throw new Error(`Get data fail ${error.message}`);
    }
  },
};

export { APIHelper };