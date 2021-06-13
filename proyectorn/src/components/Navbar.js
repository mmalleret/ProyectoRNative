import React, { Component } from 'react';
import {navbarStyle} from '../styles/Styles';

import { 
  View,
  Text,
} from "react-native";

export default class Navbar extends Component {
  
constructor() {
  super();
  this.state = {

  }
}  


  render (){
    return (
    <View style={navbarStyle.contentStyle}>
        <Text style={navbarStyle.textStyle}>Nemo</Text>
    </View>
  
  
  )}  

}



{}
