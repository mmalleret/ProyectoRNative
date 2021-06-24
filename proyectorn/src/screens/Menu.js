import React, { Component } from 'react';
import {menuStyle} from '../styles/Styles';

import {
  View,
  Text,
  Animated,
  Easing
} from 'react-native';

export class Menu extends Component {

  position = new Animated.Value(1)
  
  animate = () => {
    Animated.timing(this.position, {
      toValue: 2,
      duration: 1000,
      easing: Easing.easing,
      useNativeDriver: false
    }).start();
  }

  
  render() {
    return(
      <View style={menuStyle.container}>

        <View style={menuStyle.itemAnimated}>
          <Animated.View style={{
            width: '100%',
            backgroundColor: '#7f8662',
            justifyContent: 'center', 
            alignItems: 'center',
            transform: [
              {scale: this.position}
            ]
          }}><Text style={menuStyle.textAnimation} onPress={this.animate}>NeoNemo</Text>
          </Animated.View>
        </View>

        <View style={menuStyle.item}>
          <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('Imports')}>Importar</Text>
          <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('ViewImportedCards')}>Contactos</Text>
          <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('Bin')}>Papelera</Text>
          <Text style={menuStyle.text} onPress={ () => this.props.navigation.navigate('About')}>Acerca de</Text>
        </View>

      </View>

    )
  }
}