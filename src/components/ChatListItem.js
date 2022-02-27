import React from 'react';
import {Text, View,StyleSheet,TouchableNativeFeedback , Image } from 'react-native'

function ChatListItem({data}) {
  return (
    <TouchableNativeFeedback>
          <View style={itemStyle.itemParent} >
            <Image source={{uri:data.image}} style={itemStyle.img} />
             <View style={itemStyle.nameParentView}>
             <View style={itemStyle.nameView}>
                <Text>
                {data.name}
                </Text>
                <Text>
                    {data.text.last}
                </Text>
            </View>
            <View style={itemStyle.nameView}>
            <Text>
                {data.text.time}
            </Text>
            </View>
            </View>
          </View>
          </TouchableNativeFeedback>
  )
}


const itemStyle=StyleSheet.create({
    itemParent:{
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
    },

    img:{
        
        height:50,
        width:50,
        borderRadius:100
    },
    nameParentView:{
        flex:1,
        flexDirection:'row',
        marginLeft:10,
        justifyContent:'space-between'
    },
    nameView:{
        paddingVertical:5,
        flexDirection:'column',
        justifyContent:'space-between'
    }
})

export default ChatListItem