import React, { Component } from 'react';
import { aboutStyle } from '../styles/Styles';

import { 
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from "react-native";


export class CardAboutUs extends Component {

  position = new Animated.Value(0);
  rotation = new Animated.Value(0);
  
  topDown = () => {
    Animated.parallel([

      Animated.timing(this.rotation,{
        toValue: 1,
        duration: 100,
        useNativeDriver: true
    })

    ]).start();

  }

  render (){
    const rotA = this.rotation.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '180deg']
    })

    const rotB = this.rotation.interpolate({
      inputRange: [0,1],
      outputRange: ['180deg', '0deg']
    })



    return (
        <TouchableWithoutFeedback style={aboutStyle.touchableAnimation} onPress={this.topDown}>
        <View>
            <Animated.View style={{

            width: 170,
            height: 170,
            backgroundColor: '#7f8662',
            backfaceVisibility: 'true',
            transform: [
                {translateY: this.position},
                {rotateX: rotA}
            ]
            }}>
                <View style={aboutStyle.textContainer} >
                    <Text style={aboutStyle.textPrincipal}>{this.props.name}</Text>      
                    <Text style={aboutStyle.textSecundario}>{this.props.action}</Text>      
                </View>
            </Animated.View>

            <Animated.View style={{
            width: 170,
            height: 170,
            backgroundColor: '#7f8662',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [
                {translateY: this.position},
                {rotateX: rotB}
            ]
            }}>

                <Image style={{height: 170, width: 170}} source={this.props.img} />
            </Animated.View>

        </View>
    </TouchableWithoutFeedback>

  
  
  )}  

}