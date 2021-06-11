import React, { Component } from 'react';
import Tarjeta from './Tarjeta';

import { 
  FlatList,
  View,
  Text,
  TouchableOpacity,
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
    
    <TouchableOpacity style={{backgroundColor:this.props.color}} onPress={() => this.props.seleccionar(item)}>
        
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

      </TouchableOpacity>
    )
  }

  render () {

    return(
      <View>
        <FlatList
          data={this.props.contactos}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        <TouchableOpacity onPress={() => this.props.guardar(item)}><Text>Guardar contactos seleccionados</Text></TouchableOpacity>
      </View>
    )
  }

}


