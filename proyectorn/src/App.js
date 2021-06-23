import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Menu} from './screens/Menu';
import {Imports} from './screens/Imports';
import {ViewImportedCards} from './screens/ViewImportedCards';
import {Bin} from './screens/Bin';
import { About } from './screens/About';

const Stack = createStackNavigator();

export default class App extends Component {

  render (){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#7f8662'},
          headerTintColor: '#f6c9ae', 
          }} >
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Imports" component={Imports} options={{title: "Importar"}} />
          <Stack.Screen name="ViewImportedCards" component={ViewImportedCards} options={{title: "Contactos"}} />
          <Stack.Screen name="Bin" component={Bin} options={{title: "Papelera"}} />
          <Stack.Screen name="About" component={About} options={{title: "Acerca de"}} />
        </Stack.Navigator>
      </NavigationContainer>

  )}  
  }
