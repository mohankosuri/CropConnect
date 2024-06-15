import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreens from './src/screens/Homescreens';
import Settings from './src/screens/Settings';
import Deatils from './src/screens/Details';
import SplashScreen from './src/screens/SplashScreen';
import { MyTabs } from './src/screens/MyTabs';
import Startscreen from './src/screens/Startscreen';
import Loginscreen from './src/screens/Loginscreen';
import Sighupscreen from './src/screens/FormerSighupscreen';
import FormerSighupscreen from './src/screens/FormerSighupscreen';
import CustomerSignup from './src/screens/CustomerSignup';
import Otpscreen from './src/screens/Otpscreen';
import Loginmain from './src/screens/Loginmain';
import Profile from './src/screens/Profile';
import Fruits from './src/screens/Fruits';
import Vegitables from './src/screens/Vegitables';
import Categories from './src/screens/Categories';
import Milk from './src/screens/Milk';
import Uploadproduct from './src/screens/Uploadproduct';
import { Usercontext } from './context/Usercontext';
 
 

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  return (
    
    <NavigationContainer>
    <Usercontext.Provider value={{mobile,setMobile,password,setPassword}}>
    <StatusBar  backgroundColor="#dcfce7"/>
    <Stack.Navigator  screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Splash" component={SplashScreen} />
     
      <Stack.Screen name="Home" component={Homescreens} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Details" component={Deatils} />
      <Stack.Screen name="Startscreen" component={Startscreen} />
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="FormerSignup" component={FormerSighupscreen} />
      <Stack.Screen name="CustomerSignup" component={CustomerSignup} />
      <Stack.Screen name="Otpscreen" component={Otpscreen} />
      <Stack.Screen name="Loginmain" component={Loginmain} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Fruits" component={Fruits} />
      <Stack.Screen name="Vegitables" component={Vegitables} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Milk" component={Milk} />
      <Stack.Screen name="Uploadproduct" component={Uploadproduct} />
       
    </Stack.Navigator>
    </Usercontext.Provider>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
