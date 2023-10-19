import axios from 'axios';
import { STOREAPI_URL } from '../constants';

export const getFakeProduct = axios.create({
  baseURL: `${STOREAPI_URL}/products/`,
});
