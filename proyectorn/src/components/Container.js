import React, { Component } from 'react';
import {stylesContainer} from '../Styles';
import Tarjeta from './Tarjeta';


import { 
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

export default class Container extends Component {
  
constructor() {
  super();
  this.state = {
    // contactos: [],
    // contactosOriginales: []
  }
}  

// componentDidMount() {
//   fetch("https://randomuser.me/api/?results=12")
//   .then(result => result.json())
//   .then( data => { 
//       this.setState({contactos: data.results, contactosOriginales: data.results})
//   })    
// }   

  render () {
    return(
      <View>
        <ScrollView>
          {this.props.contactos.map((item) => {
          return (
              <View style={stylesContainer.container} key={item.login.uuid} >
                <Tarjeta 
                nombre={item.name.first} 
                apellido={item.name.last} 
                id={item.login.uuid} 
                foto={item.picture.large} 
                edad={item.dob.age} 
                mail={item.email} 
                fecha={item.dob.date} 
                color="white" 
                direccion={item.location} 
                registro={item.registered.date}
                telefono={item.cell}
                />
              <TouchableOpacity onPress={this.props.guardar}><Text>Guardar</Text></TouchableOpacity>
              </View>
          )
          })
        }
      </ScrollView>
      </View>
    )
  }

}


