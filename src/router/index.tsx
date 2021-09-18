import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './bottomTabNav';

import { createStackNavigator } from '@react-navigation/stack';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={ { headerShown: false } }>
        <Root.Screen component={ BottomTabNav } name="HomeTabs" />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Router
