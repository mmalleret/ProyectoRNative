import React, { Component } from 'react';
import {cardStyle, contactosStyle} from '../styles/Styles';

import { 
    Text,
    View,
    Image, 
    Animated,
    TouchableOpacity,
    TextInput

} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toValue: 1,
      textHandler: '',
      comentario: props.comentario
    }
  }  

  async comment(){
    try{
  
    let comentario = this.state.textHandler;
    let contactos = JSON.parse(await AsyncStorage.getItem('contactos'))
    //  const resultado =  this.state.contactosImportados.filter((dato) => {return dato.login.uuid == selectedItem.login.uuid})
      contactos.map((contacto) => {
        if(contacto.login.uuid == this.props.uuid) {
          contacto.comment = comentario 
        }
      })
    //  resultado[0].comment = comentario
  
     const jsonObjeto = JSON.stringify(contactos)
     
     console.log(jsonObjeto) 
     
     await AsyncStorage.setItem("contactos", jsonObjeto);
     this.setState({
       comentario: this.state.textHandler
     })
    }catch(e) {
      console.log(e)
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
            <Text>{this.state.comentario}</Text>
            <TextInput style={{backgroundColor: 'white', height: 20, width: 50}} onChangeText={ value => this.setState({textHandler:value})}></TextInput>
            <TouchableOpacity onPress={()=> this.comment()}><Text >Almacenar comentario</Text></TouchableOpacity>
            </View>
      </Animated.View> 
      </TouchableOpacity>


    
    </View>
  )}  

}
