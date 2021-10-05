import React from 'react'
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from '../screens/ShoppingCartScreen/shoppingCart';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ ShoppingCart } name="ShoppingCartScreen" options={ { title: 'Shopping Cart', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, color: 'red', fontFamily: 'sans-serif' } } } />
      <Stack.Screen component={ AddressScreen } name="Address" options={ { title: 'Address', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, color: 'red', fontFamily: 'sans-serif' } } } />
    </Stack.Navigator>
  )
}

export default ShoppingCartStack
