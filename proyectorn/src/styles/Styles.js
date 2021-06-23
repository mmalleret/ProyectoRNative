import {StyleSheet} from 'react-native';

const appStyle = StyleSheet.create({
    layout: {
        flex: 3
    }
})
const navStyle = StyleSheet.create({
    layout: {
        flex: 1
    }
})

const stylesTarjeta = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    item: {
        flex: 1,
        fontSize: 15,
    },
    diseñoTarjeta: {
        backgroundColor: "#8ed7e8",
        borderWidth: 1,
        borderRadius: 20,
        margin: 5,
        width: 250,
        height: 200,
        padding: 10,
        
    },
    image:{
        width: 50, 
        height: 50,
    },
    imageMedium:{
        width: 100, 
        height: 100,
    },

})

const navbarStyle = StyleSheet.create({
    contentStyle: {
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center", 
        //marginTop: 50, 
        fontSize:40, 
        padding:30,
    },
    textStyle: {
        fontSize: 20,
        color: "black",
      }
      
})

const modalStyle = StyleSheet.create({
    containerStyle: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    viewStyle: {
        height:'70%',
        width:'100%',
        backgroundColor: 'white',
        justifyContent:'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        elevation:20,
        shadowColor:'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'black' 

    }, 
    imagen:{
        width:100,
        height:100
    }
})

const footerStyle = StyleSheet.create({
    contentStyle: {
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center", 
        fontSize:40, 
        padding:30,
    },
    textStyle: {
        fontSize: 20,
        color: "black",
      }
      
})
export { stylesTarjeta, navbarStyle, appStyle, footerStyle, modalStyle}


