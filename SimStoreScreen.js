import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SimStoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Hình nền full màn hình */}
      <ImageBackground
        source={require('./assets/tho.png')} // Đảm bảo đường dẫn hình ảnh chính xác
        style={styles.imageBackground}
        resizeMode="contain" // Điều chỉnh kích thước ảnh để vừa khung mà không bị cắt
      >
        {/* Nội dung */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to SIM Store</Text>
          <Text style={styles.subTitle}>Mua SIM, kết nối nhanh</Text>

          {/* Nút Get Started */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Lớp phủ mờ trên hình nền
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA500', // Màu cam cho nút
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3, // Hiệu ứng nổi cho nút
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
