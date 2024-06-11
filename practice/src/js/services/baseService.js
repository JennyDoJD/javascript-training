import { HttpClient } from '../helpers/httpClient';
import { API } from '../constants/apiUrl';

class BaseService {
  constructor(endpoint) {
    this.httpClient = new HttpClient({ baseURL: API.BASE_URL });
    this.endpoint = endpoint;
  }

  /**
   * Retrieves a list of data from the API
   * @param {Object} params - Optional parameters for API request
   * @returns {Promise<Object[]>} An array of data objects
   */
  async getList(params = {}) {
    let url = `${this.endpoint}`;

    if ('sortBy' in params && 'order' in params) {
      url += `?sortBy=${params.sortBy}&order=${params.order}`;
    }

    return await this.httpClient.get(url, { params });
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
   * Search for items by name
   * @param {string} name - The name to search for
   * @returns {Promise<Object[]>} An array of matched datas
   */
  async searchByName(name) {
    try {
      const endpoint = `${this.endpoint}?name=${name}`;

      return await this.httpClient.get(endpoint);
    } catch (error) {
      throw new Error(`Error searching products by name: ${error.message}`);
    }
  }

  /**
   * Add a new item
   * @param {Object} data - the object contains the item
   * @param {Object} result - The result
   */
  async add(data) {
    return await this.httpClient.post(this.endpoint, data);
  }

  async getByID(id) {
    return await this.httpClient.get(`${this.endpoint}/${id}`);
  }
}

export default BaseService;
