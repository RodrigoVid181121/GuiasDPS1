import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Cat() {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.card}>
        <View>
        <Image style={styles.image} source={require('../src/images/Cats/birmano.jpg')} />
        </View>
        
        <View>
            <Text style={styles.title}>Gato Birmano</Text>
            <Text style={styles.subtitulo}>Myanmar, Francia</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
        <Image style={styles.image} source={require('../src/images/Cats/bosque.jpg')} />
        </View>
        
        <View>
            <Text style={styles.title}>Gato Bosque de Noruega</Text>
            <Text style={styles.subtitulo}>Noruega</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
        <Image style={styles.image} source={require('../src/images/Cats/chinchilla.jpg')} />
        </View>
        
        <View>
            <Text style={styles.title}>Gato Chinchilla</Text>
            <Text style={styles.subtitulo}>Inglaterra</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View>
        <Image style={styles.image} source={require('../src/images/Cats/cymric.jpg')} />
        </View>
        
        <View>
            <Text style={styles.title}>Gato Cymric</Text>
            <Text style={styles.subtitulo}>Isla de Man, Canadá</Text>
        </View>
      </View>
      <View style={styles.card}>
      <View>
      <Image style={styles.image} source={require('../src/images/Cats/munchkin.jpg')} />
      </View>
        
        <View>
            <Text style={styles.title}>Gato Munchkin</Text>
            <Text style={styles.subtitulo}>Estados Unidos</Text>
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
        width: 125,
        height: 125
    }
})