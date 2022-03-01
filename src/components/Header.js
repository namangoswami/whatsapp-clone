import React from 'react'
import { Text,View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const Header = ({page}) => {
     
  return (
        <View style={Styles.header}>
            <View style={Styles.camera}>
                <Ionicons name="camera" size={30} color="#7dd9c9" />
            </View>

            <View style={Styles.text}>
                <Text style={{...Styles.c1, color: (0 ===page) ? 'white': '#7dd9c9' }} > CHATS</Text>
                <Text style={{...Styles.c1,color: (1 ===page) ?'white' : '#7dd9c9'}}>STATUS</Text>
                <Text style={{...Styles.c1, color: (2===page) ?'white' : '#7dd9c9'}}>CALLS</Text>
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
        alignItems:'center',
        paddingVertical: 5,
        backgroundColor:'#008069',
    },
    camera: {     
    },
    text:{
       flex:1,
       flexDirection:'row',
       justifyContent:'space-between',
        position:'relative'
    },
    c1:{
        textAlign:'center', 
        flex:1, 
        fontSize: 15,
        fontWeight: 'bold',
         
    }
})