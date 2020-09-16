import { StatusBar } from "expo-status-bar";
import React from "react";

// React nav
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./navigators/HomeStack";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
