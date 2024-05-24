import { APIHelper } from '../helpers/api';

export default class BaseService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  /**
   * Fetch all products from the API
   */
  async getAllProducts() {
    return await APIHelper.get(this.endpoint);
  }
}
