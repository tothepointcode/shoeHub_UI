import { StatusBar } from 'expo-status-bar';
import React from 'react';

// React nav
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigators/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
