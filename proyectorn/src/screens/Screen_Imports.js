import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Container from '../components/Container';
import Tarjeta from '../components/Tarjeta';
import {getData} from '../api/RandomUser';

import { 
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

export default class Screen_Imports extends Component {
  
constructor() {
  super();
  this.state = {
    contactos: [],
    almacenar:[],
    activity: false,
    color: "white",
  }
}  


getDataFromApi() {
  getData()
  .then((resultado)=> {
    this.setState({activity: true})
    this.setState({contactos: resultado, activity: false})
  }) 
  
}

componentDidMount() {
  this.getDataFromApi() 
} 

//selectData (item, color){
//     if (color != 'white'){
//
//       this.setState({color: 'white'})
//
//         let lugar = this.state.contactos.findIndex((objeto) => {
//            return objeto.login.uuid === item.login.uuid;
//          })

//          let eliminarContacto = this.state.importar.splice(lugar, 1)
//          console.log(eliminar)
//          this.setState({importar: eliminarContacto})
     
//     }else{

//         this.setState({color:'#8ed7e8'}) 
//         let agregar = this.state.importar.push(item)
//         console.log(agregar)
//        }
// }

//async storeData(){
//  try{
//     const jsonContacts = JSON.stringify(this.state.importar)
//     await AsyncStorage.setItem('contactos', jsonContacts);
//  }
//  catch(e){
//      console.log(e)
//  }
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

  keyExtractor = (item, idx) => item.login.uuid
  renderItem = ({item}) => {
    return(

        <View>
            
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

          <TouchableOpacity onPress={() => this.storeData()}><Text>Guardar</Text></TouchableOpacity>
        </View>
  
      )
    }
  

  render (){
    return (
    <View>
      
        { this.state.activity
        ? <ActivityIndicator
        color={"blue"}
        size={60}/>

        : <View>
          <FlatList
          data={this.state.contactos}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
          </View>
        }
  
    </View>
  
  
  )}  

}



