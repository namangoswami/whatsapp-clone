import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text,View} from 'react-native';
import Primary from '../Screen/Primary'
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
      
<NavigationContainer >
    <Stack.Navigator
    screenOptions={{
        headerShown: true
    }}
    initialRouteName="Primary"
    >
        <Stack.Screen name="WhatsApp" component={Primary} />
    </Stack.Navigator>
    </NavigationContainer>
     
  )
}

export default MainNavigator