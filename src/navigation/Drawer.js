import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './Stack';
import React from 'react';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="StackNavigator">
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
