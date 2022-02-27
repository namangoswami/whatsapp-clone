import React, {useEffect} from 'react'
import {View, StyleSheet, Text,Dimensions} from 'react-native'
const Card = ({name , ph, bgColor}) => {
    useEffect(()=>{
        console.log('render');
    })
  return (
        <View style={{ ...Styles.card, backgroundColor: bgColor }}>
            <Text>{name}</Text>
            <Text>adsf</Text>
            <View></View>
        </View>
  )
}

export default Card;
const Styles = StyleSheet.create({
    card: {
        borderTopWidth: 2,
        paddingLeft: 5,
        paddingTop: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height

    }
})