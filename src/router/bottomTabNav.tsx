import React from 'react'


import HomeScreen from '../screens/HomeScreen';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
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
      <Tab.Screen component={ ShoppingCartStack } name="Cart" options={ {
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
