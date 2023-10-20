import React from 'react';
import { Button, Counter } from './CartButton.styles';
import { ShoppingBagIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { useCartStore } from '../../store/cart';
import { getProductQuantity } from '../../utils/quantityItems';

function CartButton() {
  const { navigate } = useNavigation<RoutesStackProps>();
  const cartItems = useCartStore(state => state.cartItems);

  const goToCart = () => navigate('CartScreen');

  return (
    <Button onPress={goToCart}>
      <ShoppingBagIcon color="#5603AD" />

      {!!cartItems.length && <Counter>{getProductQuantity(cartItems)}</Counter>}
    </Button>
  );
}

export default CartButton;
