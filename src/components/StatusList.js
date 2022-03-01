import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import StatusListItem from '../StatusScreen/StatusListItem';
import { Ionicons } from '@expo/vector-icons'
const StatusList = ({data}) => {
  return (
    <View style={{
        width: Dimensions.get('window').width,
    }}> 
        <StatusListItem data={data} />
        
    </View>
  )
}

export default StatusList