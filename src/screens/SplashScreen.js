import { View, Text, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
 
import LottieView from 'lottie-react-native';
 
import * as Animatable from 'react-native-animatable';
 

const SplashScreen = ({navigation}) => {


    setTimeout(()=>{
        navigation.push("Startscreen")
    },6000)
  return (
    <View style={{flex: 1,justifyContent:"center"}} className="bg-green-100" >
      <StatusBar/>

      <Animatable.View animation="zoomInUp" className="items-center mb-10">
               
               <Text className="text-green-800 text-5xl text-bold">Crop Connect</Text>
              
                
              
          </Animatable.View>
        
      <View style={{flex:0.4,justifyContent:'center',alignItems:"center"}}>
      <LottieView
      autoPlay={true}
      style={{ width: '100%', height: '100%' }}
      loop={true}
     
      source={require('../../assets/farmer.json')}
  />
      
      </View>
        
          
         
              
        
    </View>
  )
}

export default SplashScreen