import React, { Component } from 'react';
import { aboutStyle } from '../styles/Styles';
import { CardAnimated } from '../components/CardAnimation';

import { 
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";


export class About extends Component {

  render (){

    return (
      <View style={aboutStyle.container}>
        <CardAnimated name={'Clari'} img={require('../assets/img/clari.png')} action={'Hace click para conocerme'} />
        <CardAnimated name={'Zoe'} img={require('../assets/img/zoe.png')} action={'Hace click para conocerme'} />
        <CardAnimated name={'Mili'} img={require('../assets/img/mili.png')} action={'Hace click para conocerme'} />
      </View>
  
  
  )}  

}

