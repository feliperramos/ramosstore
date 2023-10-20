import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Product } from '../../types/Product';
import { ProductCard } from '../../components/';
import { useProduct } from '../../store/products';

import { Container, inlineStyles } from './Home.styles';

function HomeScreen() {
  const getProduct = useProduct(state => state.products);

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <Container
      horizontal
      showsVerticalScrollIndicator
      directionalLockEnabled
      alwaysBounceVertical={false}>
      <FlatList
        data={getProduct}
        renderItem={renderItem}
        contentContainerStyle={inlineStyles.flatlist}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}

export default HomeScreen;
