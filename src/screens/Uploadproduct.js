import React, { useState, useEffect } from 'react';
import { View, Button, Image, Platform, Text, TouchableOpacity ,TextInput, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Uploadproduct = () => {

    const navigation = useNavigation()

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const [image, setImage] = useState(null);
    const pickImageFromCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        setIsModalVisible(false)

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const pickImageFromGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        setIsModalVisible(false)

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (

        

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} className="bg-green-100">

         
        <View className="w-[300px] ">
        <View>
        <Text className="font-bold text-lg">Product Name</Text>
        <TextInput className="border p-3 rounded-md" />

      </View>
      <View>
        <Text className="font-bold text-lg">price</Text>
        <TextInput className="border p-3 rounded-md" />

      </View>
      <View>
        <Text className="font-bold text-lg">Description</Text>
        <TextInput className="border p-3 rounded-md" />

      </View>
      <View>
        <Text className="font-bold text-lg">Category</Text>
        <TextInput className="border p-3 rounded-md" />

      </View>
      <View className="flex flex-row justify-between border h-[130px] items-center mt-10 p-4" >
      
      {image && <Image source={{ uri: image }} className="h-[100] w-[100] rounded-md" />}


      
        <TouchableOpacity onPress={handleModal} className="bg-green-800 py-2 px-4">
            <Text className="font-bold text-white">Choose Image</Text>
        </TouchableOpacity>
      
      
      
      </View>

      <View className="flex flex-row space-x-4 justify-center">
            <TouchableOpacity className="flex bg-green-800 w-[150px] justify-center items-center p-4 rounded-md mt-10">
              <Text className="text-white"> Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex bg-red-800 w-[150px] justify-center items-center p-4 rounded-md mt-10" onPress={()=>navigation.navigate('MyTabs')}>
              <Text className="text-white"> Cancel</Text>
            </TouchableOpacity>
          </View>
         
        
        </View>



            <Modal isVisible={isModalVisible}>
                <View className="bg-white p-4 h-[300px]">

                    <TouchableOpacity className="flex justify-end items-end" onPress={handleModal}><Ionicons name='close' size={30} color={"black"} /></TouchableOpacity>

                    <View className="flex flex-row justify-center items-center mt-[50px] space-x-8">
                        <TouchableOpacity onPress={pickImageFromCamera} className="bg-green-800 p-5 rounded-md">

                            <Ionicons name='camera' size={50} color={"white"} />
                            <Text className="text-white font-bold">Camera</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={pickImageFromGallery} className="bg-green-800 p-5 rounded-md">

                            <Ionicons name='aperture' size={50} color={"white"} />
                            <Text className="text-white font-bold">Gallery</Text>
                        </TouchableOpacity>


                    </View>



                </View>
            </Modal>
        </View>
       
    )
}

export default Uploadproduct