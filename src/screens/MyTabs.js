import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
 
import React from 'react';
import Homescreens from './Homescreens';
import Settings from './Settings';
import Profile from './Profile';
import Cart from './Cart';
 


const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } 
 



          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={"white"} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarHideOnKeyboard: true,
        headerShown:false,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#166534',
          position: 'absolute',
          borderTopWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
      },
        
         
        
      })} tabBarOptions={{
        style:{
          backgroundColor: 'green'
        }
      }}>
        <Tab.Screen name="Home" component={Homescreens}   />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Cart" component={Cart} />
        
      </Tab.Navigator>
     
  );
}