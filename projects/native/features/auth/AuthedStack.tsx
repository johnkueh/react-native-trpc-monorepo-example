import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'styled-components/native';
import AddGreetingScreen from '../../screens/AddGreetingScreen';
import EditGreetingScreen from '../../screens/EditGreetingScreen';
import InfoScreen from '../../screens/InfoScreen';
import { BottomTabNavigator } from '../navigation/BottomTabNavigator';
import { ModalCloseButton } from '../navigation/ModalCloseButton';

export type AuthedStackParamList = {
  'Tab Home': undefined;
  InfoModal: undefined;
  AddGreetingModal: undefined;
  EditGreetingModal: { id: number } | undefined;
};

const Stack = createNativeStackNavigator<AuthedStackParamList>();

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
          <Stack.Screen
            name="AddGreetingModal"
            options={{
              title: 'Add greeting',
              headerRight: () => <ModalCloseButton />,
            }}
            component={AddGreetingScreen}
          />
          <Stack.Screen
            name="EditGreetingModal"
            options={{
              title: 'Edit greeting',
              headerRight: () => <ModalCloseButton />,
            }}
            component={EditGreetingScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
