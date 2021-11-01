/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    margin: 5,
    borderWidth: 1,
    justifyContent: "center",
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 130
  },
  productImage: {
    flex: 1,
    // width: 80,
    // justifyContent: 'center',
    alignItems: 'center',
    // height: 100,
    resizeMode: 'contain',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  rightContainer: {
    padding: 10,
    //backgroundColor: 'red',
    flex: 3,
  },
  title: {
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  oldprice: {
    fontSize: 10,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
} );

export default styles;
