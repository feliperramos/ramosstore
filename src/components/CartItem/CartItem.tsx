import React from 'react';
import { Image } from 'react-native';
import { theme } from '../../styles/theme';

import GroupButton from '../GroupButton/GroupButton';
import { CartItem as CartItemProp } from '../../types/CartItem';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { useCartStore } from '../../store/cart';
import { getProductTotalValue } from '../../utils/quantityItems';

import {
  Container,
  inlineStyles,
  ProductContainer,
  Title,
  Price,
  RowWrap,
  Total,
  TotalWrap,
  Button,
} from './CartItem.styles';
import { TrashIcon } from 'react-native-heroicons/solid';

interface CartItemProps {
  cart: CartItemProp;
}

function CartItem({ cart }: CartItemProps) {
  const { id, image, title, price, quantity } = cart;
  const imageUrl = { uri: image };

  const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
  const increaseQuantity = useCartStore(state => state.increaseQuantity);
  const removeItem = useCartStore(state => state.removeItem);

  const handleDecreaseQuantity = () => decreaseQuantity(id);
  const handleIncreaseQuantity = () => increaseQuantity(cart);
  const handleRemoveItem = () => removeItem(id);

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
      <Button onPress={handleRemoveItem}>
        <TrashIcon color={theme.colors.feedback.alert} />
      </Button>
    </Container>
  );
}

export default CartItem;
