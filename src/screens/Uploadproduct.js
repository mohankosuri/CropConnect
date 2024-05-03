import React, { useState, useEffect } from 'react';
import { View, Button, Image, Platform,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Uploadproduct = () => {

    const [image, setImage] = useState(null);
    const pickImageFromCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        console.log(result);

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

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
      };

  return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button title="Pick an image from camera" onPress={pickImageFromCamera} />
    <Button title="Pick an image from gallery" onPress={pickImageFromGallery} />
    

    {image && <Image source={{ uri: image }} className="h-[200] w-[200] rounded-full" />}
  </View>
     
  )
}

export default Uploadproduct