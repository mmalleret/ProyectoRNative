import React, { Component } from 'react';
import {cardStyle} from '../styles/Styles';

import { 
    Text,
    View,
    Image, 

} from "react-native";

export default class Tarjeta extends Component {

  render (){
    return (
    <View  style={cardStyle.container}>
      <View style={cardStyle.diseñoTarjeta}>
        <Image style={cardStyle.image} source={{uri: this.props.foto}}/>
        <View style={cardStyle.item}><Text> {this.props.apellido} {this.props.nombre}</Text></View> 
        <View style={cardStyle.item}><Text>{this.props.mail}</Text></View>
        <View style={cardStyle.item}><Text>{this.props.fecha} ({this.props.edad})</Text></View> 
      
      </View>
    </View>
  
  )}  

}
