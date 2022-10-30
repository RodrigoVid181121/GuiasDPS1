/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Modal, Button, TouchableHighlight, Text } from 'react-native';

const App = () =>{
  const [modalVisiblePlaya, setModalvisiblePlaya] = useState(false);
  return(
    <>
      <ScrollView>
        <Modal transparent={true} animationType= 'slide' visible={modalVisiblePlaya} onRequestClose={() => {alert('Modal has been closed')}} >
          <View style={styles.vistamodal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel de Centroamerica</Text>
              <Button title='Cerrar' onPress={() => (setModalvisiblePlaya(!modalVisiblePlaya))}></Button>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.banner} source={require('./src/princip.jpg')}/>
        </View>

        <View style={styles.contenedor}>
            <Text style={styles.titulo}>¿Que hacer en El Salvador?</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight onPress={() => {setModalvisiblePlaya(!modalVisiblePlaya)}}>
                <Image style={styles.ciudad} source={require('./src/act1.jpg')}/>
                </TouchableHighlight>
              </View>
              <View>
              <TouchableHighlight onPress={() => {setModalvisiblePlaya(!modalVisiblePlaya)}}>
                <Image style={styles.ciudad} source={require('./src/act2.jpg')}/>
                </TouchableHighlight>
              </View>
              <View>
                <Image style={styles.ciudad} source={require('./src/act3.jpg')}/>
              </View>
              <View>
                <Image style={styles.ciudad} source={require('./src/act4.jpg')}/>
              </View>
              <View>
                <Image style={styles.ciudad} source={require('./src/act5.jpg')}/>
              </View>
            </ScrollView>

            <Text style={styles.titulo}>Platillos Tipicos</Text>
            <View>
              <View>
                <Image style={styles.mejores} source={require('./src/plat1.jpg')} />
              </View>
              <View>
                <Image style={styles.mejores} source={require('./src/plat2.jpg')} />
              </View>
              <View>
                <Image style={styles.mejores} source={require('./src/plat3.jpg')} />
              </View>
            </View>

            <Text style={styles.titulo}>Rutas Turisticas</Text>
            <View style={styles.listado}>
              <View style={styles.listadoItem}>
                <Image style={styles.mejores} source={require('./src/ruta1.jpg')} />
              </View>
              <View style={styles.listadoItem}>
                <Image style={styles.mejores} source={require('./src/ruta2.jpg')} />
              </View>
              <View style={styles.listadoItem}>
                <Image style={styles.mejores} source={require('./src/ruta3.jpg')} />
              </View>
              <View style={styles.listadoItem}>
                <Image style={styles.mejores} source={require('./src/ruta4.jpg')} />
              </View>
            </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listadoItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistamodal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  }
});

export default App;
