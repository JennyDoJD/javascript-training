import { HttpClient } from '../helpers/httpClient';
import { API } from '../constants/apiUrl';

class BaseService {
  constructor(endpoint) {
    this.httpClient = new HttpClient({ baseURL: API.BASE_URL });
    this.endpoint = endpoint;
  }

  /**
   * Retrieves a list of data from the API.
   * @param {Object} params - Optional parameters for API request.
   * @returns {Promise<Object[]>} An array of data objects.
   */
  async getList(params = {}) {
    const queryParams = new URLSearchParams();

    for (const key in params) {
      queryParams.append(key, params[key]);
    }

    const url = `${this.endpoint}?${queryParams.toString()}`;

    return await this.httpClient.get(url);
  }

  /**
   * Delete a item by its ID.
   * @param {string} id - The ID of the item.
   * @param {Object} result - The result.
   */
  async deleteByID(id) {
    return await this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  /**
   * Add a new item.
   * @param {Object} data - the object contains the item.
   * @param {Object} result - The result.
   */
  async add(data) {
    return await this.httpClient.post(this.endpoint, data);
  }

  async getByID(id) {
    return await this.httpClient.get(`${this.endpoint}/${id}`);
  }
}

export default BaseService;
