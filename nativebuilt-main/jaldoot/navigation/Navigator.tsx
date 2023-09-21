import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsOverview from "../screens/NewsOverview";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Saved from "../screens/Saved";
import Report from "../screens/Report";
function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Icons
                name={props.focused ? "home" : "home-outline"}
                {...props}
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon(props) {
            return (
              <Icons
                name={props.focused ? "map-marker" : "map-marker-outline"}
                {...props}
              />
            );
          },
        }}
        name="Maps"
        component={Saved}
      />
      <Tab.Screen name="Report" component={Report} />
    </Tab.Navigator>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="NewsOverview" component={NewsOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
