import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Product } from '../../types/Product';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProduct } from '../../store/products';

import { Container, inlineStyles } from './Home.styles';

function HomeScreen() {
  const getProduct = useProduct(state => state.products);

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <Container>
      <FlatList
        contentContainerStyle={inlineStyles.flatlist}
        horizontal
        data={getProduct}
        initialNumToRender={5}
        renderItem={renderItem}
      />
    </Container>
  );
}

export default HomeScreen;
