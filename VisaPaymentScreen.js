import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VisaPaymentScreen() {
  const [couponCode, setCouponCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thanh toán Visa</Text>

      {/* Visa Payment Method */}
      <View style={styles.paymentMethod}>
        <Image source={require('./assets/Visa-icon.png')} style={styles.paymentIcon} />
        <Text style={styles.paymentText}>Visa</Text>
        <Ionicons name="radio-button-on" size={24} color="black" />
      </View>

      {/* Card Number */}
      <TextInput
        placeholder="Mã thẻ"
        value={cardNumber}
        onChangeText={setCardNumber}
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Expiry Date and CVV */}
      <View style={styles.row}>
        <TextInput
          placeholder="Ngày HH"
          value={expiryDate}
          onChangeText={setExpiryDate}
          style={[styles.input, styles.halfInput]}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="CVC"
          value={cvv}
          onChangeText={setCvv}
          style={[styles.input, styles.halfInput]}
          keyboardType="numeric"
        />
      </View>

      {/* Address */}
      <TextInput
        placeholder="Địa chỉ"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      {/* Phone Number */}
      <View style={styles.row}>
        <Image source={require('./assets/flag-icon.png')} style={styles.flagIcon} />
        <Text style={styles.phonePrefix}>+84</Text>
        <TextInput
          placeholder="Số điện thoại"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={[styles.input, styles.phoneInput]}
          keyboardType="phone-pad"
        />
      </View>

      {/* Coupon Code Section */}
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
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 5,
  },
  phonePrefix: {
    fontSize: 16,
    alignSelf: 'center',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
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
