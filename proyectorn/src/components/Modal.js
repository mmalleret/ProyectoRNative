import React, { Component } from 'react';
import {modalStyle} from '../styles/Styles';

import { 
    Text,
    View,

} from "react-native";

export default class Modal extends Component {
  
constructor() {
  super();
  this.state = {

  }
}  


  render (){
    return (

    <View style={modalStyle}>
        <Text style={modalStyle.text}></Text>
    </View>

  )}  

}


