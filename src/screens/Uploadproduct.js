import React, { useState } from 'react';
import { View, Button, Image, Platform, Text, TouchableOpacity, TextInput, ScrollView, ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Uploadproduct = () => {
    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(!isModalVisible);

    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        productname: "",
        description: "",
        price: "",
    });

    const createproduct = async () => {
        const { productname, description, price } = values;

        try {
            const response = await fetch('http://192.168.29.74:3000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productname,
                    description,
                    price,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
                navigation.navigate('Details');
            } else {
                ToastAndroid.show(data.message, ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error('Error:', error);
            ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
        }
    };

    const pickImageFromCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        setIsModalVisible(false);

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

        setIsModalVisible(false);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleInputChange = (name, value) => {
        setValues({ ...values, [name]: value });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }} className="bg-green-100">
         

            <View className="w-[350px] mt-[80px]">
            <View className="flex justify-center items-center mb-4"><Text className="font-bold text-2xl">Add Your Product</Text></View>
                <View>
                    <Text className="font-bold text-lg">Product Name</Text>
                    <TextInput
                        className="border p-3 rounded-md"
                        onChangeText={(text) => handleInputChange('productname', text)}
                        value={values.productname}
                    />
                </View>
                <View>
                    <Text className="font-bold text-lg">Price</Text>
                    <TextInput
                        className="border p-3 rounded-md"
                        onChangeText={(text) => handleInputChange('price', text)}
                        value={values.price}
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <Text className="font-bold text-lg">Description</Text>
                    <TextInput
                        className="border p-3 rounded-md"
                        onChangeText={(text) => handleInputChange('description', text)}
                        value={values.description}
                    />
                </View>
                <View>
                    <Text className="font-bold text-lg">Category</Text>
                    <TextInput className="border p-3 rounded-md" />
                </View>
                <View className="flex flex-row justify-between border h-[130px] items-center mt-10 p-4">
                    {image && <Image source={{ uri: image }} className="h-[100px] w-[100px] rounded-md" />}
                    <TouchableOpacity onPress={handleModal} className="bg-green-800 py-2 px-4">
                        <Text className="font-bold text-white">Choose Image</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-row space-x-4 justify-center">
                    <TouchableOpacity className="flex bg-green-800 w-[150px] justify-center items-center p-4 rounded-md mt-10" onPress={createproduct}>
                        <Text className="text-white">Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex bg-red-800 w-[150px] justify-center items-center p-4 rounded-md mt-10" onPress={() => navigation.navigate('MyTabs')}>
                        <Text className="text-white">Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal isVisible={isModalVisible}>
                <View className="bg-white p-4 h-[300px]">
                    <TouchableOpacity className="flex justify-end items-end" onPress={handleModal}>
                        <Ionicons name='close' size={30} color={"black"} />
                    </TouchableOpacity>
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
        </ScrollView>
    );
}

export default Uploadproduct;
