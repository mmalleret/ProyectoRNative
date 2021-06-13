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
    
    <TouchableOpacity onPress={() => this.props.seleccionar(item)}>
      {/* esto no anda TODAVÍA porque hay un problema con el this.state.color */}
        
        <Tarjeta 
          nombre={item.name.first} 
          apellido={item.name.last} 
          id={item.login.uuid} 
          foto={item.picture.thumbnail} 
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
        <TouchableOpacity onPress={() => this.props.activarModal}><Text>activarModal</Text></TouchableOpacity>
      </View>
    )
  }

}


