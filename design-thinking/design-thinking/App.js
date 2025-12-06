import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';

import TouristPlacesScreen from './screens/TouristPlacesScreen';
import PlaceDetailsScreen from './screens/PlaceDetailsScreen';
import HotelsScreen from './screens/HotelsScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import PlanScreen from './screens/PlanScreen';
// 👇 شاشة التكاسي
import TaxiFaresScreen from './screens/TaxiFaresScreen';

const Stack = createNativeStackNavigator();

// 👇 مكوّن لعرض اللوجو داخل الهيدر
const LogoTitle = () => (
  <Image
    source={require('./images/logo.png')}
    style={{ width: 140, height: 36 }}
    resizeMode="contain"
  />
);

function HomeScreen({ navigation }) {
  useEffect(() => {
    Alert.alert('أهلاً بك في بيت لحم ❤️', 'اكتشف أجمل الأماكن السياحية والمطاعم والفنادق في المدينة!', [{ text: 'حسناً' }]);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 👇 لوجو أعلى الصفحة بدل العنوان النصّي */}
      <Image source={require('./images/logo.png')} style={styles.logo} resizeMode="contain" />

      {/* لو حابة ترجعِ العنوان النصّي، فعّلي السطر التالي */}
      { <Text style={styles.title}>"جولة في بيت لحم"</Text> }

      <Image source={require('./images/beth.jpg')} style={styles.image} />

      <Text style={styles.description}>
        ✨بيت لحم، لؤلؤة فلسطين المقدسة موطن الميلاد وسحر التاريخ، عبق الكنائس والأسواق، حيث يلتقي الإيمان بجمال الأرض وروح الأصالة✨ 
      </Text>

      <TouchableOpacity style={[styles.button, styles.touristBtn]} onPress={() => navigation.navigate('TouristPlaces')}>
        <Text style={styles.buttonText}>🏰 استكشف الأماكن السياحية</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.hotelBtn]} onPress={() => navigation.navigate('Hotels')}>
        <Text style={styles.buttonText}>🏨 استعرض الأوتيلات</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.restaurantBtn]} onPress={() => navigation.navigate('Restaurants')}>
        <Text style={styles.buttonText}>🍽️ استعرض المطاعم</Text>
      </TouchableOpacity>

      {/* ✅ زر التكاسي */}
      <TouchableOpacity
        style={[styles.button, styles.taxiBtn]}
        onPress={() => navigation.navigate('TaxiFares')}
      >
        <Text style={[styles.buttonText, styles.taxiText]}>🚖 استعرض التكاسي</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // 👇 اللوجو كترويسة لكل الشاشات
        screenOptions={{
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
        <Stack.Screen name="TouristPlaces" component={TouristPlacesScreen} options={{ title: 'أماكن سياحية' }} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} options={{ title: 'تفاصيل المعلم' }} />
        <Stack.Screen name="Hotels" component={HotelsScreen} options={{ title: 'الأوتيلات' }} />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} options={{ title: 'المطاعم' }} />
        <Stack.Screen name="Plan" component={PlanScreen} options={{ title: 'مخطط الرحلة' }} />
        {/* 👇 تسجيل شاشة التكاسي */}
        <Stack.Screen name="TaxiFares" component={TaxiFaresScreen} options={{ title: 'التكاسي' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#fff', flexGrow: 1 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#2c3e50', textAlign: 'center' },

  // 👇 ستايل اللوجو في شاشة Home
  logo: { width: 180, height: 60, marginTop: 10, marginBottom: 10 },

  image: { width: 320, height: 200, borderRadius: 15, marginBottom: 20 },
  description: { fontSize: 16, textAlign: 'center', lineHeight: 24, color: '#555', marginBottom: 30 },
  button: { paddingVertical: 14, paddingHorizontal: 20, borderRadius: 12, marginBottom: 15, width: '100%', alignItems: 'center', elevation: 2 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  touristBtn: { backgroundColor: '#2196F3' },
  hotelBtn: { backgroundColor: '#4CAF50' },
  restaurantBtn: { backgroundColor: '#FF5722' },
  // ➕ ستايل زر التكاسي
  taxiBtn: { backgroundColor: '#FFD700' },
  taxiText: { color: '#111' },
});
