import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarjeta from '../components/Tarjeta';
import { contactosStyle, modalStyle } from '../styles/Styles';

import { 
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  Image, 
} from "react-native";

export class ViewImportedCards extends Component {
  
constructor() {
  super();
  this.state = {
    contactosImportados: [],
    papelera:[],
    showModal: false,
    selectedItem: null,
    contactosBackup: [],
    textHandler: "",
  }
}  

async getData() {
  try{
    
    let resultado = await AsyncStorage.getItem("contactos");

    resultado = JSON.parse(resultado)
    
    if (resultado == null) resultado = []
      this.setState({contactosImportados: resultado, contactosBackup:resultado})
    

  }catch(e){
    console.log(e)
  }
}

componentDidMount(){
  this.getData(this)
}

async filterData(value) {


  let filtrar = this.state.contactosImportados.filter((dato) => {
  
  if( 
      dato.name.first.toUpperCase().includes(value.toUpperCase()) ||
      dato.name.last.toUpperCase().includes(value.toUpperCase())  ||
      dato.location.city.toUpperCase().includes(value.toUpperCase()) ||
      dato.location.country.toUpperCase().includes(value.toUpperCase())

    ) return dato;
  })
  console.log(filtrar)
  this.setState({contactosImportados: filtrar})
}


async deleteData(item) {
  try {
    let deleteContacto = this.state.contactosImportados.filter((dato) => {return dato.login.uuid !== item.login.uuid})
    let backup = this.state.contactosBackup.filter((dato) => {return dato.login.uuid !== item.login.uuid})

    this.setState({contactosImportados: deleteContacto, contactosBackup : backup})

    let bin = await AsyncStorage.getItem('eliminados');
    bin = JSON.parse(bin)
    if(bin == null) bin = [];
    bin.push(item)
    
    //this.state.papelera.push(item)

    const jsonEliminados = JSON.stringify(bin)
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



//  async comment(selectedItem){
//   try{

//   let comentario = this.state.textHandler;
//   let contactos = this.state.contactosImportados;
//   //  const resultado =  this.state.contactosImportados.filter((dato) => {return dato.login.uuid == selectedItem.login.uuid})
//     contactos.map((contacto) => {
//       if(contacto.login.uuid == selectedItem.login.uuid) {
//         contacto.comment = comentario 
//       }
//     })
//   //  resultado[0].comment = comentario

//    const jsonObjeto = JSON.stringify(contactos)
   
//    console.log(jsonObjeto) 
   
//    await AsyncStorage.setItem("contactos", jsonObjeto);
//    console.log(contactos)
//    this.setState({contactosImportados: contactos})
//   }catch(e) {
//     console.log(e)
//   }
  
// }

componentDidUpdate() {
  console.log('Hola')
}

  keyExtractor = (item, idx) => idx.toString();
  renderItem = ({item}) => {
    return(

        <View style={contactosStyle.tarjeta} >
            
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
            comentario={item.comment}
            uuid = {item.login.uuid}
          />

          <View style={contactosStyle.containerButtons}>
            <View style={contactosStyle.itemButton} ><TouchableOpacity onPress={() => this.deleteData(item)}><Text style={contactosStyle.textButton} >Eliminar</Text></TouchableOpacity></View>
            <View style={contactosStyle.itemButton} ><TouchableOpacity onPress={() => this.showModal(item)}><Text style={contactosStyle.textButton} >Detalle</Text></TouchableOpacity></View>
          </View>

        </View>
  
      )
    }



  render (){

    return (
    <View style={contactosStyle.container} >
          <View style={contactosStyle.containerFilter}>
            <View style={contactosStyle.itemTextInput} ><TextInput style={contactosStyle.input} onChangeText={ value => this.filterData(value)} placeholder="Filtrar por nombre, apellido, pa??s o ciudad"  ></TextInput></View>
            <View style={contactosStyle.itemTextInput} ><TextInput style={contactosStyle.input} onChangeText={ value => this.filterData(value)} placeholder="Filtrar por nombre, apellido, pa??s o ciudad" ></TextInput></View>
            <View style={contactosStyle.itemTextInput} ><TextInput style={contactosStyle.input} onChangeText={ value => this.filterData(value)} placeholder="Filtrar por nombre, apellido, pa??s o ciudad" ></TextInput></View>
            <View style={contactosStyle.itemTextInput} >
          </View>

            <View style={contactosStyle.containerTouchable}>
              <View style={contactosStyle.itemTouchable} ><TouchableOpacity onPress={this.getData.bind(this)}><Text style={contactosStyle.textSecundario} >Contactos importados</Text></TouchableOpacity></View>
              <View style={contactosStyle.itemTouchable}><TouchableOpacity onPress={ () => this.props.navigation.navigate('Imports')}><Text style={contactosStyle.textSecundario} >A??adir contactos</Text></TouchableOpacity></View>
              <View style={contactosStyle.itemTouchable}><TouchableOpacity onPress={ () => this.props.navigation.navigate('Bin')}><Text style={contactosStyle.textSecundario} >Papelera de reciclaje</Text></TouchableOpacity></View>



            </View>

          </View>


          <View style={contactosStyle.containerFlatlist}>
            <FlatList
            data={this.state.contactosImportados}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            />
          </View>


      {/* este es el modal */}
      <Modal visible={this.state.showModal} transparent={true}  animationType="slide">
        <View style={modalStyle.container}>
          <View style={modalStyle.modal}>
              { this.state.selectedItem &&
              <>
              
            <Text style={modalStyle.closeButton} onPress={() => this.setState({showModal: false})}>X</Text>
            <Image style={modalStyle.imagen} source={{uri:this.state.selectedItem.picture.medium}}/>
            <Text style={modalStyle.text} >{this.state.selectedItem.name.first} {this.state.selectedItem.name.last}</Text>
            <Text style={modalStyle.text} >{this.state.selectedItem.location.street.name} {this.state.selectedItem.location.street.number}</Text>
            <Text style={modalStyle.text} >{this.state.selectedItem.location.city}, {this.state.selectedItem.location.state}</Text>
            <Text style={modalStyle.text} >{this.state.selectedItem.location.country}</Text>
            <Text style={modalStyle.text} >{this.state.selectedItem.location.postcode}</Text>
            <Text style={modalStyle.text} >{this.state.selectedItem.registered.date}</Text>
            <Text style={modalStyle.text} >{this.state.selectedItem.cell}</Text>
          
            {/* <Text style={modalStyle.textButton} >A??adir comentario:</Text> */}
            {/* <TextInput style={modalStyle.input} onChangeText={ value => this.setState({textHandler: value})} ></TextInput> */}
            {/* <TouchableOpacity onPress={()=> this.comment(this.state.selectedItem)}><Text style={modalStyle.textButton} >Almacenar comentario</Text></TouchableOpacity> */}
              </>
              }
          </View>
        </View>
      </Modal>

    </View>
  
  
  
  )}  

}