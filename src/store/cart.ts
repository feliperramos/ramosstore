import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

interface CartStore {
  cartItems: CartItem[];
  getItemQuantity(id: number): number;
  increaseQuantity(product: Product): void;
  decreaseQuantity(id: number): void;
  removeItem(id: number): void;
  cleanCart(): void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      getItemQuantity: id =>
        get().cartItems.find(item => item.id === id)?.quantity || 0,
      increaseQuantity: product =>
        set(state => {
          const getItem = state.cartItems.find(item => item.id === product.id);
          if (!getItem) {
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            };
          }

          return {
            cartItems: state.cartItems.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          };
        }),
      decreaseQuantity: id =>
        set(({ cartItems }) => {
          const getItem = cartItems.find(item => item.id === id);
          const newItem = getItem?.index === undefined;
          if (getItem?.quantity === 1 && newItem) {
            return { cartItems: cartItems.filter(item => item.id !== id) };
          }

          return {
            cartItems: cartItems.map(item =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            ),
          };
        }),
      removeItem: id =>
        set(({ cartItems }) => {
          const getItem = cartItems.find(item => item.id === id);
          const newItem = getItem?.index === undefined;

          if (getItem?.quantity === 1 && newItem) {
            return { cartItems: cartItems.filter(item => item.id !== id) };
          }

          return {
            cartItems: cartItems.map(item =>
              item.id === id ? { ...item, quantity: 0 } : item,
            ),
          };
        }),
      cleanCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({ cartItems: state.cartItems }),
    },
  ),
);
