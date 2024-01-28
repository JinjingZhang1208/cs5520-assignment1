import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import CheckBox from '../components/CheckBox';
import Game from './Game';
import Colors from '../Colors'
import GradientBackground from '../components/GradientBackground';

export default function Start() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [attempts, setAttempts] = useState(3);
  const [randomNumber, setRandomNumber] = useState(0);

  const nameHandler = (inputName) => {
    setName(inputName);
    setNameError('');
  };

  const numberHandler = (inputNumber) => {
    setNumber(inputNumber);
    setNumberError('');
  };

  const checkboxHandler = (isChecked) => {
    setCheckboxChecked(isChecked);
  };

  const handleReset = () => {
    setName('');
    setNumber('');
    setCheckboxChecked(false);
    setNameError('');
    setNumberError('');
  };

  const handleConfirm = () => {
    const isNameValid = /^[A-Za-z]+$/.test(name);

    if (name.length <= 1 || !isNameValid) {
      setNameError('Please enter a valid name');
      return;
    }

    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber) || parsedNumber < 1020 || parsedNumber > 1029 || number.length > 4) {
      setNumberError('Please enter a valid number between 1020 and 1029');
      return;
    }

    if (!checkboxChecked) {
      setNumberError('Please click the checkbox');
      return;
    }
    handleGameStart();
  };

  const handleGameStart = () => {
    if (attempts > 0) {
      setAttempts(attempts - 1);
      setCheckboxChecked(false);
    }
    setModalVisible(true);
  };

  const handleGameEnd = () => {
    setModalVisible(false);
  };

  const generateRandomNumber = () => {
    const minNumber = 1020;
    const maxNumber = 1029;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    setRandomNumber(randomNumber);
  };

  const handleRestartGame = () => {
    setName('');
    setNumber('');
    setCheckboxChecked(false);
    setAttempts(3);
    generateRandomNumber();
    setModalVisible(false);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <GradientBackground>
        <Text style={styles.title}>Guess My Number</Text>
        <Card>
          <Text style={styles.word}>Name</Text>
          <TextInput onChangeText={nameHandler} style={styles.input} value={name} />
          {nameError ? <Text>{nameError}</Text> : null}
          <Text style={styles.word}>Number</Text>
          <TextInput onChangeText={numberHandler} style={styles.input} value={number} />
          {numberError ? <Text>{numberError}</Text> : null}
          <CheckBox title="I am not a robot" onToggle={checkboxHandler} value={checkboxChecked}></CheckBox>
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={handleReset} />
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </Card>
        {modalVisible && (
          <Game
            name={name}
            number={number}
            modalVisible={modalVisible}
            closeModal={handleGameEnd}
            attempts={attempts}
            randomNumber={randomNumber}
            onRestartGame={handleRestartGame} 
          />
        )}
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '80%',
    margin: 15,
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    marginTop: 30,
    textAlign: 'left',
  }
});
