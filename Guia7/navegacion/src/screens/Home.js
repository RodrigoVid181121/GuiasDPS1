import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(props){
    const{navigation} = props;
    return(
        <View>
            <Text>Estamos en Home</Text>
            <Button title='ir a About' onPress={()=>navigation.navigate('About')}></Button>
        </View>
    );
}