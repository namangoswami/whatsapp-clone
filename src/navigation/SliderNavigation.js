import React,{ useState} from 'react'
import {ScrollView,Text, StyleSheet, Dimensions} from 'react-native';
import Card from '../components/Card';
import ChatList from '../components/ChatList';
const SliderNavigation = ({Width, setWidth}) => {
    
    return (

    <>
        <Text>{Width.toString()}</Text>
      <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        style={styles.slider}
        showsHorizontalScrollIndicator={false}
        // onScroll={(event) => console.log(Math.round(event.nativeEvent.contentOffset.x/Dimensions.get('window').width))} 
        onScroll={(e) => setWidth(e.nativeEvent.contentOffset.x)}
        
      >
        
        <ChatList/>
        <Card name="Ankur" bgColor="#fff" />
        <Card name="Naman" bgColor="red" />
    </ScrollView>
    </>
  )
}

export default SliderNavigation
const styles = StyleSheet.create({
    slider:{
        width: '100%',
    },
     
})