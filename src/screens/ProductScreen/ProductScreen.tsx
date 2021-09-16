/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button/button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const ProductScreen = () => {

  const [ selectedOption, setSelectedOption ] = useState( product.options ? product.options[ 0 ] : null );

  const [ quantity, setQuantity ] = useState( 1 );

  // console.log(selectedOption);
  return (
    <ScrollView style={ styles.root }>
      <Text> This is a product Screen.</Text>
      <Text style={ styles.title }>{ product.title }</Text>

      {/* Image Carosul */ }
      <ImageCarousel images={ product.images } />

      {/* Option Selector */ }
      <Picker selectedValue={ selectedOption }
        onValueChange={
          ( itemValue ) => setSelectedOption( itemValue )
        }>
        { product.options.map( ( option, index ) => (
          <Picker.Item key={ index } label={ option } value={ option } />
        ) ) }
      </Picker>

      {/* Price */ }
      <Text style={ styles.price }>from ${ product.price }
        { product.oldPrice && (
          <Text style={ styles.oldprice }>  ${ product.oldPrice }</Text>
        ) }
      </Text>
      {/* Description */ }
      <Text style={ styles.description }>{ product.description }</Text>

      <View>
        <QuantitySelector quantity={ quantity } setQuantity={ setQuantity } />
      </View>

      {/* Buttons */ }
      <View>
        <Button text={ 'Add to Cart' } onPress={ async () => console.log( 'Add to cart pressed' ) }
          containerStyles={ {
            backgroundColor: '#e3c905'
          } }
        />
      </View>
      <View>
        <Button text={ 'Buy Now' } onPress={ async () => console.log( 'Buy now pressed' ) }
          containerStyles={ {} } />
      </View>

    </ScrollView>
  );
};

export default ProductScreen;
