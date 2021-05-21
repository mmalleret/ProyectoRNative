import React, { Component } from 'react';
// import {styles} from './Styles';
import Navbar from './components/Navbar'
import Container from './components/Container'
import Footer from './components/Footer'


import { 
  View,
} from "react-native";

export default class App extends Component {
  
constructor() {
  super();
  this.state = {

  }
}  


  render (){
    return (
    <View>
      <Navbar></Navbar>
      <Container></Container>
      <Footer></Footer>
    </View>
  
  
  )}  

}
