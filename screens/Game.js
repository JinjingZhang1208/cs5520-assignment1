import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Game({ name, number, attempts, randomNumber, modalVisible, closeModal }) {
  const [resultText, setResultText] = useState('');
  const [gameFinishedFailed, setGameFinishedfailed] = useState(false);
  const [gameFinishedSuccess, setGameFinishedSuccess] = useState(false);

  const checkChance = () => {
    if (attempts === 0) {
      setResultText('Sorry, no more chances left!');
    }
  };

  const verifyNumber = () => {
    if (parseInt(number) === randomNumber) {
      setResultText(`Congrats, ${name}! You won!`);
      setGameFinishedSuccess(true);
    } else {
      checkChance();
      giveHint();
    }
  };

  const giveHint = () => {  
    if (number < randomNumber) {
      setResultText(`Hello ${name}. You have chosen ${number}. That is not my number! Guess higher! You have ${attempts} attempts left!`);
    } else {
      setResultText(`Hello ${name}. You have chosen ${number}. That is not my number! Guess lower! You have ${attempts} attempts left!`);
    }
  };

  const guessAgain = () => {
    setResultText('');
    closeModal();
  };

  const handleFinishGame = () => {
    setGameFinishedfailed(true);
  };

  useEffect(() => {
    verifyNumber();
  }, [number, randomNumber]);

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Card>
          <Text>{resultText}</Text>
          {attempts > 0 ? (
          <View style={styles.buttonContainer}>
            <Button title="Let Me Guess Again" onPress={guessAgain} />
            <Button title="I am done" onPress={handleFinishGame} />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button title="I am done" onPress={handleFinishGame} />
          </View>
        )}
        </Card>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});
