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
        <View style={cardStyle.item} ><Image style={cardStyle.image} source={{uri: this.props.foto}}/></View> 
        <View style={cardStyle.item}><Text style={cardStyle.text} > {this.props.apellido} {this.props.nombre}</Text></View> 
        <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.mail}</Text></View>
        <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.fecha} ({this.props.edad})</Text></View> 
    </View>
  
  )}  

}
