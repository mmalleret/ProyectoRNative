import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container'

import { 
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default class Screen_ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: [],

  }
}  

async getData() {
  try{
    
    const resultado = await AsyncStorage.getItem('contactos');
    
    const jsonValue = JSON.parse(resultado)
    if (Array.isArray(jsonValue)) {
      this.setState({contactosImportados: jsonValue})
    } else{
      this.setState({contactosImportados:[jsonValue]})
    }
    

  }catch(e){
    console.log(e)
  }
}



  render (){
    return (
    <View>
      <Container contactos={this.state.contactosImportados}/>
      <TouchableOpacity onPress={this.getData.bind(this)}>
        <Text>Contactos importados</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ ()=> this.setState({contactosImportados: []})}>
        <Text>Eliminar contactos</Text>
      </TouchableOpacity>
    </View>
  
  
  )}  

}