import { StyleSheet } from "react-native"

const styles = StyleSheet.create( {
  root: {
    padding: 10,
    // backgroundColor: 'red' 
  },
  row: {
    marginVertical: 5,
    // backgroundColor: 'yellow'
  },
  label: { fontSize: 12, fontWeight: 'bold', padding: 5 },
  input: { backgroundColor: 'white', height: 40, padding: 5, marginVertical: 10, borderWidth: 2, borderRadius: 2, borderColor: 'lightgrey' },
  errorLabel: {
    color: 'red',
  }
} )

export default styles;