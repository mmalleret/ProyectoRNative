import React, { Component } from 'react';
import { aboutStyle } from '../styles/Styles';
import { CardAboutUs } from '../components/CardAboutUs';

import { 
  View,
  Text,
  Animated,
  Easing,
} from "react-native";


export class About extends Component {

  position = new Animated.Value(10)

  animateNeoNemo = () => {
    Animated.timing(this.position, {
      toValue: 600,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver:  false
    }).start();
  }


  render (){

    return (
      <View style={aboutStyle.container}>
          
        <Animated.View style={{
          top: this.position,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#7f8662'
          }}>
          <Text style={aboutStyle.textPrincipal} onPress={this.animateNeoNemo} >NeoNemo</Text>      

        </Animated.View>

        <View style={aboutStyle.containerUs}>
          <CardAboutUs name={'Clari'} img={require('../assets/img/clari.png')} action={'Hace click para conocerme'} />
          <CardAboutUs name={'Zoe'} img={require('../assets/img/zoe.png')} action={'Hace click para conocerme'} />
          <CardAboutUs name={'Mili'} img={require('../assets/img/mili.png')} action={'Hace click para conocerme'} />
        </View>

      </View>
  
  
  )}  

}

