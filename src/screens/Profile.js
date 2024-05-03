import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({ navigation }) => {
    const [image, setImage] = useState(null);

    

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-green-100">

        <View className="flex flex-row m-10">
         <TouchableOpacity className="bg-green-800 px-2 rounded-tr-2xl rounded-bl-2xl" onPress={()=>navigation.navigate('Settings')}>
           <Ionicons name='chevron-back' color={"white"} size={30}/>
         </TouchableOpacity>

        
      </View>

            <View style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}>

                <TouchableOpacity onPress={pickImage} className="bg-pink-100 rounded-full w-[200] h-[200] border border-gray-300" >
                    {image && <Image source={{ uri: image }} className="h-[200] w-[200] rounded-full" />}
                    <View className="absolute mt-[150px] ml-[140px] rounded-full"><Ionicons name='camera' size={40} /></View>
                </TouchableOpacity>


            </View>


            <View className="m-10">
                <View className="flex flex-row justify-start items-center space-x-4">
                  <Ionicons name="person" size={30}/>
                  <Text className="text-lg font-bold">Mohan krishna</Text>
                </View>
                
                <View className="flex flex-row justify-start items-center space-x-4 mt-10">
                     <Fontisto name="mobile-alt" size={30}/>
                  <Text className="text-lg">8688852788</Text>
                </View>

                <View className="mt-10 flex flex-row justify-start items-center space-x-4">
                <TouchableOpacity className="flex-row space-x-4 justify-center items-center" onPress={() => navigation.navigate("Loginmain")}>
                    <SimpleLineIcons name="logout" size={30} />
                    <Text className="text-lg font-bold">Logout</Text>
                </TouchableOpacity>
            </View>
            </View>

            
        </SafeAreaView>
    );
}

export default Profile