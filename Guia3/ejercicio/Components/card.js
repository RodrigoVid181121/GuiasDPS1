import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
        <View style={styles.bodycard}>
            {props.children}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 1,
        backgroundColor: '#29EBF5',
        shadowOffset: {width: 5, height: 5},
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 2,
        marginVertical: 2,
    },
    bodycard: {
        marginHorizontal: 5,
        marginVertical: 5, 
    }
});