import React, { useState } from 'react'
import { Text, View, TextInput, SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

import Feather from 'react-native-vector-icons/Feather'

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ( { searchValue, setSearchValue }: HeaderComponentProps ) => {
  return (
    <SafeAreaView style={ { backgroundColor: '#22e3dd' } } >
      <StatusBar backgroundColor="#22e3dd" barStyle="dark-content" />
      <View style={ { flexDirection: 'row', alignItems: 'center', margin: 10, padding: 5, backgroundColor: 'white', borderRadius: 5, elevation: 10 } }>
        <Feather name="search" size={ 18 } style={ { left: 5 } } color="black" />
        <TextInput style={ { height: 40, padding: 5, marginLeft: 10 } } placeholder="Search here." value={ searchValue } onChangeText={ setSearchValue } />
      </View>
    </SafeAreaView >
  )
}

const HomeStack = () => {

  const [ searchValue, setSearchValue ] = useState( '' )

  return (
    <Stack.Navigator screenOptions={ { header: () => <HeaderComponent searchValue={ searchValue } setSearchValue={ setSearchValue } /> } }>
      {/* putting header in center of Navbar */ }
      <Stack.Screen name="HomeScreen">{ () => <HomeScreen searchValue={ searchValue } /> }</Stack.Screen>
      {/* {options={ { title: 'Home', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, color: 'red', fontFamily: 'sans-serif' } }} */ }
      <Stack.Screen component={ ProductScreen } name="ProductScreen" />
    </Stack.Navigator>
  )
}

export default HomeStack
