import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screens/Contact';

const Stack = createStackNavigator();

export default function ContactStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contact} options={{tittle:'Contact'}} />
        </Stack.Navigator>
    );
}