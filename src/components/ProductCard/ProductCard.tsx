import React from 'react';
import { Image, Text } from 'react-native';

import { Product } from '../../types/Product';
import { Container, PriceText, inlineStyles } from './ProductCard.styles';
import { currencyFormatter } from '../../utils/currencyFormatter';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { title, image, price } = product;
  const resourceImage = { uri: image };

  return (
    <Container>
      <Image
        source={resourceImage}
        resizeMode="contain"
        style={inlineStyles.image}
      />
      <Text>{title}</Text>
      <PriceText>{currencyFormatter(price)}</PriceText>
    </Container>
  );
}

export default ProductCard;
