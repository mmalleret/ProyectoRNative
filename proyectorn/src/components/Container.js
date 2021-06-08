import React, { Component } from 'react';
import {stylesContainer} from '../styles/Styles';
import Tarjeta from './Tarjeta';
import Modal from './Modal'


import { 
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";

export default class Container extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    
    
  }
}   

keyExtractor = (item, idx) => item.login.uuid

renderItem = ({item}) => {
  return(
    <View style={stylesContainer.container}>
        <Tarjeta 
          nombre={item.name.first} 
          apellido={item.name.last} 
          id={item.login.uuid} 
          foto={item.picture.large} 
          edad={item.dob.age} 
          mail={item.email} 
          fecha={item.dob.date}  
          direccion={item.location} 
          registro={item.registered.date}
          telefono={item.cell}
        />
        
        <TouchableOpacity onPress={() => this.props.guardar(item)}><Text>Guardar</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.eliminar(item)}><Text>Eliminar</Text></TouchableOpacity>

      </View>
    )
  }

  render () {

    return(
      <View>
        <FlatList
        data={this.props.contactos}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        >
        </FlatList>
        {/* <Modal/> */}
      </View>
    )
  }

}


