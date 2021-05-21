import React, { Component } from 'react';
// import {styles} from './Styles';

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
      <Text>{this.props.nombre}</Text>
    </View>
  
  
  )}  

}

