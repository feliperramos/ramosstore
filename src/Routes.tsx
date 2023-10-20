import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Main } from './styles/GlobalStyles';
import Logo from './../public/images/logo.png';
import { inlineStyles } from './styles/HeaderStyles';

import { CartScreen, HomeScreen } from './screen';
import { Image } from 'react-native';
import { CartButton } from './components';

const Stack = createNativeStackNavigator();

export function Routes() {

  const headerOptions: NativeStackNavigationOptions = {
    // eslint-disable-next-line react/no-unstable-nested-components
    headerTitle: () => <Image source={Logo} style={inlineStyles.header} />,
    // eslint-disable-next-line react/no-unstable-nested-components
    headerRight: () => <CartButton />,
  };

  return (
    <NavigationContainer theme={Main}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={headerOptions}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={headerOptions}
          name="CartScreen"
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
