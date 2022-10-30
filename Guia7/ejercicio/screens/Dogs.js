import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Dogs() {
  return (
    <ScrollView style={styles.Container}>
        <View style={styles.card}>
            <View>
                <Image style={styles.image} source={require('../src/images/Dogs/chow.jpg')} />
            </View>
            <View>
                <Text style={styles.title}>Chow Chow</Text>
                <Text style={styles.subtitulo}>Norte de China</Text>
            </View>
        </View>
        <View style={styles.card}>
            <View>
                <Image style={styles.image} source={require('../src/images/Dogs/akita.jpg')} />
            </View>
            <View>
                <Text style={styles.title}>Akita Inu</Text>
                <Text style={styles.subtitulo}>Japón</Text>
            </View>
        </View>
        <View style={styles.card}>
            <View>
                <Image style={styles.image} source={require('../src/images/Dogs/shiba.jpg')} />
            </View>
            <View>
                <Text style={styles.title}>Shiba Inu</Text>
                <Text style={styles.subtitulo}>Japón</Text>
            </View>
        </View>
        <View style={styles.card}>
            <View>
                <Image style={styles.image} source={require('../src/images/Dogs/husky.jpg')} />
            </View>
            <View>
                <Text style={styles.title}>Husky Siberiano</Text>
                <Text style={styles.subtitulo}>Siberia</Text>
            </View>
        </View>
        <View style={styles.card}>
            <View>
                <Image style={styles.image} source={require('../src/images/Dogs/bernardo.jpg')} />
            </View>
            <View>
                <Text style={styles.title}>San Bernardo</Text>
                <Text style={styles.subtitulo}>Suiza</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    Container:{
        padding: 2,
        margin: 10,
    },
    card:{
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitulo:{
        fontSize: 18,
        fontStyle: 'italic'
    },
    image:{
        width: 175,
        height: 175
    }
})