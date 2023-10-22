import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  padding-top: 8px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.purple_dark};
  border-radius: 32px;
  padding: 4px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: 16px;
  text-align: center;
`;
