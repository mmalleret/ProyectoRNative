import React, { Component } from 'react';
import {menuStyle} from '../styles/Styles';

import {
  View,
  Text
} from 'react-native';

export class Menu extends Component {
  
  render() {
    return(
      <View style={menuStyle.container}>
        <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('Imports')}>Importar</Text>
        <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('ViewImportedCards')}>Contactos</Text>
        <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('Bin')}>Papelera</Text>
        <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('About')}>Acerca de</Text>
      </View>
    )
  }
}