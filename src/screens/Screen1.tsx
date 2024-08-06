import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export const Screen1: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image source={require('../../assets/images/mobile-apps.png')} style={styles.image} />
      <Button title="Ingresar" onPress={() => navigation.navigate('Divisiones')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

