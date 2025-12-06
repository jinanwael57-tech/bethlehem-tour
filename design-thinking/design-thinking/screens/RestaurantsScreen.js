import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const restaurants = [
  {
    id: '1',
    name: 'مطعم الخيمة',
    type: 'مأكولات شرقية',
    image: require('../images/tent.jpg'), // أضف صورة داخل مجلد assets
    description: 'جلسة عربية داخل خيمة تراثية تقدم المشاوي والمقبلات',
    price: 'متوسط السعر: 80 شيكل للشخص',
  },
  {
    id: '2',
    name: 'مطعم باب الدير',
    type: 'مأكولات فلسطينية وعالمية',
    image: require('../images/bab.jpg'), // أضف صورة داخل مجلد assets
    description: 'مطعم راقٍ بقلب بيت لحم يقدم أطباق فلسطينية تقليدية ومأكولات عالمية',
    price: 'متوسط السعر: 90 شيكل للشخص',
  },
  {
    id: '3',
    name: 'مطعم Black Pepper',
    type: 'برجر وستيك ومأكولات غربية',
    image: require('../images/pepper.jpg'), // أضف صورة داخل مجلد assets
    description: 'مطعم عصري يقدم تشكيلة من البرجر والستيك في أجواء شبابية',
    price: 'متوسط السعر: 70 شيكل للشخص',
  },
  {
  id: '4',
    name: 'مطعم حرش الزيتون',
    type: 'برجر وستيك ومأكولات غربية',
    image: require('../images/olive.jpg'), // أضف صورة داخل مجلد assets
    description: 'مطعم عصري يقدم تشكيلة من البرجر والستيك',
    price: 'متوسط السعر: 50 شيكل للشخص',
  },
];

export default function RestaurantsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>المطاعم في بيت لحم</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  card: { backgroundColor: '#f9f9f9', padding: 15, marginBottom: 20, borderRadius: 12 },
  image: { width: '100%', height: 180, borderRadius: 10, marginBottom: 10 },
  name: { fontWeight: 'bold', fontSize: 18, marginBottom: 5 },
  price: { marginTop: 8, fontWeight: 'bold', color: '#d84315' },
});
