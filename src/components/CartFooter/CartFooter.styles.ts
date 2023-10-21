import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.gray_100};
  margin-top: 16px;
  padding-top: 8px;
`;

export const PriceSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px;
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.primary.purple_dark};
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  font-size: 16px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 14px;
`;
