import { create } from 'zustand';
import type { Product } from '../types/Product';
import { getFakeProduct } from '../lib/axios';

type HomeStore = {
  products: Product[];
  getProducts(): Promise<void>;
};

export const useProduct = create<HomeStore>(set => ({
  products: [],
  getProducts: async () => {
    try {
      const { data } = await getFakeProduct.get<Product[]>('?limit=20');
      set({ products: data });
    } catch (e) {
      console.log(e);
    }
  },
}));
