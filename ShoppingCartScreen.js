import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ShoppingCartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  // Lấy giỏ hàng từ AsyncStorage khi màn hình được mở
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cartItems');
        if (storedCart) {
          setCartItems(JSON.parse(storedCart)); // Tải giỏ hàng từ AsyncStorage
        }
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };

    loadCartItems();
  }, []);

  // Tính tổng số lượng và tổng tiền
  const totalQuantity = cartItems.length;

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((sum, item) => {
    // Lấy giá trị số nguyên từ phần "price" sau khi loại bỏ " VND" và dấu phẩy
    const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, "")); // Loại bỏ dấu phẩy và "VND"
    return sum + priceValue;
  }, 0);


  // Định dạng tiền theo kiểu VND
  const formattedTotalPrice = totalPrice.toLocaleString('vi-VN') + ' VND';

  // Hàm lưu giỏ hàng vào AsyncStorage
  const saveCartToStorage = async (newCart) => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(newCart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeItemFromCart = (id) => {
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart);
    saveCartToStorage(newCart); // Lưu lại giỏ hàng sau khi thay đổi
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giỏ hàng</Text>

      {/* Hiển thị các sản phẩm trong giỏ hàng */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.logo} style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.brand}>{item.provider}</Text>
              <Text style={styles.number}>{item.number}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            {/* Nút xóa sản phẩm khỏi giỏ hàng */}
            <TouchableOpacity style={styles.removeButton} onPress={() => removeItemFromCart(item.id)}>
              <Ionicons name="close-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.payment}>
        {/* Hiển thị tổng số lượng và giá */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Số lượng: {totalQuantity}</Text>
          <Text style={styles.totalText}>Tổng tiền: {formattedTotalPrice} VND</Text>
        </View>

        {/* Nút Thanh toán */}
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>

      {/* Thanh điều hướng dưới cùng */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Person')} style={styles.navItem}>
          <Ionicons name="person" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.navItem}>
          <Ionicons name="notifications-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Định nghĩa styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    padding: 5,
  },
  payment: {
    bottom: 140,
    paddingHorizontal: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 40,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 15,
    marginBottom: 20,
    paddingVertical: 25,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    left: 16,
    right: 16,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
    actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
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
  navItem: {
    alignItems: 'center',
  },
});
