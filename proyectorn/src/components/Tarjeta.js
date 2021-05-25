import React, { Component } from 'react';
import {styles} from '../Styles';

import { 
    Text,
    View,

} from "react-native";

export default class Tarjeta extends Component {
  
constructor() {
  super();
  this.state = {

  }
}  


  render (){
    return (
    <View>
      <Text>{this.props.nombre} {this.props.apellido} </Text>
      <Text>{this.props.edad}</Text>
      <Text>{this.props.mail}</Text>
      <Text>{this.props.fecha}</Text>
      <Text>{this.props.registro}</Text>
      <Text>{this.props.telefono}</Text>
    </View>
  
  
  )}  

}

