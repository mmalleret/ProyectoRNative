import React, { Component } from 'react';
import {appStyle} from './styles/Styles';
import Navbar from './components/Navbar';
import Screen_ViewImportedCards from './screens/Screen_ViewImportedCards';
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
    <View style={appStyle.layout}>
      <View style={appStyle.layout}>
        <Navbar></Navbar>
      </View>
      <View style={appStyle.layout}>
        {/* <Container></Container> */}
        <Screen_ViewImportedCards></Screen_ViewImportedCards>
      </View>
      <View style={appStyle.layout}>
        <Footer></Footer>
      </View>
    </View>
    
  
  

  )}  
  }
