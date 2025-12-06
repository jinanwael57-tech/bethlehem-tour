import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const hotels = [
  {
    id: '1',
    name: 'فندق قصر جاسر',
    location: 'شارع القدس-الخليل',
    image: require('../images/jacir.webp'),
    description: 'فندق فاخر بطابع تاريخي قريب من وسط المدينة',
    price: 'ابتداءً من 350 شيكل/ليلة',
  },
  {
    id: '2',
    name: 'فندق جراند',
    location: 'وسط المدينة',
    image: require('../images/grand.jpg'),
    description: 'فندق جراند بيت لحم يوفر إقامة مريحة بأسعار مناسبة وموقع قريب من مركز المدينة',
    price: 'ابتداءً من 220 شيكل/ليلة',
  },
  {
   id: '3',
    name: 'فندق ساحة المهد',
    location: 'وسط المدينة',
    image: require('../images/na.jpeg'),
    description: 'يقع مباشرة مقابل كنيسة المهد، مثالي للسياح',
    price: 'ابتداءً من 280 شيكل/ليلة',
  },
   {
   id: '4',
    name: 'فندق المهد',
    location: 'وسط المدينة',
    image: require('../images/nativityhotel.jpg'),
    description: 'فندق المهد يتميّز بموقعه المركزي وخدمته الجيدة، ويقدّم إقامة مريحة',
    price: 'ابتداءً من 250 شيكل/ليلة',
  },
];

export default function HotelsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>الأوتيلات في بيت لحم</Text>
      <FlatList
        data={hotels}
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
  card: { backgroundColor: '#f0f0f0', padding: 15, marginBottom: 20, borderRadius: 12 },
  image: { width: '100%', height: 180, borderRadius: 10, marginBottom: 10 },
  name: { fontWeight: 'bold', fontSize: 18, marginBottom: 5 },
  price: { marginTop: 8, fontWeight: 'bold', color: '#388e3c' },
});
