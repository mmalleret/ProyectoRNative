import React, { Component } from 'react';
import {cardStyle} from '../styles/Styles';

import { 
    Text,
    View,
    Image, 
    Animated,
    TouchableOpacity,

} from "react-native";

export default class Tarjeta extends Component {
  constructor() {
    super();
    this.state = {
      toValue: 1,
    }
  }  
  

  position = new Animated.Value(0);
  rotation = new Animated.Value(0);

  topDown = () => {

    Animated.parallel([

      Animated.timing(this.rotation, {
        toValue: this.state.toValue,
        duration: 1000,
        useNativeDriver: true, 
      })

    ]).start();
  
    this.setState({toValue: this.state.toValue + 1})
  }

  render (){

    const rotA = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })
    
    const rotB = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['180deg', '0deg']
    })

    return (
    <View>

      <TouchableOpacity onPress={this.topDown}>
      <Animated.View style={{
        backfaceVisibility: 'hidden',
        transform: [
            {translateY: this.position},
            {rotateX: rotA}

        ]}}>
        <View style={cardStyle.container}>
          <View style={cardStyle.item} ><Image style={cardStyle.image} source={{uri: this.props.foto}}/></View> 
          <View style={cardStyle.item}><Text style={cardStyle.text} > {this.props.apellido} {this.props.nombre}</Text></View> 
          <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.mail}</Text></View>
          <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.fecha} ({this.props.edad})</Text></View> 
        </View>
      </Animated.View>
      

      <Animated.View style={{
        backfaceVisibility: 'hidden',
        position:'absolute',
        transform: [
            {translateY: this.position},
            {rotateX: rotB}

        ],}}>
            <View style={cardStyle.container}>
            <Text>{this.props.comentario}</Text>
            </View>
      </Animated.View> 
      </TouchableOpacity>


    
    </View>
  )}  

}
