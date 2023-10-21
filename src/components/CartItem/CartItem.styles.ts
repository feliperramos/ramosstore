import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  margin: 8px;
  padding: 8px;
`;

export const ProductContainer = styled.View`
  margin-horizontal: 8px;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary.green};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`;

export const RowWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.primary.purple_dark};
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  font-size: 16px;
  line-height: 20px;
`;

export const TotalWrap = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.primary.purple_light};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: 16px;
  line-height: 20px;
  margin-left: 16px;
  flex: 1.2;
`;

export const Button = styled.TouchableOpacity``;

export const inlineStyles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
  },
});
