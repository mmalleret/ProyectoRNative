import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Container from '../components/Container'

import { 
  View,
  Text,
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
  fetch("https://randomuser.me/api/?results=5")
  .then(result => result.json())
  .then( data => { 
      this.setState({contactos: data.results})
  })    
} 

async storeData(value){
  try{
    
    const jsonContacts = JSON.stringify(value);
    
    //queremos que se pusheen los contactos en un array asi no se pisan. 
    const arrayImportar = this.state.importar.push(jsonContacts)
    console.log(arrayImportar)
    
    await AsyncStorage.setItem("contactos", jsonContacts);
  } catch(e) {
    console.log(e)
  }
}


  render (){
    return (
    <View>
      <Container
      contactos={this.state.contactos} 
      guardar={this.storeData}></Container>
    </View>
  
  
  )}  

}
