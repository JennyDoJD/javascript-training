import { HttpClient } from '../helpers/httpClient';
import { API } from '../constants/apiUrl';

class BaseService {
  constructor(endpoint) {
    this.httpClient = new HttpClient({ baseURL: API.BASE_URL });
    this.endpoint = endpoint;
  }

  /**
   * Gets data from the api
   * @returns {Promise<Object[]>} An array of data objects
   */
  async getAll() {
    return await this.httpClient.get(this.endpoint);
  }

  /**
   * Delete a item by its ID
   * @param {string} id - The ID of the item
   * @param {Object} result - The result
   */
  async deleteByID(id) {
    return await this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  /**
   * Fetches sorted products from the API.
   * @param {string} sortBy - The field to sort by (e.g., 'name', 'price').
   * @param {string} sortOrder - The sort order ('asc' for ascending, 'desc' for descending).
   * @returns {Promise<Object[]>} - An array of sorted product objects.
   */
  async getSortedProducts(sortBy, sortOrder) {
    return await this.httpClient.get(
      `${this.endpoint}?sortBy=${sortBy}&sortOrder=${sortOrder}`
    );
  }
}

export default BaseService;
