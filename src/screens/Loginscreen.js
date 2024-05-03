import { View, Text, TouchableOpacity,Image, SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Loginscreen = () => {

  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-green-100 mt-10">
      <View className="flex flex-row m-10">
         <TouchableOpacity className="bg-green-800 px-2 rounded-tr-2xl rounded-bl-2xl" onPress={()=>navigation.navigate('Loginmain')}>
           <Ionicons name='chevron-back' color={"white"} size={30}/>
         </TouchableOpacity>

        
      </View>
      <View className="flex justify-center items-center">
        <Text className="font-bold text-2xl">Who You are ?</Text>
      </View>
      <TouchableOpacity className="flex justify-center items-center mt-10" onPress={()=>navigation.navigate('FormerSignup')}>
           <Image source={require('../../assets/farmer1.png')} className="w-[200] h-[200] rounded-full bg-white"/>
      </TouchableOpacity>
      <View className="flex justify-center items-center mt-10">
         <Text className="text-2xl font-bold">or</Text>
      </View>
      <TouchableOpacity className="flex justify-center items-center mt-10" onPress={()=>navigation.navigate('CustomerSignup')}>
           <Image source={require('../../assets/business.png')} className="w-[200] h-[200] rounded-full bg-white"/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Loginscreen