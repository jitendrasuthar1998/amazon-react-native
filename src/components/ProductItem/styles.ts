/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor:'#fff',
  },
  productImage: {
    flex: 2,
    height: 150,
    resizeMode:'contain',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:5,
  },
  star: {
    margin:2,
  },
  rightContainer: {
    padding: 10,
    //backgroundColor: 'red',
    flex:3,
  },
  title: {
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
  price: {
    fontSize:18,
    fontWeight:'bold',
  },
  oldprice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine:'line-through',
  },
});

export default styles;
