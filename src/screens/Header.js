import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Dots from 'react-native-vector-icons/dist/Entypo';
import Logout from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity>
        <Dots name="dots-three-vertical" size={30} color="white" />
      </TouchableOpacity>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Header</Text>
      <TouchableOpacity>
        <Logout name="dots-three-vertical" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
