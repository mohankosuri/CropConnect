import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Deatils = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http:192.168.0.113:3000/product';
    
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.data); // Update the state with fetched data
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
             
            {data.length > 0 ? (
                data.map((item) => (
                    <View key={item._id} style={styles.card}>
                        <Text style={styles.title}>{item.productname}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.price}>Price: ${item.price}</Text>
                    </View>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
       marginTop:50
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        margin: 10,
        elevation: 3,
        alignItems:"center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    price: {
        marginTop: 10,
        color: "green",
    },
});

export default Deatils;
