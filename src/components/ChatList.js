import React from 'react'
import {StyleSheet,View, Text, Dimensions, Image} from 'react-native';

const data=[
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

    
  return (
      <View  style={styles.listParent} >
          <View style={itemStyle.itemParent} >
            <Image source={{uri:data[1].image}} style={itemStyle.img} />
             <View style={itemStyle.nameParentView}>
             <View style={itemStyle.nameView}>
                <Text>
                {data[1].name}
                </Text>
                <Text>
                    {data[1].text.last}
                </Text>
            </View>
            <View style={itemStyle.nameView}>
            <Text>
                {data[1].text.time}
            </Text>
            </View>
            </View>
          </View>
      </View>
  )
}
const styles=StyleSheet.create({
    listParent:{
        flex:1,
        width: Dimensions.get('window').width,
    }
})

const itemStyle=StyleSheet.create({
    itemParent:{
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal:20,
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
        flexDirection:'column',
        justifyContent:'space-between'
    }
})

export default ChatList