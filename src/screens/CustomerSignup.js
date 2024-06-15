import { View, Text,TouchableOpacity,TextInput,ToastAndroid,SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const CustomerSignup = () => {
    const navigation = useNavigation()
    
    const [values,setValues]=useState({
      fullname:"",
      mobile:"",
      password:"",
      confirmpassword:""
    })

    const Handlechange = (fieldName, text) => {
      setValues({
        ...values,
        [fieldName]: text
      });
     
    }
    

    const Handlesigup = async () => {
      try {
        const response = await fetch('http://192.168.0.103:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
  
        const responseData = await response.json();
        ToastAndroid.show(responseData.message, ToastAndroid.SHORT);
        navigation.navigate('Loginmain');
         
      } catch (error) {
        console.error(error);
        ToastAndroid.show('An error occurred. Please try again.', ToastAndroid.SHORT);
      }
    }
  return (
    <SafeAreaView className="flex-1 bg-green-100 mt-10">
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
        <TextInput className="border p-3 rounded-md" value={values.fullname} onChangeText={(text) => Handlechange("fullname", text)} />

      </View>
      <View>
        <Text className="font-bold text-lg">Mobile</Text>
        <TextInput className="border p-3 rounded-md" value={values.mobile} onChangeText={(text) => Handlechange("mobile", text)} keyboardType="phone-pad"/>

      </View>
      <View>
        <Text className="font-bold text-lg">Password</Text>
        <TextInput className="border p-3 rounded-md" value={values.password} onChangeText={(text) => Handlechange("password", text)} secureTextEntry={true}/>

      </View>
      <View>
            <Text className="font-bold text-lg" >Confirm Password</Text>
            <TextInput className="border p-3 rounded-md" value={values.confirmpassword} onChangeText={(text) => Handlechange("confirmpassword", text)} secureTextEntry={true}/>

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
    
     
    
  </SafeAreaView>
  )
}

export default CustomerSignup