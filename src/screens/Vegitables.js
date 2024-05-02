import { View, Text,ScrollView,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Vegitables = () => {

    const cardsData = [
        { name: 'cauliflower', image: { uri: 'https://www.shutterstock.com/shutterstock/photos/152382770/display_1500/stock-photo-cauliflower-isolated-on-white-background-152382770.jpg' } },
        { name: 'Carrot', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kPo_ZhYgrQD8J50A31L1RWtrFUARfvhvdzljKCCe7g&s' } },
        { name: 'Brinjal', image: { uri: 'https://www.bigbasket.com/media/uploads/p/l/10000584_11-fresho-brinjal-nagpur.jpg' } },
        { name: 'Bottle gourd', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPi6m0U6pqKHPYMEVyjOLe41d3FNjPKV2BbHkWDVs91g&s' } },
        { name: 'Tomato', image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg' } },
        { name: 'Mirchi', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9h2eP8yNyGAwDv_99vL7KzNiXHxKuikevEL8oQ3Hng&s' } },
        { name: 'Onions', image: { uri: 'https://m.media-amazon.com/images/I/41Pi5dfvOoL.jpg' } },
        { name: 'Potato', image: { uri: 'https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg' } },
        { name: 'Ladies finger', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjz2-DZJITKo5tnXCNA2XJ4lRMYszMs9EWAd_HX36N6w&s' } },
        // Add more card data as needed
      ];
  return (
    <View className="flex-1 bg-green-100">
      <View className="m-4"><Text className="text-2xl font-bold">Vegitables</Text></View>
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

export default Vegitables