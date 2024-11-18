import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DataScreen({ navigation }) {
  const dataPackages = [
    { id: 1, provider: 'Mobifone', package: '10GB + 200MB', price: '100k/30 ngày', logo: require('./assets/Mobip.png') },
    { id: 2, provider: 'Vina', package: '10GB + 200MB', price: '100k/30 ngày', logo: require('./assets/Vinap.png') },
    { id: 3, provider: 'Vietnammobil', package: '10GB + 200MB', price: '100k/30 ngày', logo: require('./assets/VIetnammobile.png') },
    { id: 4, provider: 'Viettel', package: '10GB + 200MB', price: '100k/30 ngày', logo: require('./assets/Viettel.png') },
    { id: 5, provider: 'Mobifone', package: '20GB + 500MB', price: '250k/30 ngày', logo: require('./assets/Mobip.png') },
    { id: 6, provider: 'Vina', package: '20GB + 250MB', price: '200k/30 ngày', logo: require('./assets/Vinap.png') },
    { id: 7, provider: 'Vietnammobil', package: '50GB + 1GB', price: '500k/30 ngày', logo: require('./assets/VIetnammobile.png') },
    { id: 8, provider: 'Viettel', package: '30GB + 500MB', price: '300k/30 ngày', logo: require('./assets/Viettel.png') },
  ];

  const handlePackagePress = (dataPackage) => {
    navigation.navigate('DataPackageInfoS', {
      provider: dataPackage.provider,
      package: dataPackage.package,
      price: dataPackage.price,
      logo: dataPackage.logo,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {dataPackages.map((dataPackage) => (
          <TouchableOpacity
            key={dataPackage.id}
            style={styles.packageCard}
            onPress={() => handlePackagePress(dataPackage)}
          >
            <Image source={dataPackage.logo} style={styles.logo} />
            <View style={styles.packageInfo}>
              <Text style={styles.provider}>{dataPackage.provider}</Text>
              <Text style={styles.package}>{dataPackage.package}</Text>
              <Text style={styles.price}>{dataPackage.price}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
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
  packageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  packageInfo: {
    flex: 1,
    marginLeft: 10,
  },
  provider: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  package: {
    color: 'gray',
    marginTop: 5,
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
    color: 'orange',
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
