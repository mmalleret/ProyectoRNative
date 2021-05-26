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
    <View style={{backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center", marginTop: 50, fontSize:40, padding:30}}>
        <Menu></Menu>
        <Text style={styleText}>Nemo</Text>
    </View>
  
  
  )}  

}

const styleText = {
  fontSize:10,
  color: "black",
  background: "blue",
}

{}
