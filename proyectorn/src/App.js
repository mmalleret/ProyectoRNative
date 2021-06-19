import React, { Component } from 'react';
import {appStyle} from './styles/Styles';
import Navbar from './components/Navbar';
import Screen_ViewImportedCards from './screens/Screen_ViewImportedCards';
import Screen_Imports from './screens/Screen_Imports'
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
    <View style={{flex: 1}}>

      <View>
        <Navbar/>
      </View>

      <View style={appStyle.layout}>
        <Screen_Imports/>
      </View>

      <View>
        <Footer/>
      </View>
    
    </View>
    
  
  

  )}  
  }
