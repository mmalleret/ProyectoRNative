import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarjeta from '../components/Tarjeta';
import { binStyle, contactosStyle } from '../styles/Styles';

import { 
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

export class Bin extends Component {
  
constructor() {
  super();
  this.state = {
    contactosEliminados: [],
    eliminadosDelAsync: [],
    contactosBackup: [],
  }
}  

async getData() {
  try{
    
    let resultado = await AsyncStorage.getItem("eliminados");

    resultado = JSON.parse(resultado)
    
    if (resultado == null) resultado = []
    
    this.setState({contactosEliminados: resultado})
    
  }catch(e){
    console.log(e)
  }
}

componentDidMount(){
  this.getData(this)
}

keyExtractor = (item, idx) => idx.toString();
renderItem = ({item}) => {
  return(

      <View style={binStyle.tarjeta}>
          
        <Tarjeta 
          nombre={item.name.first} 
          apellido={item.name.last}  
          foto={item.picture.thumbnail} 
          edad={item.dob.age} 
          mail={item.email} 
          fecha={item.dob.date}  
          direccion={item.location} 
          registro={item.registered.date}
          telefono={item.cell}
        />
        <View style={contactosStyle.containerButtons}>
            <View style={contactosStyle.itemButton} ><TouchableOpacity onPress={() => this.recuperar(item)}><Text style={contactosStyle.textButton} >Recuperar</Text></TouchableOpacity></View>
            <View style={contactosStyle.itemButton} ><TouchableOpacity onPress={() => this.deleteForever(item)}><Text style={contactosStyle.textButton} >Eliminar</Text></TouchableOpacity></View>
        </View>
      </View>

    )
  }



render (){
  return (
  <View style={binStyle.container}>

    <View style={binStyle.item}>

        {/* <TouchableOpacity onPress={this.getData.bind(this)}>
          <Text style={binStyle.textPrincipal}>Contactos eliminados</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Imports')}>
          <Text style={binStyle.textSecundario} >Añadir contactos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('ViewImportedCards')}>
          <Text style={binStyle.textSecundario}>Contactos</Text>
        </TouchableOpacity>

        <View style={binStyle.containerFlatList} > 
          <FlatList
          data={this.state.contactosEliminados}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
        </View>

    </View>



    </View>

)}

}

