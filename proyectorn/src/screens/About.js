import React, { Component } from 'react';
import { aboutStyle } from '../styles/Styles';

import { 
  View,
  Text,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export class About extends Component {

  position = new Animated.Value(10)
  render (){
    return (
    <View>
      <Text>NEMO STUDIO PRESENTS</Text>
      <Text>NEO NEMO</Text> 
      <TouchableWithoutFeedback>
       <Animated.View style={{
         top: this.position,
         width: 150,
         height: 150,
         backgroundColor: "green",

       }}><Text>holaaaaaaaaaaaaaaaa</Text>

       </Animated.View>
       </TouchableWithoutFeedback> 
    </View>
  
  
  )}  

}

