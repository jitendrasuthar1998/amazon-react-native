/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'


interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ( { item }: ProductItemProps ) => {

  const navigation = useNavigation();

  const onPress = () => {
    console.warn( 'Item Pressed' )
    navigation.navigate( 'ProductScreen', { id: item.id } )
  }


  return (
    <Pressable onPress={ onPress } style={ styles.container }>
      <Image style={ styles.productImage } source={ { uri: item.image } } />
      <View style={ styles.rightContainer }>
        <Text style={ styles.title } numberOfLines={ 3 }>{ item.title }</Text>

        <View style={ styles.ratingContainer }>
          {
            [ 0, 0, 0, 0, 0 ].map( ( el, i ) => (
              <FontAwesome
                key={ `${ item.id }-${ i }` }
                style={ styles.star }
                name={ i < Math.floor( item.avgRating ) ? 'star' : 'star-o' }
                size={ 18 }
                color={ '#e47911' } />
            ) )
          }
        </View>

        <Text style={ styles.price }>from ${ item.price }
          { item.oldPrice && (
            <Text style={ styles.oldprice }>  ${ item.oldPrice }</Text>
          ) }
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
