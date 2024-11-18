import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PhoneCardScreen() {
  // Dữ liệu mẫu cho nhà mạng và các mệnh giá
  const phoneCardList = [
    {
      id: 1,
      provider: 'Mobifone',
      logo: require('./assets/Mobip.png'),
      prices: ['10.000 VND', '20.000 VND', '50.000 VND', '100.000 VND', '200.000 VND', '500.000 VND']
    },
    {
      id: 2,
      provider: 'Vina',
      logo: require('./assets/Vinap.png'),
      prices: ['10.000 VND', '20.000 VND', '50.000 VND', '100.000 VND', '200.000 VND', '500.000 VND']
    },
    {
      id: 3,
      provider: 'Viettel',
      logo: require('./assets/Viettel.png'),
      prices: ['10.000 VND', '20.000 VND', '50.000 VND', '100.000 VND', '200.000 VND', '500.000 VND']
    },
    {
      id: 4,
      provider: 'Vietnamobile',
      logo: require('./assets/Viettel.png'),
      prices: ['10.000 VND', '20.000 VND', '50.000 VND', '100.000 VND', '200.000 VND', '500.000 VND']
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {phoneCardList.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            {/* Logo nhà mạng */}
            <Image source={card.logo} style={styles.logo} />

            {/* Mệnh giá */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceTitle}>Mệnh giá</Text>
              <View style={styles.pricesRow}>
                {card.prices.map((price, index) => (
                  <TouchableOpacity key={index} style={styles.priceBox}>
                    <Text style={styles.priceText}>{price}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  priceContainer: {
    flex: 1,
    marginLeft: 10,
  },
  priceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pricesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  priceBox: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 8,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
