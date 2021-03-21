import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/Drawer';
import StackNavigator from './src/navigation/Stack';
import Home from './src/screens/Home';

const App = () => {
  return (
    // <NavigationContainer>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <Home />
  );
};

export default App;
