import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Header</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
