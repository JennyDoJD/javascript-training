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
   * @param {Object} data - The data object containing the updates to be applied to the resource.
   * @returns {object} - An object indicating the success status and response data.
   *                   - isSuccess: true if the operation was successful, false otherwise.
   *                   - data: The response data from the server if isSuccess is true.
   */
  async edit(id, data) {
    try {
      const response = await this.httpClient.put(
        `${this.endpoint}/${id}`,
        data
      );
      return { isSuccess: true, data: response };
    } catch (error) {
      return { isSuccess: false };
    }
  }
}

export default BaseService;
