import React from 'react';
import { Image } from 'react-native';

import { useCartStore } from '../../store/cart';
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
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { title, image, price, category } = product;
  const resourceImage = { uri: image };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { getItemQuantity } = useCartStore();
  const quantity = getItemQuantity(product.id);

  const addItemtoCart = useCartStore(state => state.increaseQuantity);

  const handleAddItemToCart = () => addItemtoCart(product);

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

        <ButtonAddToCart
          quantity={quantity}
          onPress={handleAddItemToCart}
          product={product}>
          Buy
        </ButtonAddToCart>
      </ProductContainer>
    </Container>
  );
}

export default ProductCard;
