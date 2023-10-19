import React, { useEffect, useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';
import SplashScreen from 'react-native-splash-screen';
import { useProduct } from './src/store/products';
import { Routes } from './src/Routes';

function App(): JSX.Element {
  useEffect(() => {
    async function prepare() {
      try {
        // eslint-disable-next-line no-new
        new Promise(resolve => setTimeout(resolve, 6000));
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }
    prepare();
  });

  const getProduct = useProduct(state => state.getProducts);

  useLayoutEffect(() => {
    getProduct();
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
