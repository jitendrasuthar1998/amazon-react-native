import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './bottomTabNav';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen component={ BottomTabNav } name="HomeTabs" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
