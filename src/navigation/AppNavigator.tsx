import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';

export const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Acceso" component={Screen1} />
        <Stack.Screen name="Divisiones" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

