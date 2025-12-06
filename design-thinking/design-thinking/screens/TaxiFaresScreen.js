import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function TaxiFaresScreen() {
  const [currency, setCurrency] = useState('NIS'); // 'NIS' أو 'USD'

  const USD_RATE = 3.6; // سعر التحويل

  const touristSites = [
    { name_ar: 'ساحة المهد', fareNIS: 10 },
    { name_ar: 'كنيسة المهد', fareNIS: 10 },
    { name_ar: 'مغارة الحليب', fareNIS: 12 },
    { name_ar: 'فندق الوالد أوف', fareNIS: 20 },
    { name_ar: 'حقل الرعاة (بيت ساحور)', fareNIS: 20 },
    { name_ar: 'هيروديون (جبل الفريديس)', fareNIS: 70, note: 'ذهاب وعودة غالبًا أرخص' },
    { name_ar: 'دير مار سابا', fareNIS: 120, note: 'الطريق قد يختلف' },
  ];

  const hotels = [
    { name_ar: 'فندق إنجل', fareNIS: 18 },
    { name_ar: 'فندق بيت لحم', fareNIS: 15 },
    { name_ar: 'جراند هوتيل', fareNIS: 16 },
    { name_ar: 'فندق ساحة المهد', fareNIS: 12 },
    { name_ar: 'جاسر بالاس', fareNIS: 22 },
  ];

  const formatPrice = (nis) => {
    if (currency === 'USD') return `$${(nis / USD_RATE).toFixed(1)}`;
    return `${nis} ₪`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🚖 أسعار التكاسي في بيت لحم</Text>
      <Text style={styles.subHeader}>الأسعار من مركز المدينة (ساحة المهد)</Text>

      {/* أزرار العملة */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleBtn, currency === 'NIS' && styles.toggleActive]}
          onPress={() => setCurrency('NIS')}
        >
          <Text style={currency === 'NIS' ? styles.toggleTextActive : styles.toggleText}>شيكل</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleBtn, currency === 'USD' && styles.toggleActive]}
          onPress={() => setCurrency('USD')}
        >
          <Text style={currency === 'USD' ? styles.toggleTextActive : styles.toggleText}>دولار</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>📍 أماكن سياحية</Text>
      {touristSites.map((item, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.cardName}>{item.name_ar}</Text>
          <Text style={styles.cardFare}>{formatPrice(item.fareNIS)}</Text>
          {item.note && <Text style={styles.note}>{item.note}</Text>}
        </View>
      ))}

      <Text style={styles.sectionTitle}>🏨 فنادق</Text>
      {hotels.map((item, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.cardName}>{item.name_ar}</Text>
          <Text style={styles.cardFare}>{formatPrice(item.fareNIS)}</Text>
        </View>
      ))}

      <Text style={styles.footer}>📅 آخر تحديث: 2025-08-13</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F7FB', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 4 },
  subHeader: { fontSize: 14, textAlign: 'center', color: '#555', marginBottom: 20 },
  toggleContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  toggleBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  toggleActive: { backgroundColor: '#111827' },
  toggleText: { color: '#111827', fontWeight: 'bold' },
  toggleTextActive: { color: '#fff', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginVertical: 12 },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  cardName: { fontSize: 16, fontWeight: '600' },
  cardFare: { fontSize: 16, fontWeight: '700' },
  note: { fontSize: 12, color: '#777', marginTop: 4 },
  footer: { textAlign: 'center', fontSize: 12, color: '#888', marginTop: 20 },
});
