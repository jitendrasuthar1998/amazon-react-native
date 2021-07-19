/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const ProductItem = ({ item }: ProductItemProps) => {

  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={{ uri: item.image }} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>{item.title}</Text>

        <View style={styles.ratingContainer}>
          {
            [0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'} />
            ))
          }
        </View>

        <Text style={styles.price}>from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldprice}>  ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
