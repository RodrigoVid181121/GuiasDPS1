import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import Card from './Components/card';

const Datos = [
    {
        id: '1',
        titulo: 'Pupusas',
        descripcion: 'Las pupusas son el platillo principal de El Salvador',
        imagen: require('./src/imgs/pupusas.jpg'),
    },
    {
        id: '2',
        titulo: 'Tamales',
        descripcion: 'Un platillo típico reconocido en todo el país, por su variedad',
        imagen: require('./src/imgs/tamales.jpg'),
    },
    {
        id: '3',
        titulo: 'Emapanadas',
        descripcion: 'Plato tipico desarrollado a base de platano, frijoles o leche',
        imagen: require('./src/imgs/empanadas.jpg'),
    },
    {
        id: '4',
        titulo: 'Nuegados',
        descripcion: 'Plato típico que se realiza en base a yuca y miel de abeja',
        imagen: require('./src/imgs/nuegados.jpg'),
    }
];

const Item = ({titulo, img, descripcion}) => (
    <View style={styles.item}>
    <Card>
        <Card>
            <Text style={styles.titulo}>{titulo}</Text>
        </Card>
        <Card>
            <Text style={styles.descripcion}>{descripcion}</Text>
        </Card>
        <Card style={styles.contimg}>
            <Image style={styles.img} source={img}/>
        </Card>
    </Card>
        
    </View>
)

const App = ()=> {
    const render = ({item})=>(
        <Item titulo={item.titulo} img={item.imagen} descripcion={item.descripcion} />
    );

    return(
        <SafeAreaView style={styles.contenedor}>
        <SafeAreaView style={styles.princip}>
            <Text style={styles.textprin}>Platillos típicos de El Salvador</Text>
        </SafeAreaView>
            <FlatList
            data= {Datos}
            renderItem={render}
            keyExtractor={item=>item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#465151',
        color: '#fff',
    },
    contimg: {
        flexDirection: 'row'
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 150,
        alignItems: 'center',
        flexDirection: 'row',
    },
    descripcion: {
        fontSize: 18,
        color: '#fff',
        backgroundColor: '#849293',
        textAlign: 'center',
    },
    princip: {
        backgroundColor: '#79756C'
    },
    textprin: {
        fontSize: 25,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent("ejercicio", () => App);