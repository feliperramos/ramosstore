import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const inlineStyles = StyleSheet.create({
  image: {
    width: 36,
    height: 36,
  },
});
