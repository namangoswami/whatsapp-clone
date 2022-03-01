import { StatusBar } from 'expo-status-bar';
import {useState , useEffect} from 'react'
import  { StyleSheet, Text,  View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SliderNavigation from '../navigation/SliderNavigation';
import Header from '../components/Header'
import { RectButton} from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import Chats from './Chats';
import Calls from './Calls';
import Status from './Status';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
export default function Primary(props) {
  // console.log()
  const TopBar = createMaterialTopTabNavigator();

  useEffect(()=>{
    props.navigation.setOptions({
      headerRight: () =>{
        return <View style={styles.Top}>
                  <RectButton style={styles.first}>
                    <Ionicons  name='search' size={25} color="white"/>
                  </RectButton>
                  <RectButton style={styles.second}>
                    <Ionicons name='ellipsis-vertical' size={25} color="white"/>
                  </RectButton>
              </View>
      }
    })
  },[]);
  const [Tab, setTab] = useState(1);
  return (
  <>
  <TopBar.Navigator 
    headerOptions={{backgroundColor:'#008069'}} 
    initialRouteName={'Chats'}
    screenOptions={{
      tabBarStyle:{
        backgroundColor: '#008069', 
      },
      tabBarLabelStyle: { 
        fontWeight:'bold'
      },
      tabBarIndicatorStyle:{
        backgroundColor:'white',
        height:3
      },
      tabBarActiveTintColor:'white',
    }}
    sceneContainerStyle={{
      backgroundColor:'white'
    
    }}
    
  >
    
    <TopBar.Screen component={Chats} name="camera" options={{
        tabBarLabel : ({ color }) => (
              <TabBarIcon name="ios-camera" color={color} 
            />
          ),
        }}  
        listeners={()=>{ 
          setTab(1)
        }}

    />
    <TopBar.Screen component={Chats} name="Chats" listeners={()=>{
        setTab(2)
    }}
    
        />
    <TopBar.Screen component={Status} name="Status" listeners={()=>{
        setTab(3)
    }}/>
    <TopBar.Screen component={Calls} name="Calls" listeners={()=>{
        setTab(4)
    }}/>
  </TopBar.Navigator>
      {Tab > 1  && <View style={{position:'absolute', bottom:12, right:10,overflow:'hidden', borderRadius:1000}}>  
        <View style={{alignItems:'center',flex:1,overflow:'hidden',justifyContent:'center' ,backgroundColor:'#008069', borderRadius:1000, height:55, width:55}} >
        <RectButton style={{
          width: '100%',
          height: '100%', 
          alignItems: 'center',
          justifyContent:'center'
        }}> 
            {<Ionicons name={Tab === 2 ? 'chatbubble' : Tab==3 ? 'camera' :'call'} size={25} color="white"/>}
            </RectButton>
        </View>
       
      </View>}
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
  Top: {
    flexDirection:'row',
    paddingHorizontal: 3
  },
  first : {
    marginRight: 10,
    padding: 5,
    borderRadius: 10
  },
  second:{
    padding: 5,
    borderRadius: 5
  }
});
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}