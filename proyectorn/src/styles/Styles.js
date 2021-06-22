import {StyleSheet} from 'react-native';

const menuStyle = StyleSheet.create({
    text: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6c9ae'
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',  
        height: 200
    }
})

const cardStyle = StyleSheet.create({
    container: {
        flex: 1,
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
        borderRadius: 20,
        margin: 5,
        width: 250,
        height: 200,
        padding: 10
    },
    image:{
        width: 50, 
        height: 50,
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

export { cardStyle, modalStyle, menuStyle}


