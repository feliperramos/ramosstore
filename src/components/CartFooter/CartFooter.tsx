import React from 'react';

import { Container, Total, PriceSection, Text } from './CartFooter.styles';
import { getCartTotalValue } from '../../utils/quantityItems';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { CartItem } from '../../types/CartItem';

interface CartFooterProps {
  cartItems: CartItem[];
}

function CartFooter({ cartItems }: CartFooterProps) {
  const total = getCartTotalValue(cartItems);

  return (
    <Container>
      <PriceSection>
        <Text>Total: </Text>
        <Total>{currencyFormatter(total)}</Total>
      </PriceSection>
    </Container>
  );
}

export default CartFooter;
