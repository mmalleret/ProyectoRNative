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
    },
})

const importsStyle = StyleSheet.create({
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
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 300,     
        borderColor: '#7f8662', 
    }
})

const contactosStyle = StyleSheet.create({
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
    itemContactos: {
        justifyContent: 'center',
        alignItems: 'center',  
        height: 320,
    },
    itemInput: {
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 300,     
        borderColor: '#7f8662', 
    },
    containerInput: {
        flex: 2
    },
    itemInput: {
        justifyContent: 'center',
        alignItems: 'center',  
        margin: 20,
        height: 20,    
    }
})

const cardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f8662',
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 300,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',  
    },
    text: {
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 16
    },
    textButton: {
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 30
    },
    image:{
        width: 100, 
        height: 100,
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

export { cardStyle, modalStyle, menuStyle, importsStyle, contactosStyle}


