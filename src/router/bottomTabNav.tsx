import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCart from '../screens/ShoppingCartScreen/shoppingCart';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={ HomeScreen } name="Home" />
      <Tab.Screen component={ ProductScreen } name="Product" />
      <Tab.Screen component={ ShoppingCart } name="Cart" />
      <Tab.Screen component={ HomeScreen } name="Profile" />
    </Tab.Navigator>
  )
}

export default BottomTabNav
