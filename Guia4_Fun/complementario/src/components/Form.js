import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select/src/index';
import colors from '../utils/colors';


export default function Form(props) {
 const {setNombre, setSueldo} = props;
 return (
 <View style={styles.viewForm}>
 <View style={styles.viewInputs}>
 <TextInput placeholder="Nombre del Empleado" keyboardType="default" style={styles.input} onChange={(e) => setNombre(e.nativeEvent.text)} />
 <TextInput placeholder="Sueldo Base" keyboardType="numeric" style={[styles.inputSueldo]} onChange={(e) => setSueldo(e.nativeEvent.text)}/>
 </View>
 </View>
 );
}
const styles = StyleSheet.create({
 viewForm: {
 position: 'absolute',
 bottom: 0,
 width: '85%',
 paddingHorizontal: 50,
 backgroundColor: colors.PRIMARY_COLOR_DARK,
 borderRadius: 30,
 height: 180,
 justifyContent: 'center',
 },
 viewInputs: {
 flexDirection: 'column',
 alignItems: 'center',
 },
 input: {
 height: 50,
 backgroundColor: '#fff',
 borderWidth: 1,
 borderColor: colors.PRIMARY_COLOR,
 borderRadius: 5,
 width: '100%',
 marginRight: 5,
 marginLeft: -5,
 marginBottom: 10,
 color: '#000',
 paddingHorizontal: 20,
 },
 inputSueldo: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
    },
});
