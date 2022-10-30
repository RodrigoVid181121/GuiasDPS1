import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import AboutStack from './AboutStack';

const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeStack} options={{tittle:'Home'}}/>
            <Stack.Screen name="About" component={AboutStack} options={{tittle:'About'}}/>
            <Stack.Screen name="Contact" component={ContactStack} options={{tittle:'Contact'}}/>
        </Stack.Navigator>
    );
}