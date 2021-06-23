import React, { Component } from 'react';
import {stylesTarjeta} from '../styles/Styles';

import { 
    Text,
    View,
    Image, 
    Animated,
    TouchableOpacity,

} from "react-native";

export default class Tarjeta extends Component {

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
    <View  style={stylesTarjeta.container}>
      
      <Animated.View style={{
        backfaceVisibility: 'true',
        transform: [
            {translateY: this.position},
            {rotateX: rotA}

        ]}}>
        <View style={stylesTarjeta.diseñoTarjeta}>
        <Image style={stylesTarjeta.image} source={{uri: this.props.foto}}/>
        <View style={stylesTarjeta.item}><Text> {this.props.apellido} {this.props.nombre}</Text></View> 
        <View style={stylesTarjeta.item}><Text>{this.props.mail}</Text></View>
        <View style={stylesTarjeta.item}><Text>{this.props.fecha} ({this.props.edad})</Text></View>
        <TouchableOpacity onPress={this.topDown}><Text>dar vuelta</Text></TouchableOpacity>
        </View>
      </Animated.View>
      

      {/* <Animated.View style={{
        backfaceVisibility: 'true',
        transform: [
            {translateY: this.position},
            {rotateX: rotB}

        ],}}>
        <View style={stylesTarjeta.diseñoTarjeta}>
        <Text>hola</Text>
        <TouchableOpacity onPress={this.topDown}><Text>dar vuelta</Text></TouchableOpacity>
        </View>
      </Animated.View> 
      no anda bien cuando le activamos el position aboslute*/}

    </View>
  
  )}  

}
