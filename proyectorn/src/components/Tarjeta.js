import React, { Component } from 'react';
import {stylesTarjeta} from '../styles/Styles';

import { 
    Text,
    View,
    Image, 

} from "react-native";

export default class Tarjeta extends Component {

  render (){
    return (
    <View  style={stylesTarjeta.container}>
      <View style={stylesTarjeta.diseñoTarjeta}>
        <Image style={stylesTarjeta.image} source={{uri: this.props.foto}}/>
        <View style={stylesTarjeta.item}><Text> {this.props.apellido} {this.props.nombre}</Text></View> 
        <View style={stylesTarjeta.item}><Text>{this.props.mail}</Text></View>
        <View style={stylesTarjeta.item}><Text>{this.props.fecha} ({this.props.edad})</Text></View> 
      
      </View>
    </View>
  
  )}  

}
