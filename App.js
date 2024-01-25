import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './screens/Start';
import Game from './screens/Game';
import React, {useState} from 'react'
import Finish from './screens/Finish';
import Colors from './Colors';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start')
  const restartGame = () => { 
    setCurrentScreen('start')
  }

  const startGame = () => {
    setCurrentScreen('start')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {currentScreen === 'start' && <Start startGame={startGame} />}
      {currentScreen === 'finish' && <Finish restartGame={restartGame} />}
    </View>
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
