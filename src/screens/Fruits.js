import { View, Text,ScrollView,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Fruits = () => {

    const cardsData = [
        { name: 'Guava', image: { uri: 'https://www.bigbasket.com/media/uploads/p/m/10000369_13-fresho-guava.jpg' } },
        { name: 'Pineapple', image: { uri: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' } },
        { name: 'Mango', image: { uri: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' } },
        { name: 'Orange', image: { uri: 'https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg' } },
        { name: 'Dragen Fruit', image: { uri: 'https://media.istockphoto.com/id/1364034447/photo/fresh-pitahaya-on-white-background-dragon-fruit.jpg?s=612x612&w=0&k=20&c=mkYotHioKj-eMD5mB6t3f_BxFOucqN828Sdvk5bCqFU=' } },
        { name: 'WaterMelon', image: { uri: 'https://5.imimg.com/data5/SELLER/Default/2022/3/ZZ/PW/RZ/36905324/fruits-watermelons-500x500.jpg' } },
        { name: 'Banana', image: { uri: 'https://www.ajc.com/resizer/YjgswMcKBWU4hdmh9SLvECM6rFc=/800x0/cloudfront-us-east-1.images.arcpublishing.com/ajc/QTIH4JGHANJDD2RFEMJPEILLU4.jpg' } },
        { name: 'Apple', image: { uri: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' } },
        { name: 'Grapes', image: { uri: 'https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' } },
        // Add more card data as needed
      ];
  return (
    <View className="flex-1 bg-green-100">
    <View className="m-4"><Text className="text-2xl font-bold">Fruits</Text></View>
      <ScrollView contentContainerStyle={styles.container} className='bg-green-100'>
    {cardsData.map((card, index) => (
      <TouchableOpacity key={index} style={styles.card}>
        <Image source={card.image} style={styles.cardImage} />
        <Text style={styles.cardName}>{card.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 10,
    },
    card: {
      width: '48%',
      marginBottom: 10,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardImage: {
      width: '100%',
      height: 150,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      resizeMode: 'cover',
    },
    cardName: {
      padding: 10,
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default Fruits