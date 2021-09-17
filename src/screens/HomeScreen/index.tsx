/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductItem from '../../components/ProductItem/ProductComponent';

import products from '../../data/products';

const HomeScreen = () => {

  console.warn( 'Home' );

  return (
    // Render product component
    <View style={ styles.page }>
      <FlatList data={ products }
        renderItem={ ( { item } ) => <ProductItem item={ item } /> }
        keyExtractor={ ( { id } ) => id }
        showsVerticalScrollIndicator={ false }
      />
    </View>
  );
};

const styles = StyleSheet.create( {
  page: {
    padding: 10,
    flex: 1,
    backgroundColor: 'red',
  }
} )

export default HomeScreen;

