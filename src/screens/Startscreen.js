import { View, Text, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Startscreen = () => {

    const navigation = useNavigation()

  return (
    <SafeAreaView className="bg-green-100 flex-1">
      <View className="flex-1 flex justify-around my-4">

         <Text className="text-4xl font-bold text-green-800 text-center">Let's Get Started!</Text>
      </View>
      <View style={{flex:3}}>
      <LottieView
      autoPlay={true}
      style={{ width: '100%', height: '100%' }}
      loop={true}
     
      source={require('../../assets/Welcome.json')}
  />
      
      </View>
      <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity className="bg-green-800 px-8 py-2 rounded-full w-[250px] flex justify-center items-center flex-row space-x-14" onPress={()=>navigation.navigate('Loginmain')}>
           <Text className="text-3xl text-white tracking-widest font-bold">Start</Text>
            
           <View className="flex justify-end">
               <Ionicons name='arrow-forward' color={"white"} size={30} />
           </View>
        </TouchableOpacity>
      
      </View>

      
    </SafeAreaView>
  )
}

export default Startscreen