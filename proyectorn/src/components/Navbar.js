import React, { Component } from 'react';
import Menu from './Menu'

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
    <View>
        <Menu></Menu>
        <Text>HOLA COMO ESTAS</Text>
    </View>
  
  
  )}  

}


