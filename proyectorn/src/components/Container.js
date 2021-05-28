import React, { Component } from 'react';
import {stylesContainer} from '../Styles';
import Tarjeta from './Tarjeta';


import { 
  ScrollView,
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
<<<<<<< HEAD
              <View style={stylesContainer.container}>
=======
              <View style={styles.containerStyle} key={item.login.uuid} >
>>>>>>> 3db572e90ec04ad4b2870651d3d922adc26f161d
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
              </View>
          )
          })
        }
      </ScrollView>
      </View>
    )
  }

}


