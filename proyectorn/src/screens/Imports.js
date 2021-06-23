import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarjeta from '../components/Tarjeta';
import {getData} from '../api/RandomUser';
import { importsStyle } from '../styles/Styles';

import { 
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from "react-native";

export class Imports extends Component {
  
constructor() {
  super();
  this.state = {
    pedido: "",
    contactosBackup: [],
    contactos: [],
    cantidad: " ",
    almacenar:[],
    activity: false,
  }
}  


getDataFromApi(numero) {
  getData(numero)
  .then((resultado)=> {
    this.setState({activity: true})
    this.setState({contactos: resultado, activity: false})
  }) 
  
}
async componentDidMount(){
  await AsyncStorage.removeItem("contactos")
  let obtenerContactos = await AsyncStorage.getItem("contactos")
  obtenerContactos = JSON.parse(obtenerContactos)
  
  if(obtenerContactos == null) obtenerContactos = []
  this.setState({ 
    almacenar: obtenerContactos,
  })
}

async storeData(value){
  
  try{

    this.state.almacenar.push(value)

    const jsonContacts = JSON.stringify(this.state.almacenar)
    
    //queremos que se pusheen los contactos en un array asi no se pisan. 
  
    await AsyncStorage.setItem("contactos", jsonContacts);

    
    
    let numeroDeAlmacenados = this.state.almacenar.length

    let eliminado = this.state.contactos.filter((contacto) => {
        return contacto.login.uuid !== value.login.uuid
    })

    this.setState({
      contactos: eliminado,
      cantidad: numeroDeAlmacenados,
    })
   
  } catch(e) {
    console.log(e)
  }
}

  keyExtractor = (item, idx) => idx.toString();
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

          <TouchableOpacity onPress={() => this.storeData(item)}><Text>Guardar</Text></TouchableOpacity>
        </View>
  
      )
    }
  

  render (){
    return (
    <View style={importsStyle.container}>

      <View style={importsStyle.item}> 
      </View>

        <TextInput style={importsStyle.input} onChangeText={ value => this.setState({pedido: value})} placeholder="Cantidad de contactos..." ></TextInput>
        <TouchableOpacity onPress = {() => this.getDataFromApi(this.state.pedido)}>
          <Text style={importsStyle.text} >Añadir</Text>
        </TouchableOpacity >

        <TouchableOpacity onPress={ () => this.props.navigation.navigate('ViewImportedCards')}>
            <Text style={importsStyle.text} >Contactos</Text>
        </TouchableOpacity>
            {/* cuando haces una nueva importación de la api, no se agregan a las tarjetas anteriores, sino que llega un lote nuevo. esto hay que cambiarlo */}

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
      

      
  
    </View>
  
  
  )}  

}



