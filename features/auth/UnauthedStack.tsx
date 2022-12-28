import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createNativeStackNavigator();

export default function UnauthedStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Sign up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
