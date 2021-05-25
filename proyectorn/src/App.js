import React, { Component } from 'react';
import {styles} from './Styles';
import Navbar from './components/Navbar'
import Container from './components/Container'
import Footer from './components/Footer'


import { 
  ScrollView,
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
      <ScrollView>
        <Navbar></Navbar>
        <Container></Container>
        <Footer></Footer>
      </ScrollView>
    </View>
  
  
  )}  

}
