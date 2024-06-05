import { API } from '../constants/apiUrl';

class HttpClient {
  /**
   * Fetches data from the API using the specified endpoint.
   * It defines an asynchronous function 'get' to fetch data from the API.
   * @param {string} endpoint- the API endpoint
   * @returns {Promise<Object>} - the JSON response
   */
  static async get(endpoint) {
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
  }

  /**
   * Sends a DELETE request to the API to delete data.
   * @param {string} endpoint - The API endpoint for deleting data.
   * @returns {Promise<Object>} - The JSON response from the server indicating success or failure.
   */
  static async delete(endpoint) {
    try {
      const response = await fetch(`${API.BASE_URL}/${endpoint}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      return {
        isSuccess: true,
      };
    } catch (error) {
      return {
        isSuccess: false,
      };
    }
  }
}

export { HttpClient };
