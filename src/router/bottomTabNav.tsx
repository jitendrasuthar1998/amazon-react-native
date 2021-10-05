import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCart from '../screens/ShoppingCartScreen/shoppingCart';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import HomeStack from './HomeStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo'
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={ { headerShown: false, tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'grey' } }>
      <Tab.Screen component={ HomeStack } name="HomeStack"
        options={ {
          tabBarIcon: ( { color } ) => (
            <Entypo name="home" color={ color } size={ 19 } />
          )
        } }
      />
      <Tab.Screen component={ HomeScreen } name="User" options={ {
        tabBarIcon: ( { color } ) => (
          <Entypo name="user" color={ color } size={ 19 } />
        )
      } } />
      <Tab.Screen component={ ShoppingCart } name="Cart" options={ {
        tabBarIcon: ( { color } ) => (
          <Entypo name="shopping-cart" color={ color } size={ 19 } />
        )
      } } />
      <Tab.Screen component={ HomeScreen } name="Profile" options={ {
        tabBarIcon: ( { color } ) => (
          <Entypo name="menu" color={ color } size={ 19 } />
        )
      } } />
    </Tab.Navigator>
  )
}

export default BottomTabNav
