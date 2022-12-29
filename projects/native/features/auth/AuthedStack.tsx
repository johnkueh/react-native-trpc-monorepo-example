import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '../navigation/BottomTabNavigator';
import InfoScreen from '../../screens/InfoScreen';
import { useTheme } from 'styled-components/native';
import { ModalCloseButton } from '../navigation/ModalCloseButton';

const Stack = createNativeStackNavigator();

export default function AuthedStack() {
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
      <Stack.Navigator>
        <Stack.Screen
          name="Tab Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="InfoModal"
            options={{
              title: 'Info',
              headerRight: () => <ModalCloseButton />,
            }}
            component={InfoScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
