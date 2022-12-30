import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useTheme } from 'styled-components/native';
import AccountScreen from '../../screens/AccountScreen';
import DebugScreen from '../../screens/DebugScreen';
import DetailScreen from '../../screens/DetailScreen';
import HomeScreen from '../../screens/HomeScreen';
import UpdateUserScreen from '../../screens/UpdateUserScreen';
import { screenOptions } from './screen-options';

const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

export function BottomTabNavigator() {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.global.primary,
      }}>
      <BottomTab.Screen
        name="Home Tab"
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}>
        {(prop) => (
          <HomeStack.Navigator screenOptions={screenOptions}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Detail" component={DetailScreen} />
          </HomeStack.Navigator>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Account Tab"
        options={({ navigation }) => ({
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        })}>
        {(prop) => (
          <AccountStack.Navigator screenOptions={screenOptions}>
            <AccountStack.Screen name="Account" component={AccountScreen} />
            <AccountStack.Screen name="Update User" component={UpdateUserScreen} />
            <AccountStack.Screen
              name="Debug"
              options={{
                title: 'Debug 😈',
              }}
              component={DebugScreen}
            />
          </AccountStack.Navigator>
        )}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />;
}
