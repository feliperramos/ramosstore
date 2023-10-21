import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { CartItem as CartItemGlobalProps } from '../../types/CartItem';

import CartItem from '../CartItem/CartItem';
import CartFooter from '../CartFooter/CartFooter';
import { Divider } from './CartList.styles';

interface CartListProps {
  cartItems: CartItemGlobalProps[];
}

function CartList({ cartItems }: CartListProps) {
  const renderItem: ListRenderItem<CartItemGlobalProps> = ({ item }) => (
    <CartItem cart={item} />
  );

  const renderSeparatorComponent = () => <Divider />;

  const renderFooterComponent = () => {
    if (cartItems.length) {
      return <CartFooter cartItems={cartItems} />;
    }

    return <></>;
  };

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      ListFooterComponent={renderFooterComponent}
      ItemSeparatorComponent={renderSeparatorComponent}
    />
  );
}

export default CartList;
