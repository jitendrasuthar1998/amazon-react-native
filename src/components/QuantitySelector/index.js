import React from 'react';
import { View,Text,Pressable,StyleSheet } from 'react-native';

const QuantitySelector = ({ quantity,setQuantity }) =>
{

  // console.log('quantity is from parent Component',quantity)
  // console.log('setQuantity is from parent Component',setQuantity)

  const onMinus = () =>
  {
    setQuantity(Math.max(0,quantity - 1));
  }

  const onPlus = () =>
  {
    setQuantity(quantity + 1);
  }

  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onMinus}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#d1d1d1'
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
    fontSize: 20
  },
})

export default QuantitySelector;