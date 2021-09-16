import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../AddressScreen/styles';
const AddressScreen = () => {
  return (
    <View>
      <View style={styles.row}>
        <Picker>
          <Picker.Item value="India" label="India" />
          <Picker.Item value="USA" label="USA" />
          <Picker.Item value="Russia" label="Russia" />
        </Picker>
      </View>
    </View>
  )
}

export default AddressScreen;