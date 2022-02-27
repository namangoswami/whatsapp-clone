import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import  { StyleSheet, Text,  View, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SliderNavigation from '../navigation/SliderNavigation';
import Header from '../components/Header'

export default function Primary() {
  const [Width, setWidth] = useState(0);

  return ( <>
      <View style={styles.container}> 
        <Header page={Math.round(Width/Dimensions.get('window').width)}/>
        <SliderNavigation Width={Width} setWidth={setWidth}/> 
        <StatusBar style="auto" /> 
      </View> 
  </>
  );
}

const styles = StyleSheet.create({
  container: { 
    width:'100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
