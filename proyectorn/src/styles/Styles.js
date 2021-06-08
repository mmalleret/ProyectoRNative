import {StyleSheet} from 'react-native';

const appStyle = StyleSheet.create({
    layout: {
        flex: 1
    }
})

const stylesContainer = StyleSheet.create({

    container: {
        
    }

})

const stylesTarjeta = StyleSheet.create({
    container: {
        fle: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    item: {
        flex: 1,
        fontSize: 15,
    },
    diseñoTarjeta: {
        backgroundColor: "#8ed7e8",
        borderWidth: 1,
        borderRadious: 20,
        margin: 5,
        width: 250,
        height: 200,
        padding: 10
    },
})

const navbarFooterStyle = StyleSheet.create({
    contentStyle: {
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center", 
        marginTop: 50, 
        fontSize:40, 
        padding:30,
    },
    textStyle: {
        fontSize: 20,
        color: "black",
      }
      
})
export {stylesContainer, stylesTarjeta, navbarFooterStyle, appStyle}


