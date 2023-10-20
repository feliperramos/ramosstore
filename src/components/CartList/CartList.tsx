import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { CartItem as CartItemGlobalProps } from '../../types/CartItem';
import CartItem from '../CartItem/CartItem';

interface CartListProps {
  cartItems: CartItem[];
}

function CartList({ cartItems }: CartListProps) {
  const renderItem: ListRenderItem<CartItemGlobalProps> = ({ item }) => (
    <CartItem cart={item} />
  );

  return <FlatList data={cartItems} renderItem={renderItem} />;
}

export default CartList;
