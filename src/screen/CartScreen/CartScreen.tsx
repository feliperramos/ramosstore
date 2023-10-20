import React from 'react';
import { Text } from 'react-native';
import { useCartStore } from '../../store/cart';
import {
  getProductQuantity,
  getCartTotalValue,
} from '../../utils/quantityItems';
import { Container } from './CartScreen.style';

function CartScreen() {
  const cartItems = useCartStore(state => state.cartItems);
  const validCartItems = cartItems.filter(({ quantity }) => quantity > 0);
  const itemsQuantity = getProductQuantity(validCartItems);
  const total = getCartTotalValue(validCartItems);

  return (
    <Container>
      <Text>{total}</Text>
    </Container>
  );
}

export default CartScreen;
