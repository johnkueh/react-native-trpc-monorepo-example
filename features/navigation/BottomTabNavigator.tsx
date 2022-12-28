import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import AccountScreen from "../../screens/AccountScreen";
import HomeScreen from "../../screens/HomeScreen";
import HomeStack from "./HomeStack";

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      <BottomTab.Screen
        name="Home Tab"
        component={HomeStack}
        options={({ navigation }) => ({
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation }) => ({
          title: "Account",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
}
