import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cart</Text>
      </View>
    );
  }
}

export default Cart;
