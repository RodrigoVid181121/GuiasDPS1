import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Dogs from './DogsStack'
import Cat from './CatStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) =>{
            let icon = '';
            switch(route.name){
                case 'Cats':
                    icon = "logo-octocat";
                    break;
                case 'Dogs':
                    icon = "paw-outline";
                    break;
            }
            return <Icon name={icon} size={size} color={color} />
        }
    })}>
        <Tab.Screen name="Cats" component={Cat} />
        <Tab.Screen name="Dogs" component={Dogs} />
    </Tab.Navigator>
  )
}