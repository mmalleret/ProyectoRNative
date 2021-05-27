import React, { Component } from 'react';
import {styles} from '../Styles';

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

    <View style={{backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center", marginTop: 50, fontSize:40, padding:30}}>
        <Text>Hamra - Kearney - Malleret</Text>
    </View>

  )}  

}


