import React from 'react';
import {
  Container,
  inlineStyles,
  ProductContainer,
  Title,
  Price,
  RowWrap,
  Total,
  TotalWrap,
} from './CartItem.styles';
import { CartItem as CartItemProp } from '../../types/CartItem';
import { Image } from 'react-native';
import { currencyFormatter } from '../../utils/currencyFormatter';
import GroupButton from '../GroupButton/GroupButton';
import { useCartStore } from '../../store/cart';
import { getProductTotalValue } from '../../utils/quantityItems';

interface CartItemProps {
  cart: CartItemProp;
}

function CartItem({ cart }: CartItemProps) {
  const { id, image, title, price, quantity } = cart;
  const imageUrl = { uri: image };

  const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
  const increaseQuantity = useCartStore(state => state.increaseQuantity);

  const handleDecreaseQuantity = () => decreaseQuantity(id);
  const handleIncreaseQuantity = () => increaseQuantity(cart);

  const totalItem = getProductTotalValue({ quantity, price });

  return (
    <Container>
      <Image
        style={inlineStyles.image}
        source={imageUrl}
        resizeMode="contain"
      />
      <ProductContainer>
        <Title>{title}</Title>
        <RowWrap>
          <Price>{currencyFormatter(price)}</Price>
        </RowWrap>

        <TotalWrap>
          <GroupButton
            decreaseQuantity={handleDecreaseQuantity}
            increaseQuantity={handleIncreaseQuantity}>
            {quantity}
          </GroupButton>
          <Total>{currencyFormatter(totalItem)}</Total>
        </TotalWrap>
      </ProductContainer>
    </Container>
  );
}

export default CartItem;
