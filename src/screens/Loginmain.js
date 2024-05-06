import { View, Text, TouchableOpacity, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Loginmain = () => {
  const navigation = useNavigation()
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.105:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Login successful
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
        navigation.navigate('MyTabs')
        // Navigate to next screen or perform any action
      } else {
        // Login failed
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error:', error);
      ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-green-100">
      <View className="flex flex-row m-10">
        <TouchableOpacity className="bg-green-800 px-2 rounded-tr-2xl rounded-bl-2xl" onPress={() => navigation.navigate('Startscreen')}>
          <Ionicons name='chevron-back' color={"white"} size={30} />
        </TouchableOpacity>


      </View>
      <ScrollView>
      <View className="flex justify-center items-center mt-[100px]">
        <Text className="font-bold text-4xl tracking-widest">Login</Text>
      </View>

      <View className="flex-1 mt-10 mx-4">
        <View className="flex-1 flex-col space-y-2 p-4">
           
          <View>
            <Text className="font-bold text-lg">Mobile</Text>
            <TextInput className="border p-3 rounded-md" onChangeText={text => setMobile(text)}
            value={mobile} keyboardType='phone-pad'/>

          </View>
          <View>
            <Text className="font-bold text-lg" >Password</Text>
            <TextInput className="border p-3 rounded-md" onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry/>

          </View>
          <View className="flex flex-row space-x-4 justify-center">
            <TouchableOpacity className="flex bg-green-800 w-[150px] justify-center items-center p-4 rounded-md mt-10" onPress={handleLogin}>
              <Text className="text-white"> Login</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex bg-red-800 w-[150px] justify-center items-center p-4 rounded-md mt-10" onPress={() => navigation.navigate('Login')}>
              <Text className="text-white"> Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-1  justify-center items-center flex-row space-x-4">
        <Text className="text-lg">Dont't have an Account ?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text className="text-lg font-bold">Sighup</Text></TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      

    </SafeAreaView>
  )
}

export default Loginmain