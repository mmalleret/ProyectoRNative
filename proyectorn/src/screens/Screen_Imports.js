import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container';
import {getData} from '../api/RandomUser';

import { 
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default class Screen_Imports extends Component {
  
constructor() {
  super();
  this.state = {
    contactos: [],
    importar:[],

  }
}  

componentDidMount() {
  this.getDataFromApi();
} 

async getDataFromApi() {
let usuarios = await getData();
this.setState({contactos: usuarios})
}

async storeData(value){
  
  try{

    const obtenerContactos = await AsyncStorage.getItem("contactos")
    
    let almacenar;

    if (obtenerContactos != null) {
        almacenar = JSON.parse(obtenerContactos)
    
      }else{
        almacenar = []
    }

    almacenar.push(value)
    
    const jsonContacts = JSON.stringify(almacenar);

    //queremos que se pusheen los contactos en un array asi no se pisan. 
    
    await AsyncStorage.setItem("contactos", jsonContacts);

  } catch(e) {
    console.log(e)
  }
}

async deleteData(id) {
  try {
    let deleteContacto = this.state.almacenar.filter((dato) => {return dato.login.uuid !== id})
    this.setState(almacenar == deleteContacto)
    
  } catch(e) {
    console.log(e)
  }
}


  render (){
    return (
    <View>
      <View>
        <Text>¿Cuantos contactos desea añadir?</Text>
        <TouchableOpacity>
          <Text>Importar</Text>
        </TouchableOpacity>
      </View>
      <Container
      contactos={this.state.contactos} 
      guardar={this.storeData}
      eliminar={this.deleteData}
      ></Container>
    </View>
  
  
  )}  

}
