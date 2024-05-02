import { View, Text,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Deatils from './Details'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Settings = () => {


  const navigation =useNavigation()
  return (
    <View className="flex-1 bg-green-100">
    <View className="mt-10 ml-10">
    
      <Text className="font-bold text-2xl">Settings</Text>
    </View>
    <View className="m-[100px]">

    <TouchableOpacity className="flex flex-row space-x-10 justify-start items-center" onPress={()=>navigation.navigate('Profile')}>
    <Ionicons name="person" size={30}/>
    <Text className="font-bold text-lg">Profile</Text>
     
   
   </TouchableOpacity>
   <TouchableOpacity className="flex flex-row space-x-10 justify-start items-center mt-5" onPress={()=>navigation.navigate('Details')}>
   <Ionicons name="person" size={30}/>
   <Text className="font-bold text-lg">Deatils</Text>
    
  
  </TouchableOpacity>
  <TouchableOpacity className="flex flex-row space-x-10 justify-start items-center mt-5" onPress={()=>navigation.navigate('Categories')}>
  <MaterialIcons name="category" size={30}/>
  <Text className="font-bold text-lg">Category</Text>
   
 
 </TouchableOpacity>
    
    
    </View>
    

     
  
  </View>
  )
}

export default Settings