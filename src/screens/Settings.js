import { View, Text,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Deatils from './Details'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Settings = () => {


  const navigation =useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-green-100 mt-10">
    <View className="mt-10 ml-10">
    
      <Text className="font-bold text-2xl">Settings</Text>
    </View>
    <View className="m-[50px]">

    <TouchableOpacity className="flex flex-row space-x-10 justify-start items-center bg-green-800 py-4 px-4 w-[300px] rounded-md" onPress={()=>navigation.navigate('Profile')}>
    <Ionicons name="person" size={30} color={"white"}/>
    <Text className="font-bold text-lg text-white">Profile</Text>
     
   
   </TouchableOpacity>
   <TouchableOpacity className="flex flex-row space-x-10 justify-start items-center mt-5 bg-green-800 py-4 px-4 w-[300px] rounded-md" onPress={()=>navigation.navigate('Details')}>
   <Ionicons name="person" size={30} color={"white"}/>
   <Text className="font-bold text-lg text-white">Deatils</Text>
    
  
  </TouchableOpacity>
  <TouchableOpacity className="flex flex-row space-x-10 justify-start items-center mt-5 bg-green-800 py-4 px-4 w-[300px] rounded-md" onPress={()=>navigation.navigate('Categories')}>
  <MaterialIcons name="category" size={30} color={"white"}/>
  <Text className="font-bold text-lg text-white">Category</Text>
   
 
 </TouchableOpacity>
    
    
    </View>
    

     
  
  </SafeAreaView>
  )
}

export default Settings