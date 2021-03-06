import React, {useState} from 'react'
import {StyleSheet,View, Text, Dimensions, Image,FlatList, TouchableNativeFeedback} from 'react-native';
import ChatItem from './ChatListItem'
const data=[
    {
        image:'https://picsum.photos/200',
        name:'Naman Goswami',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    }
]


function ChatList( ) {

    const row  = item =><ChatItem data={item.item}  feedBack={feedBack} />
    const [feedBack, setFeedBack]=useState(true);
  return (
      
      <View  style={styles.listParent} >

          <FlatList
          data={data}
          renderItem={row}
          keyExtractor={(i, k)=>k}
          onScrollBeginDrag={()=>{setFeedBack(false)}}
          onScrollEndDrag={()=>setFeedBack(true)}
          >

          </FlatList>
          
      </View>
  )
}
const styles=StyleSheet.create({
    listParent:{
        flex:1,
        width: Dimensions.get('window').width,
    }
})
export default ChatList
