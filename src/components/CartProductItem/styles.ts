/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 18,
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  productImage: {
    flex: 2,
    height: 150,
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
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldprice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantitySelector: {
    // justifyContent: 'center',
    // alignContent: 'center',
    left: 5,
    // backgroundColor: 'red',
    marginVertical: 10,
  }
});

export default styles;
