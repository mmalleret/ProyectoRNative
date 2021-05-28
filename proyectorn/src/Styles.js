import{StyleSheet} from 'react-native';

const appStyle = StyleSheet.create({
    layout: {
        flex: 1
    }
})

const stylesContainer = StyleSheet.create({

    container: {
        backgroundColor: 'lightgray'
    }

})

const stylesTarjeta = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    item: {
        flex: 1
    },
})

const navbarFooterStyle = Stylesheet.create({
    contentStyle: {
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center", 
        marginTop: 50, 
        fontSize:40, 
        padding:30,
    },
    textStyle: {
        fontSize:10,
        color: "black",
        background: "blue",
      }
      
})
export {stylesContainer, stylesTarjeta, navbarFooterStyle, appStyle}


