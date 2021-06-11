import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container';
import {getData} from '../api/RandomUser';

import { 
  // Text,
  // TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";

export default class Screen_Imports extends Component {
  
constructor() {
  super();
  this.state = {
    contactos: [],
    importar:[],
    activity: false,
    prueba: [],
  }
}  


async getDataFromApi() {
    this.setState({activity: true})
    let usuarios = await getData();
    this.setState({contactos: usuarios, activity: false})
}

componentDidMount() {
  getDataFromApi() 
} 

// async selectData (posicion){
  
//   let lugar = this.state.contactos.findIndex((objeto) => {
//     return objeto.login.uuid === posicion;
//   })

//     if (this.state.color != 'white'){

//         this.setState({color: 'white'})
//         let eliminar = this.state.prueba.splice(lugar, 1)
//         console.log(eliminar)

//     }else{
//         this.setState({color:'blue'}) 
//         let agregar = this.state.prueba.push(posicion)
//         console.log(agregar)

//     }
// }

//  async storeData(){
//    try{
//     const jsonContacts = JSON.stringify(this.state.prueba)
//     await AsyncStorage.setItem('contactos', jsonContacts); }
//    catch(e){
//      console.log(e)
//     }
// }

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
      
      {/* <View>
        <Text>¿Cuantos contactos desea añadir?</Text>
        <TouchableOpacity onPress={() => this.getDataFromApi()}>
          <Text>Importar</Text>
        </TouchableOpacity>
      </View> */}

        { this.state.activity
        ? <ActivityIndicator
        color = "blue"
        size = {60}
        />
        : <View><Container 
        contactos={this.state.contactos} 
        guardar={this.storeData}
        cambiarColor={this.selectData}></Container>
        </View>
        }
      
      <Container
      contactos={this.state.contactos} 
      guardar={this.storeData}
      eliminar={this.deleteData}
      ></Container>
    </View>
  
  
  )}  

}



