import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../AddressScreen/styles';
import countryList from 'country-list'

const countries = countryList.getData();
console.log( countries )
const AddressScreen = () => {

  const [ country, setCountry ] = useState( countries[ 0 ].code )

  const [ fullName, setFullName ] = useState( '' )

  const [ phone, setPhone ] = useState( '' );

  const [ address, setAddress ] = useState( '' );

  const [ city, setCity ] = useState( '' );
  // console.log( country )

  console.log( fullName )
  console.log( phone )


  return (
    <View style={ styles.root }>
      {/* Country List */ }
      <View style={ styles.row }>
        <Text style={ styles.label }>Country</Text>
        <Picker selectedValue={ country } onValueChange={ setCountry }>
          {
            countries.map( country => <Picker.Item key={ country } value={ country.code } label={ country.name } /> )
          }
        </Picker>
      </View>

      {/* Full Name */ }
      <View style={ styles.row }>
        <Text style={ styles.label }>Full Name (First Name and Last Name)</Text>

        <TextInput style={ styles.input } placeholder="Full Name"
          value={ fullName }
          onChangeText={ setFullName }
          keyboardType="default"
        />
      </View>

      {/* Phone Number */ }
      <View style={ styles.row }>
        <Text style={ styles.label }>Phone Number</Text>

        <TextInput style={ styles.input } placeholder="Enter your number"
          value={ phone }
          onChangeText={ setPhone }
          keyboardType='number-pad'
        />
      </View>

      {/* Address */ }
      <View style={ styles.row }>
        <Text style={ styles.label }>Address</Text>

        <TextInput style={ styles.input } placeholder="Enter your address"
          value={ address }
          onChangeText={ setAddress }
          keyboardType="default"
        />
      </View>

      {/* City */ }
      <View style={ styles.row }>
        <Text style={ styles.label }>City</Text>

        <TextInput style={ styles.input } placeholder="Enter your City"
          value={ city }
          onChangeText={ setCity }
          keyboardType="default"
        />
      </View>
    </View>
  )
}

export default AddressScreen;