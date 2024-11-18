import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="gray" />
        <TextInput placeholder="Nhập những gì bạn muốn" style={styles.searchInput} />
        <Ionicons name="options-outline" size={24} color="gray" />
      </View>

      {/* Thanh điều hướng tab */}
      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <Text style={styles.tab}>Data/4G</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tab}>Thẻ điện thoại</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.tab, styles.activeTab]}>Giới thiệu</Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung cuộn */}
      <ScrollView style={styles.contentContainer}>
        {/* Hình ảnh giới thiệu */}
        <Image
          source={require('./assets/gt.png')} // Thay bằng đường dẫn ảnh của bạn
          style={styles.introImage}
        />

        {/* Văn bản giới thiệu */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            • Chúng tôi là đội ngũ chuyên nghiệp và nhiệt huyết, chuyên cung cấp sim và thẻ điện thoại với nhiều ưu đãi hấp dẫn. Với các loại sim đa dạng từ sim số đẹp đến sim data khủng, chúng tôi luôn sẵn sàng tư vấn và hỗ trợ khách hàng tìm sản phẩm phù hợp.
          </Text>
          <Text style={styles.text}>
            • Với phương châm "Tiện lợi - Minh bạch - Uy tín", chúng tôi cam kết mang đến trải nghiệm mua sắm nhanh chóng và đáng tin cậy, đồng hành cùng bạn trong mọi kết nối cuộc sống.
          </Text>
        </View>
      </ScrollView>

      {/* Thanh điều hướng dưới cùng */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 10,
  },
  introImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#333',
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
