import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import MainNavigator from './src/navigation/MainNavigator'
 import {SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() { 

  return ( <SafeAreaProvider>
        <MainNavigator /> 
        <StatusBar/>
  </SafeAreaProvider>
  );
}

 
