import React,{ useState} from 'react'
import {ScrollView,Text, StyleSheet, Dimensions} from 'react-native';
import Card from '../components/Card';
import ChatList from '../components/ChatList';
import StatusList from '../components/StatusList';
const SliderNavigation = ({Width, setWidth}) => {
    return ( 
      <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        style={styles.slider}
        showsHorizontalScrollIndicator={false}
        
        // onScroll={(event) => console.log(Math.round(event.nativeEvent.contentOffset.x/Dimensions.get('window').width))} 
        onScroll={(e) => {setWidth(e.nativeEvent.contentOffset.x); }}
      > 
        <ChatList/>
        <StatusList data={ {
            
                image:'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
                name:'My status',
                text:{
                    last:'Tap to add status update',
                    time:''
                }
        } } />
        <Card name="Naman" bgColor="red" />
    </ScrollView> 
  )
}

export default SliderNavigation
const styles = StyleSheet.create({
    slider:{
        width: '100%',
    },
     
})