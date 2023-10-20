import { CartItem } from '../types/CartItem';

export function getProductQuantity(cartItems: CartItem[]) {
  const total = cartItems.reduce((sum, { quantity }) => sum + quantity, 0);

  return total < 10 ? `0${total}` : total;
}

type GetItemTotalValueParams = {
  quantity: number;
  price: number;
};

export function getProductTotalValue({
  quantity,
  price,
}: GetItemTotalValueParams) {
  return quantity * price;
}

export function getCartTotalValue(cartItems: CartItem[]) {
  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      getProductTotalValue({ quantity: item.quantity, price: item.price }),
    0,
  );

  return total;
}
