import React from 'react';
import { Image } from 'react-native';

import { Product } from '../../types/Product';
import { currencyFormatter } from '../../utils/currencyFormatter';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import {
  Container,
  ProductContainer,
  TitleSection,
  TitleText,
  PriceText,
  inlineStyles,
  CategorySection,
} from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { title, image, price, category } = product;
  const resourceImage = { uri: image };

  return (
    <Container>
      <Image
        source={resourceImage}
        resizeMode="contain"
        style={inlineStyles.image}
      />
      <ProductContainer>
        <CategorySection>
          <CategoryBadge>{category}</CategoryBadge>
        </CategorySection>

        <TitleSection>
          <TitleText>{title}</TitleText>
        </TitleSection>

        <PriceText>{currencyFormatter(price)}</PriceText>
      </ProductContainer>
    </Container>
  );
}

export default ProductCard;
