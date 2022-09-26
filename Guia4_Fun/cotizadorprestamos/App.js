import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text,StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import { resetWarningCache } from 'prop-types';

export default function App(){
  const[capital,setCapital] = useState(null);
  const[interest,setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total,setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
    if(capital && interest && months) calculate();
    else reset();
  }, [capital,interest,months]);
  
  const calculate = () => {
    reset();

    if(!capital)
    {
      setErrorMessage("Añade la cantidad que deseas solicitar");
    } else if(!interest)
    {
      setErrorMessage("Añade el interes del prestamo");
    } else if(!months)
    {
      setErrorMessage("Añade la cantidad de meses del prestamo");
    } else{
      const i = interest/100;
      const fee = capital /((1-Math.pow(i+1,-months))/i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.',','),
        totalPayable: (fee*months).toFixed(2).replace('.',','),
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
 <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
 <Form 
  setCapital = {setCapital}
  setInterest = {setInterest}
  setMonths = {setMonths}
 />
 </SafeAreaView>
 <Result 
  capital = {capital}
  interest = {interest}
  months = {months}
  total = {total}
  errorMessage = {errorMessage}
 />
 <View>
 <Text>Result</Text>
 </View>
 <Footer></Footer>
 <View>
 <Text>Footer</Text>
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
