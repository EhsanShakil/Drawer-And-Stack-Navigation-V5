import React from 'react';
import {View, Text, Button} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is a Home Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
};

export default Home;
