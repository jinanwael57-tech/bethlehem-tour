import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

export default function TouristPlacesScreen({ navigation }) {
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [query, setQuery] = useState('');

  const addToPlan = (place) => {
    if (!selectedPlaces.some(p => p.name === place.name)) {
      setSelectedPlaces([...selectedPlaces, place]);
    }
  };

  const clearPlan = () => {
    Alert.alert(
      'تأكيد التفريغ',
      'هل تريد فعلاً تفريغ مخطط الرحلة؟',
      [
        { text: 'إلغاء', style: 'cancel' },
        {
          text: 'تفريغ',
          style: 'destructive',
          onPress: () => setSelectedPlaces([]),
        },
      ]
    );
  };

  const places = [
    {
      name: 'كنيسة المهد',
      description: 'من أقدس الأماكن المسيحية في العالم...',
      images: [require('../images/nativity.webp'), require('../images/nativity2.jpg')],
    },
    {
      name: 'مغارة الحليب',
      description: 'يقال أن مريم العذراء أرضعت يسوع هنا...',
      images: [require('../images/milk.jpg'), require('../images/milk2.jpg')],
    },
    {
      name: 'شارع النجمة',
      description: 'شارع تاريخي جميل مليء بالتحف والمتاجر...',
      images: [require('../images/star.jpg'), require('../images/star3.jpg')],
    },
    {
      name: 'برك سليمان',
      description: 'مجموعة من البرك التاريخية...',
      images: [require('../images/b1.jpeg'), require('../images/b2.jpg')],
    },
    {
      name: 'كنيسة القديسة كاترينا',
      description: 'تقع بجوار كنيسة المهد وتُعد من أقدم الكنائس اللاتينية، وتُستخدم للاحتفالات الدينية خاصة في عيد الميلاد.',
      images: [require('../images/kat.jpg'), require('../images/kat2.webp')],

    },
    {
      name: 'مسجد عمر بن الخطاب',
      description: 'يقع في ساحة كنيسة المهد، ويُعتبر رمزًا للتسامح الديني، بُني في موقع زيارة الخليفة عمر رضي الله عنه للمدينة.',
      images: [require('../images/omar3.jpeg'), require('../images/omar2.jpg')],
    },
{
     name: 'جبل الفرديس (هيروديون)',
    description:
      'موقع أثري يعود للعهد الروماني، بناه الملك هيرودس كموقع حصين وقصر فاخر، ويتميز بإطلالة بانورامية على المنطقة المحيطة.',
    images: [require('../images/for.jpg'), require('../images/for2.jpg')],
  },
  {
    name: 'حقل الرعاة (بيت ساحور)',
    description:
      'مكان تاريخي وديني يعتقد أنه الموقع الذي بشّر فيه الملاك الرعاة بميلاد السيد المسيح، ويضم كنائس وأديرة أثرية.',
    images: [require('../images/ro1.jpeg'), require('../images/ro2.jpeg')],
  },
  {
    name: 'دير مار سابا',
    description:
      'واحد من أقدم الأديرة المأهولة في العالم، يقع في وادي قدرون، ويشتهر بعمارته الفريدة وموقعه الصحراوي الخلاب.',
    images: [require('../images/mar1.webp'), require('../images/mar2.jpg')],
  },
  ];

  const filtered = places.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>أشهر الأماكن السياحية</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 ابحث عن مكان..."
        value={query}
        onChangeText={setQuery}
      />

      {filtered.map((place, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PlaceDetails', place)}
          >
            <Image source={place.images[0]} style={styles.image} />
            <Text style={styles.name}>{place.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToPlan(place)}
          >
            <Text style={styles.addButtonText}>➕ أضف إلى الرحلة</Text>
          </TouchableOpacity>
        </View>
      ))}

      {selectedPlaces.length > 0 && (
        <>
          <TouchableOpacity
            style={styles.planButton}
            onPress={() =>
              navigation.navigate('Plan', {
                plan: selectedPlaces,
                setPlan: setSelectedPlaces,
              })
            }
          >
            <Text style={styles.planButtonText}>
              📋 عرض مخطط الرحلة ({selectedPlaces.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={clearPlan}>
            <Text style={styles.resetButtonText}>🗑️ تفريغ المخطط</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    marginBottom: 25,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495e',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  planButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
    width: '100%',
  },
  planButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    width: '100%',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
