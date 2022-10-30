import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';


export default class Web extends React.Component{
    sitio = this.props.navigation.getParam('sitio')

    lugares = {
        sanandres:"https://www.google.com/maps/place/Sitio+Arqueológico+San+Andrés/@13.796"
        ,
        joyaceren:"https://www.google.com/maps/place/Joya+de+Ceren/@13.8212866,-89.3642815,16z/data=!3m1"
        ,
        casablanca:"https://www.google.com/maps/place/Sitio+Arqueológico+de+Casa+Blanca/@13.98796"
        }
        
    
    render(){
        console.log(this["lugares"][this.sitio])
        return(
            <WebView style={styles.webSize} source={{ uri: this["lugares"][this.sitio] }}>

            </WebView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
        webSize:{
        width: "100%",
        height: "100%"
        }
        
})