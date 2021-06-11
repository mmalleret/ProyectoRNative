import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../components/Container';
import {getData} from '../api/RandomUser';

import { 
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
    color: "white"
  }
}  


getDataFromApi() {
  getData()
  .then((resultado)=> {
    this.setState({activity: true})
    this.setState({contactos: resultado, activity: false})}) 
  
}

componentDidMount() {
  this.getDataFromApi() 
} 

selectData (item){
     if (this.state.color != 'white'){

         this.setState({color: 'white'})

         let lugar = this.state.contactos.findIndex((objeto) => {
          return objeto.login.uuid === item.login.uuid;
        })

         let eliminar = this.state.importar.splice(lugar, 1)
         console.log(eliminar)
         this.setState({importar: eliminar})
     
        }else{
         this.setState({color:'#8ed7e8'}) 
         let agregar = this.state.importar.push(item)
         console.log(agregar)

     }
 }

  async storeData(){
    try{
     const jsonContacts = JSON.stringify(this.state.prueba)
     await AsyncStorage.setItem('contactos', jsonContacts);}

    catch(e){
      console.log(e)
     }
 }

//async storeData(value){
  
  //try{

    //const obtenerContactos = await AsyncStorage.getItem("contactos")
    
    //let almacenar;

    //if (obtenerContactos != null) {
        //almacenar = JSON.parse(obtenerContactos)
    
      //}else{
        //almacenar = []
    //}

    //almacenar.push(value)
    
    //const jsonContacts = JSON.stringify(almacenar);

    //queremos que se pusheen los contactos en un array asi no se pisan. 
    
    //await AsyncStorage.setItem("contactos", jsonContacts);

  //} catch(e) {
    //console.log(e)
  //}
//}

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
        color={"blue"}
        size={60}/>

        : <View><Container 
        contactos={this.state.contactos} 
        guardar={this.storeData}
        seleccionar={this.selectData}
        color={this.state.color}></Container>
        </View>
        }
      
      {/* <Container
      contactos={this.state.contactos} 
      guardar={this.storeData}
      //eliminar={this.deleteData}
      seleccionar={this.selectData}
      ></Container> */}
    </View>
  
  
  )}  

}



