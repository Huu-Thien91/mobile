import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import AboutScreen from './AboutScreen';
import DataScreen from './DataScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NewPasswordScreen from './NewPasswordScreen';
import NotificationScreen from './NotificationScreen';
import PhoneCardScreen from './PhoneCardScreen';
import RegisterScreen from './RegisterScreen';
import SettingsScreen from './SettingsScreen';
import SimScreen from './SimScreen';
import SimStoreScreen from './SimStoreScreen';
import PersonScreen from './PersonScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
import CheckoutScreen from './CheckoutScreen';
import MomoPaymentScreen from './MomoPaymentScreen';
import VisaPaymentScreen from './VisaPaymentScreen';
import PhoneCardPaymentScreen from './PhoneCardPaymentScreen';
import SimInfoScreen from './SimInfoScreen';
import DataPackageInfoScreen from './DataPackageInfoScreen';
import PurchaseHistoryScreen from './PurchaseHistoryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SimStore">
          <Stack.Screen
            name="SimStore"
            component={SimStoreScreen}
            options={{ headerShown: false }} // Ẩn tiêu đề màn hình
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} // Ẩn tiêu đề màn hình đăng nhập
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Đăng ký', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{ title: 'Quên Mật Khẩu', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="NewPassword"
            component={NewPasswordScreen}
            options={{ title: 'Tạo Mật Khẩu Mới', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // Ẩn tiêu đề màn hình Home
          />
          <Stack.Screen
            name="Sim"
            component={SimScreen}
            options={{ title: 'Sim', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Data"
            component={DataScreen}
            options={{ title: 'Data', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="PhoneCard"
            component={PhoneCardScreen}
            options={{ title: 'PhoneCard', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: 'About', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={{ title: 'Notification', headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: 'Settings', headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="Person"
            component={PersonScreen}
            options={{ headerShown: false, headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="Cart"
            component={ShoppingCartScreen}
            options={{ headerShown: false, headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ headerShown: false, headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="MomoPayment"
            component={MomoPaymentScreen}
            options={{ headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="VisaPayment"
            component={VisaPaymentScreen}
            options={{ headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="PhoneCardPayment"
            component={PhoneCardPaymentScreen}
            options={{ headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="SimInfo"
            component={SimInfoScreen}
            options={{ headerShown: false, headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="DataPackageInfoS"
            component={DataPackageInfoScreen}
            options={{ headerShown: false, headerTitleAlign: 'center', animationEnabled: false }}
          />
          <Stack.Screen
            name="PurchaseHistory"
            component={PurchaseHistoryScreen}
            options={{ headerShown: false, headerTitleAlign: 'center', animationEnabled: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}
