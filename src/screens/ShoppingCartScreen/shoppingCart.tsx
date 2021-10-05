import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Component and other projects file imports are here.
import CartProductItem from '../../components/CartProductItem/CartProductItemComponent';
import products from '../../data/cart';
import Button from '../../components/Button/button';

const ShoppingCart = () => {

  const navigation = useNavigation();

  const address = 'Address';

  const onCheckOut = () => {
    navigation.navigate( 'Address' )
  }

  const totalPrice = products.reduce(
    ( summedPrice, product ) =>
      summedPrice + product.item.price * product.quantity,
    0,
  )

  return (
    <View style={ styles.page }>
      {/* render cartProductItem components */ }
      <View>
        <Text style={ { fontSize: 18, fontWeight: 'bold' } }>
          Subtotal ({ products.length } items): { ' ' }
          <Text style={ { color: '#e47911' } }>
            ${ totalPrice.toFixed( 2 ) }
          </Text>
        </Text>
        <Button text='Proceed to checkout' onPress={ async () => onCheckOut() }
          containerStyles={ { backgroundColor: 'red', borderColor: '#c7b702', borderWidth: 1 } } />
      </View>
      <FlatList
        data={ products }
        renderItem={ ( { item } ) =>
        (
          <CartProductItem cartItem={ item } />
        )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create( {
  page: {
    padding: 10,
  }
} )

export default ShoppingCart;