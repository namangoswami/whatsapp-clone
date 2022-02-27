import React from 'react'
import {StyleSheet,View, Text, Dimensions, Image,FlatList, TouchableNativeFeedback} from 'react-native';
import ChatItem from './ChatListItem'
const data=[
    {
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },{
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },
    {
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },
    {
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },
    {
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },
    {
        image:'https://resources.anyvair.com/pcs/glbl/65656516566.jpg',
        name:'Chitwan Yadav',
        text:{
            last:'hello',
            time:'07:40 PM'
        }
    },
]


function ChatList() {

    const row  = item =><ChatItem data={item.item} />
  return (
      
      <View  style={styles.listParent} >

          <FlatList
          data={data}
          renderItem={row}
          keyExtractor={(i, k)=>k}
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