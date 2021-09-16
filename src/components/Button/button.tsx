import React from "react";
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => {};
  containerStyles: object
}

const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
  console.log('Text is of button.tsx == ', text);
  console.log('onPress is button.tsx == ', onPress);
  console.log('containerStyles is button.tsx == ', containerStyles)
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
    color: 'white',
  }
})

export default Button;
