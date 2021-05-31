import React, { Component } from 'react';
import Container from '../components/Container'

import { 
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

export default class Screen_ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: []

  }
}  

async getData() {
  try{
     const resultado = await AsyncStorage.getItem('contactos');

  }catch(e){
    console.log(e)
  }
}

  render (){
    return (
    <View>
    <Container
      contactos={this.state.contactos}></Container>
    <TouchableOpacity onPress={this.storeData.bind(this)}>
      <View></View>
    </TouchableOpacity>
    </View>
  
  
  )}  

}