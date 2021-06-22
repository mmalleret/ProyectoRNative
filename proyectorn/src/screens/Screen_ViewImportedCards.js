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
  Image
} from "react-native";
import { modalStyle } from '../styles/Styles';

export default class Screen_ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: [],
    papelera:[],
    showModal: false,
    selectedItem: null,
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

showModal(item){
  this.setState({selectedItem: item, showModal:true});


}



async comment(item){

  let comentario = this.state.textHandler;

  const resultado =  this.state.contactosImportados.filter((dato) => {return dato.login.uuid == item.login.uuid})
  
  let addComent = resultado.comentario = comentario

  console.log(addComent)


  
  
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
          <TouchableOpacity onPress={() => this.showModal(item)}><Text>Activar Modal</Text></TouchableOpacity>

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
      <Modal visible={this.state.showModal} transparent={true}  animationType="slide">
        <View style={modalStyle.containerStyle}>
          <View style={modalStyle.viewStyle}>
            { this.state.selectedItem &&
            <>
            
          <Text onPress={() => this.setState({showModal: false})}>Close [X]</Text>
          <Image style={modalStyle.imagen} source={{uri:this.state.selectedItem.picture.medium}}/>
          <Text>{this.state.selectedItem.name.first} {this.state.selectedItem.name.last}</Text>
          <Text>{this.state.selectedItem.location.street.name} {this.state.selectedItem.location.street.number}</Text>
          <Text>{this.state.selectedItem.location.city}, {this.state.selectedItem.location.state}</Text>
          <Text>{this.state.selectedItem.location.country}</Text>
          <Text>{this.state.selectedItem.location.postcode}</Text>
          <Text>{this.state.selectedItem.registered.date}</Text>
          <Text>{this.state.selectedItem.cell}</Text>
        
          <Text>Añadir comentario: {this.state.arrayComentarios}</Text>
          <TextInput onChangeText={ value => this.setState({textHandler: value})} ></TextInput>
          <TouchableOpacity onPress={()=> this.comment(item)}><Text>lo meto</Text></TouchableOpacity>
          
            </>
            }
          </View>
        </View>
      </Modal>

    </View>
  
  
  
  )}  

}