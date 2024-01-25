import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Start from './screens/Start';
import React from 'react'
import Colors from './Colors';
import GradientBackground from './components/GradientBackground';

export default function App() {

  return (
      <GradientBackground>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Start/>
        </View>
      </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
