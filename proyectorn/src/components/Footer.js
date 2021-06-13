import React, { Component } from 'react';
import {footerStyle} from '../styles/Styles';

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

    <View style={footerStyle.contentStyle}>
        <Text style={footerStyle.textStyle}>Hamra - Kearney - Malleret</Text>
    </View>

  )}  

}


