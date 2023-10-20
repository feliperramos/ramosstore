import { Product } from './Product';

export type CartItem = Product & {
  quantity: number;
  index?: number;
};
