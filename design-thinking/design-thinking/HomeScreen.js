import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

export default function HomeScreen({ navigation }) {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const trivia = [
      'كنيسة المهد أُدرجت كموقع تراث عالمي سنة 2012.',
      'برك سليمان بُنيت منذ أكثر من 2000 عام.',
      'مغارة الحليب لونها أبيض طبيعي.',
      'شارع النجمة جزء من التراث العالمي.',
    ];
    setFact(trivia[0]);
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * trivia.length);
      setFact(trivia[i]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'أهلاً بك في بيت لحم ❤️',
      text2: 'اكتشف أجمل الأماكن السياحية والمطاعم والفنادق',
      position: 'top',
      visibilityTime: 4000,
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌟 اكتشف بيت لحم 🌟</Text>

      <Image source={require('../images/beth.jpg')} style={styles.image} />

      <Text style={styles.description}>
        بيت لحم، المدينة المقدسة، موطن كنيسة المهد ومغارة الحليب، وسوق النجمة. مليانة تاريخ وثقافة وروح فلسطينية أصيلة 🇵🇸✨
      </Text>

      <View style={styles.triviaBox}>
        <Text style={styles.triviaTitle}>💡 معلومة عشوائية</Text>
        <Text style={styles.triviaText}>{fact}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.touristBtn]}
        onPress={() => navigation.navigate('TouristPlaces')}
      >
        <Text style={styles.buttonText}>🏰 الأماكن السياحية</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.hotelBtn]}
        onPress={() => navigation.navigate('Hotels')}
      >
        <Text style={styles.buttonText}>🏨 الأوتيلات</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.restaurantBtn]}
        onPress={() => navigation.navigate('Restaurants')}
      >
        <Text style={styles.buttonText}>🍽️ المطاعم</Text>
      </TouchableOpacity>

      {/* زر التكاسي */}
      <TouchableOpacity
        style={[styles.button, styles.taxiBtn]}
        onPress={() => navigation.navigate('TaxiFares')}
      >
        <Text style={[styles.buttonText, styles.taxiText]}>🚖 استعرض التكاسي</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#34495e',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 210,
    borderRadius: 18,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#444',
    marginBottom: 25,
  },
  triviaBox: {
    backgroundColor: '#fff',
    borderLeftWidth: 5,
    borderLeftColor: '#6c5ce7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  triviaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6c5ce7',
    marginBottom: 5,
  },
  triviaText: {
    fontSize: 15,
    color: '#333',
    fontStyle: 'italic',
  },
  button: {
    paddingVertical: 14,
    borderRadius: 15,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  touristBtn: { backgroundColor: '#3498db' },
  hotelBtn: { backgroundColor: '#2ecc71' },
  restaurantBtn: { backgroundColor: '#e67e22' },

  // ➕ ستايلات زر التكاسي
  taxiBtn: { backgroundColor: '#FFD700' }, // ذهبي
  taxiText: { color: '#111' }, // نص غامق ليتباين مع الذهبي
});
