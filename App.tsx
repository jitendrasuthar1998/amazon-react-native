/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ProductScreen from '../MyApp/src/screens/ProductScreen/ProductScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen/shoppingCart';
import CartProductItem from './src/components/CartProductItem/CartProductItemComponent';
import HomeScreen from './src/screens/HomeScreen';
import AddressScreen from './src/screens/AddressScreen/index';
import Router from './src/router';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={ backgroundStyle }>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />
      <View>
        <Router />
      </View>
    </SafeAreaView>
  );
};

export default App;
