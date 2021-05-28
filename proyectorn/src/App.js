import React, { Component } from 'react';
import {appStyle} from './Styles';
import Navbar from './components/Navbar'
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
    <View style={appStyle.layout}>
      <View style={appStyle.layout}>
        <Navbar></Navbar>
      </View>
<<<<<<< HEAD
      <View style={appStyle.layout}>
        <Container></Container>
=======
      <View style={{flex: 4}}>
        {/* <Container></Container> */}
      <Screen_Imports></Screen_Imports>
>>>>>>> 3db572e90ec04ad4b2870651d3d922adc26f161d
      </View>
      <View style={appStyle.layout}>
        <Footer></Footer>
      </View>
    </View>
  
  
  )}  

}
