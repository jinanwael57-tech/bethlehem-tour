import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PlanScreen({ route, navigation }) {
  const { plan, setPlan } = route.params;

  const handleClear = () => {
    setPlan([]); // تفريغ القائمة
    navigation.goBack(); // الرجوع للصفحة السابقة
  };

  const perDay = 2;
  const days = [];
  for (let i = 0; i < plan.length; i += perDay) {
    days.push(plan.slice(i, i + perDay));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗓️ مخطط الرحلة</Text>

      {plan.length === 0 ? (
        <Text style={styles.emptyText}>🚫 لا توجد أماكن مضافة للرحلة بعد.</Text>
      ) : (
        days.map((dayPlaces, index) => (
          <View key={index} style={styles.dayBox}>
            <Text style={styles.dayTitle}>اليوم {index + 1}</Text>
            {dayPlaces.map((place, idx) => (
              <Text key={idx} style={styles.placeName}>• {place.name}</Text>
            ))}
          </View>
        ))
      )}

      {plan.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>🗑️ تفريغ الرحلة</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 50,
  },
  dayBox: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#34495e',
  },
  placeName: {
    fontSize: 16,
    color: '#555',
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 10,
    marginTop: 30,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
