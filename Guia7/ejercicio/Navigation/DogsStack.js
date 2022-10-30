import Dogs from '../screens/Dogs'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function DogsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Dogs' component={Dogs} />
    </Stack.Navigator>
  )
}