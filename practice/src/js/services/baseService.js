import { APIHelper } from '../helpers/api';

export default class BaseService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  /**
   * Gets data from the api
   * @returns {Promise<Object[]>} An array of data objects
   */
  async getAll() {
    return await APIHelper.get(this.endpoint);
  }

  /**
   * Delete a item by its ID
   * @param {string} id - The ID of the item
   * @param {Object} result - The result
   */
  async delete(id) {
    return await APIHelper.delete(`${this.endpoint}/${id}`);
  }
}
