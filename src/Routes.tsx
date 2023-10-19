import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './styles/GlobalStyles';

import { HomeScreen } from './screen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer theme={Main}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
