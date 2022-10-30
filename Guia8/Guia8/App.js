import React from 'react';
import Home from './Home'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { StyleSheet, Text , View, Button } from 'react-native'
import Web from './Web'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Web:{
    screen: Web
  }
}, {initialRouteName: 'Home'})

export default createAppContainer (AppNavigator)
