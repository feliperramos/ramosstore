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
