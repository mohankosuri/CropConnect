import React from "react";

import { View,Text, ScrollView, ImageBackground } from "react-native";

const Deatils =()=>{
      
    return(
        <View className="flex-1 bg-green-100">
        <ImageBackground source={require("../../assets/background2.png")} className="flex-1 opacity-90">
        <Text className="text-green-800 text-2xl font-bold">Details</Text>
    
         <ScrollView className="flex flex-row gap-2" horizontal>
         
            <View className="bg-red-300 w-[200px] h-[200px] rounded-md"></View>
            <View className="bg-red-300 w-[200px] h-[200px] rounded-md"></View>
            <View className="bg-red-300 w-[200px] h-[200px] rounded-md"></View>
            <View className="bg-red-300 w-[200px] h-[200px] rounded-md"></View>
            <View className="bg-red-300 w-[200px] h-[200px] rounded-md"></View>
         
         </ScrollView>
         </ImageBackground>
      </View>
    )

}


 
export default Deatils