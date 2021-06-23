import React, { Component } from 'react';
import {cardStyle} from '../styles/Styles';

import { 
    Text,
    View,
    Image, 
    Animated,
    TouchableOpacity,

} from "react-native";

export class Tarjeta extends Component {

  position = new Animated.Value(0);
  rotation = new Animated.Value(0);

  topDown = () => {

    Animated.parallel([

      Animated.timing(this.rotation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true, 
      })

    ]).start();
  
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
      
      <Animated.View style={{
        backfaceVisibility: 'false',
        transform: [
            {translateY: this.position},
            {rotateX: rotA}

        ]}}>
        <View style={cardStyle.container}>
          <View style={cardStyle.item} ><Image style={cardStyle.image} source={{uri: this.props.foto}}/></View> 
          <View style={cardStyle.item}><Text style={cardStyle.text} > {this.props.apellido} {this.props.nombre}</Text></View> 
          <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.mail}</Text></View>
          <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.fecha} ({this.props.edad})</Text></View> 
          <TouchableOpacity onPress={this.topDown}><Text style={cardStyle.textButton} >Dar vuelta</Text></TouchableOpacity>
        </View>
      </Animated.View>
      

      <Animated.View style={{
        backfaceVisibility: 'true',
        position:'absolute',
        transform: [
            {translateY: this.position},
            {rotateX: rotB}

        ],}}>
            <View style={cardStyle.container}>
            <Text>hola</Text>
            <TouchableOpacity onPress={this.topDown}><Text>dar vuelta</Text></TouchableOpacity>
            </View>
      </Animated.View> 



    
    </View>
  )}  

}
