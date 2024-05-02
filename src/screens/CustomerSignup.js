import { View, Text,TouchableOpacity,TextInput,ToastAndroid } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const CustomerSignup = () => {
    const navigation = useNavigation()


    const Handlesigup =()=>{

      ToastAndroid.show('Otp sent sucessful..', ToastAndroid.SHORT);
      navigation.navigate("Otpscreen")
    }
  return (
    <View className="flex-1 bg-green-100">
    <View className="flex flex-row m-10">
       <TouchableOpacity className="bg-green-800 px-2 rounded-tr-2xl rounded-bl-2xl" onPress={()=>navigation.navigate('Login')}>
         <Ionicons name='chevron-back' color={"white"} size={30}/>
       </TouchableOpacity>

      
    </View>
    <View className="flex justify-center items-center">
      <Text className="font-bold text-2xl">Customer Signup</Text>
    </View>

    <View className="flex-1 m-4">
    <View className="flex-1 flex-col space-y-2 p-4">
      <View>
        <Text className="font-bold text-lg">Full Name</Text>
        <TextInput className="border p-3 rounded-md" />

      </View>
      <View>
        <Text className="font-bold text-lg">Mobile</Text>
        <TextInput className="border p-3 rounded-md" />

      </View>
      <View>
        <Text className="font-bold text-lg" >Password</Text>
        <TextInput className="border p-3 rounded-md" />

      </View>
      <View className="flex flex-row space-x-4 justify-center">
        <TouchableOpacity className="flex bg-green-800 w-[150px] justify-center items-center p-4 rounded-md mt-10" onPress={Handlesigup}>
          <Text className="text-white"> Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex bg-red-800 w-[150px] justify-center items-center p-4 rounded-md mt-10" onPress={() => navigation.navigate('Login')}>
          <Text className="text-white"> Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
    
     
    
  </View>
  )
}

export default CustomerSignup