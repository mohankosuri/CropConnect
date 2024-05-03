import { View, Text,ScrollView,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Milk = () => {

    const cardsData = [
        { name: 'Curd', image: { uri: 'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2014/06/How-to-set-curd-in-winters-13.jpg' } },
        { name: 'Cheese', image: { uri: 'https://cdn.usdairy.com/optimize/getmedia/6ab03180-cc90-4a03-a339-13b540ecc8a5/american.jpg.jpg.aspx?format=webp' } },
        { name: 'Milk', image: { uri: 'https://www.shape.com/thmb/kUWl4OdnLpkVaJEDRuDsapCa3RU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/milk-700x700_0-eab334cb6a1446c684d920c44fdeece7.jpg' } },
        
      ];
  return (
    <SafeAreaView className="flex-1 bg-green-100">
    <View className="m-4"><Text className="text-2xl font-bold">Milk Products</Text></View>
      <ScrollView contentContainerStyle={styles.container} className='bg-green-100'>
    {cardsData.map((card, index) => (
      <TouchableOpacity key={index} style={styles.card}>
        <Image source={card.image} style={styles.cardImage} />
        <Text style={styles.cardName}>{card.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
    </SafeAreaView>
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

export default Milk