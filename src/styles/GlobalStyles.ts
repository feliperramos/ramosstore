import { DefaultTheme } from '@react-navigation/native';
import { theme } from './theme';

export const Main = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
    text: theme.colors.black,
  },
};
