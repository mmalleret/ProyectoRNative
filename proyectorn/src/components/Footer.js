import React, { Component } from 'react';
import {navbarFooterStyle} from '../styles/Styles';

import { 
    Text,
    View,
} from "react-native";

export default class Footer extends Component {
  
constructor() {
  super();
  this.state = {

  }
}  


  render (){
    return (

    <View style={navbarFooterStyle.contentStyle}>
        <Text style={navbarFooterStyle.textStyle}>Hamra - Kearney - Malleret</Text>
    </View>

  )}  

}


