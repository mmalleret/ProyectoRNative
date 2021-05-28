import React, { Component } from 'react';
import {styles} from '../Styles';

import { 
  View,
  Text,
  
} from "react-native";

export default class Menu extends Component {
  
constructor() {
  super();
  this.state = {

  }
}  


  render (){
    return (
    <View style={{backgroundColor: 'black'}}>
      <View style={{flex: 1}}><Text style={{color:'white'}}>Buscar</Text></View>
      <View style={{flex: 1}}><Text style={{color:'white'}}>Contactos</Text></View>
      <View style={{flex: 1}}><Text style={{color:'white'}}>Importar</Text></View>
      <View style={{flex: 1}}><Text style={{color:'white'}}>Papelera</Text></View>
      <View style={{flex: 1}}><Text style={{color:'white'}}>Nosotras</Text></View>
    </View>
  
  
  )}  

}
