import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import Finish from './Finish';
import Colors from '../Colors';

export default function Game({ name, number, attempts, randomNumber, modalVisible, closeModal, onRestartGame }) {
  const [resultText, setResultText] = useState('');
  const [gameFinished, setGameFinished] = useState(false);

  const checkChance = () => {
    if (attempts === 0) {
      setResultText('Sorry, no more chances left!');
    }
  };

  const verifyNumber = () => {
    if (parseInt(number) === randomNumber) {
      setResultText(`Congrats, ${name}! You won!`);
    } else {
      checkChance();
      giveHint();
    }
  };

  const giveHint = () => {  
    console.log(randomNumber);
    if (number < randomNumber) {
      setResultText(`Hello ${name}.\nYou have chosen ${number}.\nThat is not my number!\nGuess higher! \nYou have ${attempts} attempts left!`);
    } else {
      setResultText(`Hello ${name}.\nYou have chosen ${number}.\nThat is not my number!\nGuess lower! \nYou have ${attempts} attempts left!`);
    }
  };

  const guessAgain = () => {
  if (!gameFinished) {
    setResultText('');
    closeModal();
    }
  }

  const handleFinishGame = () => {
    setGameFinished(true);
  };

  useEffect(() => {
    verifyNumber();
  }, [number, randomNumber]);

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
      {gameFinished ? (
          <Finish success={parseInt(number) === randomNumber} number={number} onRestartGame={onRestartGame}  />
        ) : (
        <Card>
          <Text style={styles.hint}>{resultText}</Text>
          {attempts > 0 ? (
          <View style={styles.buttonContainer}>
            <Button title="Let Me Guess Again" onPress={guessAgain}/>
            <Button title="I am done" onPress={handleFinishGame} />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button style={styles.singleButton} title="I am done" onPress={handleFinishGame} />
          </View>
        )}
        </Card>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hint: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 24,
  },
  singleButton: {
    width: '100%',
    justifyContent: 'center',
  }
});
