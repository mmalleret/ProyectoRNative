import React, { Component } from 'react';
import {styles} from '../Styles';
import Tarjeta from './Tarjeta';


import { 
  View,
} from "react-native";

export default class Container extends Component {
  
constructor() {
  super();
  this.state = {
    contactos: [],
    contactosOriginales: []
  }
}  

componentDidMount() {
  fetch("https://randomuser.me/api/?results=12")
  .then(result => result.json())
  .then( data => { 
      this.setState({contactos: data.results, contactosOriginales: data.results})
  })    
}   

  render () {
    return(
      <View>
        {this.state.contactos.map((item) => {
        return (
        <Tarjeta nombre={item.name.first}/>
        )
        })
      }
      </View>
    )
  }

}


