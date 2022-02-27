import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import  { StyleSheet, Text,  View, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SliderNavigation from './src/navigation/SliderNavigation';
import Header from './src/components/Header'

export default function App() {
  const [Width, setWidth] = useState(0);

  return (
    <SafeAreaView>  
      <View style={styles.container}>
        <Header page={Math.round(Width/Dimensions.get('window').width)}/>
        <SliderNavigation Width={Width} setWidth={setWidth}/> 
        <StatusBar style="auto" /> 
      </View>
    </SafeAreaView>
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
