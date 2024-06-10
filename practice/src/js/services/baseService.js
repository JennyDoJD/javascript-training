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
   * Search for items by name
   * @param {string} name - The name to search for
   * @returns {Promise<Object[]>} An array of matched datas
   */
  async searchByName(name) {
    const datas = await this.getAll();
    return datas.filter((data) => data.name.toLowerCase().includes(name));
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
