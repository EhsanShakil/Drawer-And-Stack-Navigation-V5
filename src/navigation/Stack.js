import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import React from 'react';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
