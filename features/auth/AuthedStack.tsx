import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '../navigation/BottomTabNavigator';
import InfoScreen from '../../screens/InfoScreen';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function AuthedStack() {
  return (
    <NavigationContainer>
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
              headerRight: () => <BackButton />,
            }}
            component={InfoScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BackButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <AntDesign name="close" size={24} color="black" />
    </Pressable>
  );
}
