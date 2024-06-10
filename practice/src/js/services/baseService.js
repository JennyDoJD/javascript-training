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

  // /**
  //  * Sorts the items based on the specified field and order.
  //  * @param {string} field - The field to sort the items by.
  //  * @param {string} [orderBy=''] - The order by which to sort the items.
  //  * @returns {Promise<Object[]>} - A promise resolving to an array of sorted items.
  //  */
  // async sort(field, orderBy = '') {
  //   const items = (await this.getAll()).slice();

  //   return items.sort((a, b) => {
  //     let comparision = 0;

  //     if (typeof a[field] === 'string') {
  //       comparision = a[field].localeCompare(b[field]);
  //     } else if (typeof a[field] === 'boolean') {
  //       comparision = a[field] - b[field];
  //     } else if (typeof a[field] === 'number') {
  //       comparision = a[field] - b[field];
  //     }

  //     return orderBy === 'asc'
  //       ? comparision
  //       : orderBy === 'desc'
  //       ? -comparision
  //       : 0;
  //   });
  // }

  async sortProducts(field, orderBy = '') {
    if (field && orderBy) {
      return await this.httpClient.get(
        `${this.endpoint}?_sort=${field}&_order=${orderBy}`
      );
    } else {
      return await this.getAll();
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
