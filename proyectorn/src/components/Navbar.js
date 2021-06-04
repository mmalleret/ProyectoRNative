import React, { Component } from 'react';
import {navbarFooterStyle} from '../styles/Styles';

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
    <View style={navbarFooterStyle.contentStyle}>
        <Text style={navbarFooterStyle.textStyle}>Nemo</Text>
    </View>
  
  
  )}  

}



{}
