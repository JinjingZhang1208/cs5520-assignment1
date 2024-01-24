import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';
import Game from './screens/Game';
import React, {useState} from 'react'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Start')

  const handleScreenChange = (screen) => {  
    setCurrentScreen(screen)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {currentScreen === 'Start' && <Start handleScreenChange={handleScreenChange} />}
      {currentScreen === 'Game' && <Game handleScreenChange={handleScreenChange} />}
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
