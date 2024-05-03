import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const Topnav = ({handleSearch,searchQuery}) => {
    

    const navigation= useNavigation()
  return (
    <View className="p-4 flex flex-row">
    <View className="w-[270px]">
    <Searchbar
    placeholder="Search"
    onChangeText={handleSearch}
    value={searchQuery}
  />
    </View>
    <TouchableOpacity className="flex justify-center ml-[50px]" onPress={() => navigation.navigate("Profile")}>
    <Avatar.Image size={50} source={require('../../assets/business.png')}  />
    
    </TouchableOpacity>
      
    
    </View>
  )
}

export default Topnav