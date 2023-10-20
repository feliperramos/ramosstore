import styled from 'styled-components/native';

export const CategoryContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.purple_dark};
  border-radius: 30px;
  padding: 8px;
  max-width: 90px;
  align-items: center;
`;

export const CategoryText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.acqua};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  text-transform: capitalize;
  font-size: 12px;
`;
