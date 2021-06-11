import React, { Component } from 'react';
import {stylesTarjeta} from '../styles/Styles';

import { 
    Text,
    View,

} from "react-native";

export default class Tarjeta extends Component {

  render (){
    return (
    <View  style={stylesTarjeta.container}>
      <View style={stylesTarjeta.diseñoTarjeta}>

        <View style={stylesTarjeta.item}><Text> {this.props.apellido} {this.props.nombre}</Text></View> 
        <View style={stylesTarjeta.item}><Text>{this.props.mail}</Text></View>
        <View style={stylesTarjeta.item}><Text>{this.props.fecha} ({this.props.edad})</Text></View> 
      
      </View>
    </View>
  
  )}  

}



//{}
//#