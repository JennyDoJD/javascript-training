import { API } from '../constants/apiUrl';
import ApiServices from '../services/apiService';

export default class ProductService {
  constructor() {
    this.apiService = new ApiServices(API.BASE_URL, API.PRODUCTS_ENDPOINT);
  }

  getAllProducts = async () => {
    return await this.apiService.get();
  };

  addProduct = async (product) => {
    return await this.apiService.post(product);
  };

  updateProduct = async (data) => {
    return await this.apiService.put(data);
  };

  deleteProduct = async (id) => {
    return await this.apiService.delete(id);
  };
}
