import { useNavigation } from '@react-navigation/native'
import React,{useEffect} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { Ionicons  } from '@expo/vector-icons'
function ChatScreen({ navigation }) {
  useEffect(()=>{ 
     
    navigation.setOptions({
      headerLeft: ()=>{
        return <View style={{
          flexDirection:'row'
        }}>
            <TouchableOpacity  onPress={()=>navigation.goBack()} >
           <Ionicons name='person' size={30}/>
            </TouchableOpacity>
        </View> 
      },
    headerRight: ()=>{
      return <View style={{
        flexDirection:'row',

      }}>
        <Ionicons  style={{
          marginRight:20
        }} name="videocam" size={25} color={'white'}/>
        <Ionicons style={{
          marginRight: 20
        }} name="call" size={24} color={'white'}/>
        <Ionicons style={{
          marginRight: 6
        }} name="ellipsis-vertical" size={25}  color={'white'}/>
        </View>
    },
    title: navigation.getState().routes[1].params.name
    })
  },[])
  return (
    <Text>Chat karlo framds</Text>
  )
}

export default ChatScreen