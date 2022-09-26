import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text,StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import { resetWarningCache } from 'prop-types';

export default function App(){
  const[nombre,setNombre] = useState(null);
  const[sueldo,setSueldo] = useState(null);
  const [total,setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
    if(nombre && sueldo) calculate();
    else reset();
  }, [nombre,sueldo]);
  
  const calculate = () => {
    reset();

    if(!nombre)
    {
      setErrorMessage("Añade el nombre del empleado");
    } else if(!sueldo)
    {
      setErrorMessage("Añade el sueldo base del empleado");
    }  else{
      const afp = Math.round((sueldo*0.04),2);
      const isss = Math.round((sueldo*0.03),2);
      const renta =Math.round((sueldo*0.05),2);
      const total = sueldo - afp - isss - renta;
      setTotal({
        AFPDes: afp.toFixed(2).replace('.',','),
        ISSDes: isss.toFixed(2).replace('.',','),
        RentaDes: renta.toFixed(2).replace('.',','),
        totalPayable: total.toFixed(2).replace('.',','),
      });
    }
  };

  const reset=() =>{
    setErrorMessage("");
    setTotal(null);
  }
return(
 <>
 <StatusBar barStyle="light-content" />
 <SafeAreaView style={styles.Header}>
 <Text style={styles.HeadApp}>Calculadora de Descuentos</Text>
 <Form 
  setNombre = {setNombre}
  setSueldo = {setSueldo}
 />
 </SafeAreaView>
 <Result 
  nombre = {nombre}
  sueldo = {sueldo}
  total = {total}
  errorMessage = {errorMessage}
 />
 <View>
 </View>
 <View>
 </View>
 </>
);
}
const styles = StyleSheet.create({
 Header:{
 backgroundColor: colors.PRIMARY_COLOR,
 height:200,
 borderBottomLeftRadius:30,
 borderBottomRightRadius:30,
 alignItems:'center'
 },
 HeadApp:{
  fontSize: 25,
  fontWeight: 'bold',
  color: "#fff",
  marginTop: 15
 }
})
