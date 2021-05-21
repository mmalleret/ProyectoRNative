import React, { Component } from 'react';
// import {styles} from './Styles';
import Tarjeta from './components/Tarjeta'

import { 
  View,
} from "react-native";

export default class App extends Component {
  
constructor() {
  super();
  this.state = {

  }
}  


  render (){
    return (
    <View>
      <Tarjeta></Tarjeta>
    </View>
  
  
  )}  

}
