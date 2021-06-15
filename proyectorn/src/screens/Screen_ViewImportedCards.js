import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarjeta from '../components/Tarjeta';


import { 
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

export default class Screen_ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: [],
    showModal: false,

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

// async filterData(id) {
//   try {

//     let filterContacto = this.state.contactosImportados.filter((dato) =>{
//       (dato.name.first === this.state.nombre) 
//    })
//    this.setState({ 
//      contactosImportados: filterContacto 
//     })
//   } catch(e) {
//     console.log(e)
//   }
// }

async deleteData(id) {
  try {
    let deleteContacto = this.state.almacenar.filter((dato) => {return dato.login.uuid !== id})
    this.setState({almacenar: deleteContacto})
    
  } catch(e) {
    console.log(e)
  }
}

showModal(){
  this.setState({showModal: true})
}
//Sobreeescribir contactos almacenando todos los contactos menos el que elimine -> setItem(contactos)
// saveItem pero la key no es contacto sino borrados (cambiar save por set)

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

          <TouchableOpacity onPress={() => this.deleteData()}><Text>Eliminar</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.showModal.bind(this)}><Text>Activar Modal</Text></TouchableOpacity>
        </View>
  
      )
    }



  render (){
    return (
    <View>
      
      <View>

      <View>
          <FlatList
          data={this.state.contactosImportados}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
      </View>

      <TouchableOpacity onPress={this.getData.bind(this)}>
        <Text>Contactos importados</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={this.filterData.bind(this)}>
        <Text>Filtrar</Text>
      </TouchableOpacity> */}

      </View>








      {/* este es el modal */}
      <Modal visible={this.state.showModal} transparent={true} animationType="fade">
        <View>
        <Text>Hola funciono</Text>
        <Text onPress={() => this.setState({showModal: false})}>X
        </Text>
        </View>
      </Modal>

    </View>
  
  
  
  )}  

}