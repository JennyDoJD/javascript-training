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
   * @param {string} id - The ID of the data.
   * @param {Object} result - The result.
   */
  async deleteByID(id) {
    return await this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  /**
   * Add a new data.
   * @param {Object} data - the object contains the data.
   * @param {Object} result - The result.
   */
  async add(data) {
    return await this.httpClient.post(this.endpoint, data);
  }

  /**
   * Gets a data by its ID.
   * @param {string} id - The ID of the data.
   * @returns {Object} result - The result.
   */
  async getByID(id) {
    return await this.httpClient.get(`${this.endpoint}/${id}`);
  }

  /**
   * Edit a data by its ID.
   * @param {string} id - The ID of the data.
   * @param {Object} result - The result.
   */
  async edit(id, data) {
    return await this.httpClient.put(`${this.endpoint}/${id}`, data);
  }
}

export default BaseService;
