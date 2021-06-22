import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarjeta from '../components/Tarjeta';


import { 
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from "react-native";

export default class ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: [],
    papelera:[],
    showModal: false,
    contactosBackup: [],
    textHandler: "",
    arrayComentarios: [],
  }
}  

async getData() {
  try{
    
    const resultado = await AsyncStorage.getItem("contactos");

    const jsonValue = JSON.parse(resultado)
    
    if (Array.isArray(jsonValue)) {
      this.setState({contactosImportados: jsonValue, contactosBackup:jsonValue})
    } else{
      this.setState({contactosImportados:[jsonValue], contactosBackup:[jsonValue]})
    }
    

  }catch(e){
    console.log(e)
  }
}

async filterData(texto) {


  let filtrar = this.state.contactosImportados.filter((dato) => {
  
  if( 
      dato.name.first.toUpperCase().includes(texto.toUpperCase()) ||
      dato.name.last.toUpperCase().includes(texto.toUpperCase())  ||
      dato.location.city.toUpperCase().includes(texto.toUpperCase()) ||
      dato.location.country.toUpperCase().includes(texto.toUpperCase())

    ) return dato;
  })
  this.setState({contactosImportados: filtrar})
  }


async deleteData(item) {
  try {
    let deleteContacto = this.state.contactosImportados.filter((dato) => {return dato.login.uuid !== item.login.uuid})
    let backup = this.state.contactosBackup.filter((dato) => {return dato.login.uuid !== item.login.uuid})

    this.setState({contactosImportados: deleteContacto, contactosBackup : backup})

    this.state.papelera.push(item)

    const jsonEliminados = JSON.stringify(this.state.papelera)
    console.log(jsonEliminados) 
    await AsyncStorage.setItem("eliminados", jsonEliminados);

    const jsonEliminarAsync = JSON.stringify(backup)
    console.log(jsonEliminarAsync) 
    await AsyncStorage.setItem("contactos", jsonEliminarAsync);

    
  } catch(e) {
    console.log(e)
  }
}

//async comment(){
  
//  let comentario = this.state.textHandler;

//  let agregar = arrayComentarios.push(comentario)

//  console.log(agregar)
  
//}



  keyExtractor = (item, idx) => idx.toString();
  renderItem = ({item}) => {
    return(

        <View>
            
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

          <TouchableOpacity onPress={() => this.deleteData(item)}><Text>Eliminar</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({showModal: true})}><Text>Activar Modal</Text></TouchableOpacity>
        </View>
  
      )
    }



  render (){

    return (
    <View>
      
      <View>

      <View>
          <TouchableOpacity onPress={this.getData.bind(this)}>
            <Text>Contactos importados</Text>
          </TouchableOpacity>
          <FlatList
          data={this.state.contactosImportados}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
      </View>

      <View>
      <TextInput style={{backgroundColor: "red"}} onChangeText={ value => this.filterData(value)}></TextInput>
      <TextInput style={{backgroundColor: "red"}} onChangeText={ value => this.filterData(value)}></TextInput>
      <TextInput style={{backgroundColor: "red"}} onChangeText={ value => this.filterData(value)}></TextInput>
      </View>
        
      </View>


      {/* este es el modal */}
      <Modal visible={this.state.showModal} style={{backgroundColor: "white"}}  animationType="fade">
        <View>
        <Text onPress={() => this.setState({showModal: false})}>X</Text>
        <Text>Hola funciono</Text>
        
        
        
        {/* <Text>Añadir comentario: {this.state.textHandler}</Text>
        <TextInput onChangeText={ value => this.setState({textHandler: value})} ></TextInput>
        <TouchableOpacity onPress={this.comment.bind(this)}><Text>lo meto</Text></TouchableOpacity> */}


        </View>
      </Modal>

    </View>
  
  
  
  )}  

}