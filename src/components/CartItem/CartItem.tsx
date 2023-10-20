import React from 'react';
import { Container, inlineStyles } from './CartItem.styles';
import { CartItem } from '../../types/CartItem';
import { Image } from 'react-native';

interface CartItemProps {
  cart: CartItem;
}

function CartItem({ cart }: CartItemProps) {
  const { image } = cart;
  return (
    <Container>
      <Image style={inlineStyles.image} source={image} resize="contain" />
    </Container>
  );
}

export default CartItem;
