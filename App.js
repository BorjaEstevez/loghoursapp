import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import Screenzelf from './screens/ScreenZelf'
import RegisterScreen from './screens/RegisterScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Screenzelf></Screenzelf>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
