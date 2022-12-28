import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { useTheme } from 'styled-components/native';
import { screenOptions } from '../navigation/screen-options';

const Stack = createNativeStackNavigator();

export default function UnauthedStack() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: theme.colors.global.primary,
        },
      }}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Sign up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
