import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MomoPaymentScreen() {
  const [couponCode, setCouponCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thanh toán MOMO</Text>

      {/* Momo Payment Method with QR Code */}
      <View style={styles.paymentMethod}>
        <Image source={require('./assets/Momo-icon.png')} style={styles.paymentIcon} />
        <Text style={styles.paymentText}>Momo</Text>
        <Ionicons name="radio-button-on" size={24} color="black" />
      </View>

      <Image source={require('./assets/qr-code.png')} style={styles.qrCode} />

      {/* Coupon Code */}
      <View style={styles.couponContainer}>
        <Ionicons name="pricetag-outline" size={24} color="#000" />
        <Text style={styles.couponText}>Mã giảm giá</Text>
      </View>

      <TextInput
        placeholder="Mã giảm giá"
        value={couponCode}
        onChangeText={setCouponCode}
        style={styles.couponInput}
      />

      <TextInput placeholder="Tổng thanh toán" style={styles.totalInput} />

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  paymentIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  paymentText: {
    flex: 1,
    fontSize: 16,
  },
  qrCode: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  couponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdd835',
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  couponText: {
    fontSize: 16,
    marginLeft: 10,
  },
  couponInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  totalInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
