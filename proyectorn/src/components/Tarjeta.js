import React, { Component } from 'react';
import {stylesTarjeta} from '../styles/Styles';

import { 
    Text,
  TouchableOpacity,
    View,

} from "react-native";

export default class Tarjeta extends Component {
  
constructor() {
  super();
  this.state = {
    showModal: false,
  }
}  

  render (){
    return (
    <View  style={stylesTarjeta.container}>
        <View style={stylesTarjeta.item} ><Text>{this.props.nombre} {this.props.apellido} </Text></View>
        <View style={stylesTarjeta.item}><Text>{this.props.edad}</Text></View> 
        <View style={stylesTarjeta.item}><Text>{this.props.mail}</Text></View>
        <View style={stylesTarjeta.item}><Text>{this.props.fecha}</Text></View> 
        <View style={stylesTarjeta.item}><Text>{this.props.registro}</Text></View>
        <View style={stylesTarjeta.item}><Text>{this.props.telefono}</Text></View>
        <View><TouchableOpacity onPress={ () => this.setState({showModal: true})}><Text>...</Text></TouchableOpacity></View> 
    </View>
  
  
  )}  

}

