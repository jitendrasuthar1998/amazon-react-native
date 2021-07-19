/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View } from 'react-native';
import ProductItem from '../../components/ProductItem/ProductComponent';

import products from '../../data/products';

const HomeScreen = () => {

  return (
    // Render product component
    <View>
      <FlatList data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
