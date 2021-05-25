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
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={{flex: 1}} ><Text>{this.props.nombre} {this.props.apellido} </Text></View>
        <View style={{flex: 1}}><Text>{this.props.edad}</Text></View> 
        <View style={{flex: 1}}><Text>{this.props.mail}</Text></View>
        <View style={{flex: 1}}><Text>{this.props.fecha}</Text></View> 
        <View style={{flex: 1}}><Text>{this.props.registro}</Text></View>
        <View style={{flex: 1}}><Text>{this.props.telefono}</Text></View> 
    </View>
  
  
  )}  

}

