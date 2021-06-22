import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export class Menu extends Component {
  render() {
    return(
      <View>
        <Text onPress={() => this.props.navigation.navigate('Imports')} >Import</Text>
        <Text onPress={() => this.props.navigation.navigate('ViewImportedCards')} >View imported cards</Text>
        <Text onPress={() => this.props.navigation.navigate('Bin')} >Bin</Text>
      </View>
    )
  }
}