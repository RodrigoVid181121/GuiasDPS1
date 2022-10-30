import Cat from '../screens/Cat';
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function DogsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Cats' component={Cat} />
    </Stack.Navigator>
  )
}