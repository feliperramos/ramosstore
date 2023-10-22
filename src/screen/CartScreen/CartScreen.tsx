import React from 'react';
import { useCartStore } from '../../store/cart';
import { Container, Footer, Button, ButtonText } from './CartScreen.style';
import CartList from '../../components/CartList/CartList';

function CartScreen() {
  const cartItems = useCartStore(state => state.cartItems);
  const validCartItems = cartItems.filter(({ quantity }) => quantity > 0);
  const { cleanCart } = useCartStore();

  const handleClearCart = () => cleanCart();

  return (
    <Container>
      <CartList cartItems={validCartItems} />

      <Footer>
        <Button onPress={handleClearCart}>
          <ButtonText>Go To Checkout</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
}

export default CartScreen;
