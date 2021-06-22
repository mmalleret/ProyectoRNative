import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export class Menu extends Component {
  
  render() {
    return(
      <View>
        <Text>soy el menu hola</Text>
        <Text onPress={ () => this.props.navigation.navigate('Imports')}>Importar</Text>
        <Text onPress={ () => this.props.navigation.navigate('ViewImportedCards')}>Contactos</Text>
        <Text onPress={ () => this.props.navigation.navigate('Bin')}>Papelera</Text>
      </View>
    )
  }
}