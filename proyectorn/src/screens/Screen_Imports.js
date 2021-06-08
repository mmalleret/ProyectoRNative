import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container';
import {getData} from '../api/RandomUser';

import { 
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";

export default class Screen_Imports extends Component {
  
constructor() {
  super();
  this.state = {
    contactos: [],
    importar:[],
    activity: false
  }
}  

// componentDidMount() {
//   this.getDataFromApi();
// } 

async getDataFromApi() {
  this.setState({activity: true})
  let usuarios = await getData();
  this.setState({contactos: usuarios, activity: false})
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

  render (){
    return (
    <View>
      
      <View>
        <Text>¿Cuantos contactos desea añadir?</Text>
        <TouchableOpacity onPress={() => this.getDataFromApi()}>
          <Text>Importar</Text>
        </TouchableOpacity>
      </View>
<<<<<<< HEAD

        { this.state.activity
        ? <ActivityIndicator
        color = "blue"
        size = {60}
        />
        : <View><Container 
        contactos={this.state.contactos} 
        guardar={this.storeData}></Container>
        </View>
=======
        { this.state.activity 
          ? <>
            <Text>Obteniendo contactos...</Text>
            <ActivityIndicator
            color = "blue"
            size = {60}/>
            </>
          : <View><Container 
            contactos={this.state.contactos} 
            guardar={this.storeData}></Container>
            </View>
>>>>>>> 102675b11dc007f7db4279a7e95c793860a4ae2d
        }
      
      <Container
      contactos={this.state.contactos} 
      guardar={this.storeData}
      eliminar={this.deleteData}
      ></Container>
    </View>
  
  
  )}  

}



