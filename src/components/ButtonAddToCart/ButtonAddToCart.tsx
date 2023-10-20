import React, { ReactNode } from 'react';
import { useCartStore } from '../../store/cart';

import { Product } from '../../types/Product';
import { ButtonText, Container, Loading } from './ButtonAddToCart.styles';
import GroupButton from '../GroupButton/GroupButton';

interface ButtonAddToCartProps {
  quantity: number;
  product: Product;
  loading?: boolean;
  children: ReactNode;
  onPress?(): void;
}

function ButtonAddToCart({
  quantity,
  product,
  loading = false,
  children,
  onPress,
}: ButtonAddToCartProps) {
  const { id } = product;
  const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
  const increaseQuantity = useCartStore(state => state.increaseQuantity);

  const handleDecreaseQuantity = () => decreaseQuantity(id);
  const handleIncreaseQuantity = () => increaseQuantity(product);

  return (
    <>
      {quantity === 0 ? (
        <Container onPress={onPress}>
          {loading && <Loading />}
          <ButtonText loading={loading}>{children}</ButtonText>
        </Container>
      ) : (
        <GroupButton
          decreaseQuantity={handleDecreaseQuantity}
          increaseQuantity={handleIncreaseQuantity}>
          {quantity}
        </GroupButton>
      )}
    </>
  );
}

export default ButtonAddToCart;
