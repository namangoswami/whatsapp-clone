import React from 'react'
import { Text,View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const Header = ({page}) => {
  return (
        <View style={Styles.header}>
            <View style={Styles.camera}>
                <Ionicons name="camera" size={30} color="grey" />
            </View>
            <View style={Styles.text}>
                <Text style={{...Styles.c1, color: (0 ===page) ? 'green': 'black' }} > CHATS</Text>
                <Text style={{...Styles.c1,color: (1 ===page) ?'green' : 'black'}}>STATUS</Text>
                <Text style={{...Styles.c1, color: (2===page) ?'green' : 'black'}}>CALLS</Text>
            </View>
        </View>
  )
}
export default Header
const Styles = StyleSheet.create({
    header : {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 4,
        alignItems:'center'
    },
    camera: {     
    },
    text:{
       flex:1,
       flexDirection:'row',
       justifyContent:'space-between'
    },
    c1:{
        textAlign:'center', 
        flex:1, 
        fontSize: 15,
        fontWeight: 'bold'
    }
})