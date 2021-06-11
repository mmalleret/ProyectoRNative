import React, { Component } from 'react';
import {stylesTarjeta} from '../styles/Styles';

import { 
    Text,
  TouchableOpacity,
    View,
    Image,

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
      <View style={stylesTarjeta.diseñoTarjeta}>
        <View style={stylesTarjeta.item} ><Text> {this.props.apellido} {this.props.nombre} </Text></View> 
        <View style={stylesTarjeta.item}><Text>{this.props.mail}</Text></View>
        <View style={stylesTarjeta.item}><Text>{this.props.fecha} ({this.props.edad})</Text></View> 
      </View>
        /* <View><TouchableOpacity onPress={ () => this.setState({showModal: true})}><Text>...</Text></TouchableOpacity></View>  */
    </View>
  
  )}  

}



//{}
//#