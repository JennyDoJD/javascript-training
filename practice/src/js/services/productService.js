import BaseService from './baseService';
import { API } from '../constants/apiUrl';

export default class ProductService extends BaseService {
  constructor() {
    super(API.PRODUCTS_ENDPOINT);
  }

  async sortProducts(field, orderBy = '') {
    return await this.sort(field, orderBy);
  }
}
