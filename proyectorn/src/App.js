import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text
} from 'react-native';
import { Menu } from './screens/Menu';
import { Imports } from './screens/Imports';
import { ViewImportedCards } from './screens/ViewImportedCards';
import { Bin } from './screens/Bin';

const Stack = createStackNavigator();

export default class App extends Component {

  render (){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={ Menu } />
          <Stack.Screen name="Imports" component={ Imports } />
          <Stack.Screen name="ViewImportedCards" component={ ViewImportedCards } />
          <Stack.Screen name="Bin" component={ Bin } />
        </Stack.Navigator>
      </NavigationContainer>
  )}  
  }
