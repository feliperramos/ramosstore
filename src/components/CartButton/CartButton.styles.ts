import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity``;

export const Counter = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: 12px;
  text-align: center;
  margin-left: 4px;
`;
