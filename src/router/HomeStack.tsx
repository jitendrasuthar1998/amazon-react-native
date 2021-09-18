import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ HomeScreen } name="HomeScreen" options={ { title: 'Home', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, color: 'red', fontFamily: 'sans-serif' } } } />
      <Stack.Screen component={ ProductScreen } name="ProductScreen" />
    </Stack.Navigator>
  )
}

export default HomeStack
