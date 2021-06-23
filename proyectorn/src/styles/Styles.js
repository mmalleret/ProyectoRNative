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
    }
})

const importsStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        paddingTop: '10%'
    },
    textPrincipal: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30

    },
    textSecundario: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20

    },
    textButton: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 300,     
        borderColor: '#7f8662', 
        margin: 20
    },
    containerFlatList: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        padding: 20
    },
    containerButton: {
        flex: 1, 
        flexDirection: 'row'
    },
    containerButtonItem: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const contactosStyle = StyleSheet.create({
    textPrincipal: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30
    },
    textSecundario: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        paddingTop: '10%'
    },
    itemContactos: {
        justifyContent: 'center',
        alignItems: 'center',  
        height: 320,
        marginTop: 0
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
    },
    containerButtons: {
        flex: 1, 
        flexDirection: 'row'
    },
    itemButton: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20
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
    container: {
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end',
    }, 
    modal: {
        height:'70%',
        width:'100%',
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation:20,
        shadowColor:'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'black',
        backgroundColor: '#7f8662'
    }, 
    imagen:{
        width:100,
        height:100
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
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 10,
        color: '#f6c9ae',
        fontWeight: 'bold',
        fontSize: 30,
    },
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20, 
        width: 300,     
        borderColor: '#f6c9ae', 
    },
})

<<<<<<< HEAD
const binStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        paddingTop: '10%'  
    },
    textPrincipal: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 30

    },
    textSecundario: {
        color: '#7f8662',
        fontWeight: 'bold',
        fontSize: 20

    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerFlatList: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f6c9ae',
        padding: 20
    },
})

export { cardStyle, modalStyle, menuStyle, importsStyle, contactosStyle, binStyle}
=======
const aboutStyle = StyleSheet.create({
    neonText: {
        color: "#fff",
        textShadowColor: "#fff"

    }

})

export { cardStyle, modalStyle, menuStyle, importsStyle, contactosStyle, aboutStyle}
>>>>>>> 413ce70b9ffc74ada39bd926c629989598a02520


