import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCart from '../screens/ShoppingCartScreen/shoppingCart';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Router = () => {
  return (
    <NavigationContainer>
      <ProductScreen />
    </NavigationContainer>
  )
}

export default Router
