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
   * Add a new item
   * @param {Object} itemToAdd - the object contains the item
   * @param {Object} result - The result
   */
  async add(itemToAdd) {
    return await APIHelper.post(this.endpoint, itemToAdd);
  }
}
