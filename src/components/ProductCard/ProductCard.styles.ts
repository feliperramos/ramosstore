import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  padding: 8px;
  margin: 8px;
  width: 170px;
  height: 270px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  elevation: 4;
  box-shadow: 4px 4px 8px ${({ theme }) => theme.colors.gray_200};
  position: relative;
`;

export const ProductContainer = styled.View`
  flex: 1;
  margin-top: 8px;
`;

export const TitleSection = styled.View`
  margin-top: 8px;
`;

export const CategorySection = styled.View`
  margin-top: 8px;
`;

export const TitleText = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: ${({ theme }) => theme.colors.primary.purple_light};
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  font-size: 16px;
`;

export const PriceText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.purple_light};
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  font-size: 16px;
`;

export const inlineStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 96,
  },
});
