import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container';


import { 
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";

export default class Screen_ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: [],

  }
}  

async getData() {
  try{
    
    const resultado = await AsyncStorage.getItem('contactos');
    
    const jsonValue = JSON.parse(resultado)
    if (Array.isArray(jsonValue)) {
      this.setState({contactosImportados: jsonValue})
    } else{
      this.setState({contactosImportados:[jsonValue]})
    }
    

  }catch(e){
    console.log(e)
  }
}

async deleteData(id) {
  try {
    let deleteContacto = this.state.almacenar.filter((dato) => {return dato.login.uuid !== id})
    this.setState({almacenar: deleteContacto})
    
  } catch(e) {
    console.log(e)
  }
}
//Sobreeescribir contactos almacenando todos los contactos menos el que elimine -> setItem(contactos)
// saveItem pero la key no es contacto sino borrados (cambiar save por set)

  render (){
    return (
    <View>
      <Container contactos={this.state.contactosImportados}/>
      <TouchableOpacity onPress={this.getData.bind(this)}>
        <Text>Contactos importados</Text>
      </TouchableOpacity>
      
    </View>
  
  
  
  )}  

}