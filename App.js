import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';
import Game from './screens/Game';
import React, {useState} from 'react'

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Start />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
