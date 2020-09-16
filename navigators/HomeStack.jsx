import React from "react";
import { Text } from "react-native";

// React nav
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screens/Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
