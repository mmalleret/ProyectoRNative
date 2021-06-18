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

export default class Screen_ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: [],
    papelera:[],
    showModal: false,
    contactosBackup: []
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
//Necesitamos 1 input o 3?
//Porque tengo que hacer todos los casos? --> mirar react

async filterData(texto) {


  let filtrar = this.state.contactosImportados.filter((dato) => {
  // let valor = dato.toUpperCase();
  
  if( 
      dato.name.first.toUpperCase().includes(texto.toUpperCase()) ||
      dato.name.last.toUpperCase().includes(texto.toUpperCase())  ||
      dato.location.city.toUpperCase().includes(texto.toUpperCase()) ||
      dato.location.country.toUpperCase().includes(texto.toUpperCase())

    ) return dato;
  })
  this.setState({contactosImportados: filtrar})
  }
  //   try {
  

//     let filtrar = this.state.contactosImportados.filter((dato) => {
//        return()
//       (dato.name.first === this.state.nombre) 
//    })
//    this.setState({ 
//      contactosImportados: filterContacto 
//     })
//   } catch(e) {
//     console.log(e)
//   }

//función filtar nombre 
// filterName(nombre){
//   if(nombre.length !== 0){
//     filtrame los contactos importados en su estado
//   }
// }

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

showModal(){
  this.setState({showModal: true})
}

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
          <TouchableOpacity onPress={() => this.showModal.bind(this)}><Text>Activar Modal</Text></TouchableOpacity>
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
      {/* <TouchableOpacity onPress={this.filterData.bind(this)}>
        <Text>Filtrar</Text>
      </TouchableOpacity> */}
      </View>
        
      </View>








      {/* este es el modal */}
      {/* <Modal visible={this.state.showModal} transparent={true} animationType="fade">
        <View>
        <Text>Hola funciono</Text>
        <Text onPress={() => this.setState({showModal: false})}>X
        </Text>
        </View>
      </Modal> */}

    </View>
  
  
  
  )}  

}