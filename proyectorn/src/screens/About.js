import React, { Component } from 'react';
import { aboutStyle } from '../styles/Styles';

import { 
  View,
  Text,
  Animated,
  Easing
} from "react-native";


export class About extends Component {

  position = new Animated.Value(10)
  
  topDown = () => {
    Animated.timing(this.position, {
      toValue: 600,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false
    }).start();
  }

  render (){
    return (
    <View>
       <Animated.View style={{
         top: this.position,
         backgroundColor: '#7f8662',
         justifyContent: 'center', 
         alignItems: 'center',



       }}><Text style={{fontWeight: 'bold', fontSize: 30, color:'#f6c9ae'}} onPress={this.topDown}>NeoNemo</Text>

       </Animated.View>
    </View>
  
  
  )}  

}

