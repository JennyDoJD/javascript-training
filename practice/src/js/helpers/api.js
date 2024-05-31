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

  /**
   * Sends data to the API using POST method.
   * @param {string} endpoint - the API endpoint
   * @param {Object} body - the data to send in the request body
   * @returns {Promise<Object>} - the JSON response
   */
  async post(endpoint, body) {
    try {
      const response = await fetch(`${API.BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      const data = response.json();

      return data;
    } catch (error) {
      throw new Error(`Failed to post data: ${error.message}`);
    }
  },

  /**
   * Sends data to the API using PUT method.
   * @param {string} endpoint - the API endpoint
   * @param {Object} body - the data to send in the request body
   * @returns {Promise<Object>} - the JSON response
   */
  async put(endpoint, body) {
    try {
      const response = await fetch(`${API.BASE_URL}/${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to put data');
      }

      const data = response.json();

      return data;
    } catch (error) {
      throw new Error(`Failed to put data: ${error.message}`);
    }
  },

  /**
   * Sends a DELETE request to the API to delete data.
   * @param {string} endpoint - The API endpoint for deleting data.
   * @returns {Promise<Object>} - The JSON response from the server indicating success or failure.
   */
  async delete(endpoint) {
    try {
      const response = await fetch(`${API.BASE_URL}/${endpoint}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      const data = response.json();

      return data;
    } catch (error) {
      throw new Error(`Failed to delete data: ${error.message}`);
    }
  },
};

export { APIHelper };
