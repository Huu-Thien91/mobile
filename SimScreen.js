import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SimScreen({ navigation }) {


  const simList = [
    { id: 1, provider: 'Viettel', number: '0763.471.258', price: '100.000 VND', logo: require('./assets/Viettel.png') },
    { id: 2, provider: 'Mobifone', number: '0863.471.258', price: '100.000 VND', logo: require('./assets/Mobilefone.png') },
    { id: 3, provider: 'Viettel', number: '0763.471.258', price: '100.000 VND', logo: require('./assets/Viettel.png') },
    { id: 4, provider: 'Mobifone', number: '0863.471.258', price: '100.000 VND', logo: require('./assets/Mobilefone.png') },
    { id: 5, provider: 'Viettel', number: '0123.456.789', price: '200.000.000.000 VND', logo: require('./assets/Viettel.png') },
    { id: 6, provider: 'Mobifone', number: '0888.234.567', price: '300.000.000 VND', logo: require('./assets/Mobilefone.png') },
    { id: 7, provider: 'Viettel', number: '0999.888.777', price: '100.000.000.000 VND', logo: require('./assets/Viettel.png') },
    { id: 8, provider: 'Mobifone', number: '0838.666.789', price: '100.000.000 VND', logo: require('./assets/Mobilefone.png') },
  ];


  const handleSimPress = (sim) => {
    // Điều hướng tới SimInfoScreen và truyền dữ liệu Sim
    navigation.navigate('SimInfo', {
      provider: sim.provider,
      number: sim.number,
      price: sim.price,
      logo: sim.logo,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {simList.map((sim) => (
          <TouchableOpacity
            key={sim.id}
            style={styles.simCard}
            onPress={() => handleSimPress(sim)}
          >
            <Image source={sim.logo} style={styles.logo} />
            <View style={styles.simInfo}>
              <Text style={styles.simNumber}>{sim.number}</Text>
              <Text style={styles.simDetail}>Sim số đẹp</Text>
              <Text style={styles.simPrice}>{sim.price}</Text>
            </View>
            <Ionicons name="add-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Thanh điều hướng dưới cùng */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Person')}>
          <Ionicons name="person-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  simCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  simInfo: {
    flex: 1,
    marginLeft: 10,
  },
  simNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  simDetail: {
    color: 'gray',
    marginTop: 5,
  },
  simPrice: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 25,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
