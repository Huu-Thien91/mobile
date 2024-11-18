import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  // Lấy trạng thái Dark Mode từ AsyncStorage khi khởi động màn hình
  useEffect(() => {
    const loadDarkModeSetting = async () => {
      try {
        const storedDarkMode = await AsyncStorage.getItem('isDarkModeEnabled');
        if (storedDarkMode !== null) {
          setIsDarkModeEnabled(JSON.parse(storedDarkMode));
        }
      } catch (error) {
        console.error('Error loading dark mode setting:', error);
      }
    };

    loadDarkModeSetting();
  }, []);

  // Lưu trạng thái Dark Mode vào AsyncStorage khi thay đổi
  const toggleDarkMode = async () => {
    const newDarkModeSetting = !isDarkModeEnabled;
    setIsDarkModeEnabled(newDarkModeSetting);

    try {
      await AsyncStorage.setItem('isDarkModeEnabled', JSON.stringify(newDarkModeSetting));
    } catch (error) {
      console.error('Error saving dark mode setting:', error);
    }
  };

  return (
    <View style={[styles.container, isDarkModeEnabled ? styles.darkContainer : styles.lightContainer]}>

      {/* Settings Items */}
      <View style={[styles.settingsContainer, isDarkModeEnabled ? styles.darkSettingsContainer : styles.lightSettingsContainer]}>
        {[ 
          { text: 'Cài đặt tài khoản' },
          { text: 'Đổi mật khẩu' },
          { text: 'Thông báo', hasSwitch: true, switchValue: isNotificationsEnabled, onSwitchChange: setIsNotificationsEnabled },
          { text: 'Ngôn ngữ' },
          { text: 'Giao diện (Sáng/Tối)', hasSwitch: true, switchValue: isDarkModeEnabled, onSwitchChange: toggleDarkMode },
          { 
            text: 'Lịch sử mua hàng',
            onPress: () => navigation.navigate('PurchaseHistory'), // Thêm điều hướng ở đây
          },
        ].map((item, index) => (
          <View key={index} style={styles.settingsItem}>
            <Text style={[styles.settingsText, isDarkModeEnabled ? styles.darkText : styles.lightText]} numberOfLines={1}>
              {item.text}
            </Text>
            {item.hasSwitch ? (
              <Switch
                value={item.switchValue}
                onValueChange={(value) => item.onSwitchChange(value)}
                thumbColor={item.switchValue ? "#f5dd4b" : "#f4f3f4"}
                trackColor={{ false: "#767577", true: "#ffcc00" }}
              />
            ) : (
              <Ionicons name="chevron-forward-outline" size={20} color={isDarkModeEnabled ? "#fff" : "gray"} />
            )}
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, isDarkModeEnabled ? styles.darkBottomNav : styles.lightBottomNav]}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Person')}>
          <Ionicons name="person-outline" size={24} color={isDarkModeEnabled ? '#fff' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={24} color={isDarkModeEnabled ? '#fff' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color={isDarkModeEnabled ? '#fff' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications-outline" size={24} color={isDarkModeEnabled ? '#fff' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color={isDarkModeEnabled ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#f8f8f8',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  settingsContainer: {
    borderRadius: 10,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 5,
  },
  lightSettingsContainer: {
    backgroundColor: '#fff',
  },
  darkSettingsContainer: {
    backgroundColor: '#444',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 15,
  },
  settingsText: {
    fontSize: width * 0.04, // Scales text based on screen width
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#fff',
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
  lightBottomNav: {
    backgroundColor: '#fff',
  },
  darkBottomNav: {
    backgroundColor: '#444',
  },
  navItem: {
    alignItems: 'center',
  },
});
