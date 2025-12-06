import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function PlaceDetailsScreen({ route }) {
  const { name, description, images } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{name}</Text>

      {images.map((img, index) => (
        <Image key={index} source={img} style={styles.image} />
      ))}

      <Text style={styles.desc}>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  desc: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    textAlign: 'center',
  },
});
