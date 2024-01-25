import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import CheckBox from '../components/CheckBox';
import Game from './Game';

export default function Start() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
    if (name.length <= 1 || !isNaN(name)) {
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
    setModalVisible(true);
  };

  const handleGameEnd = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Text style={styles.title}>Guess My Number</Text>
      <Card>
        <Text>Name</Text>
        <TextInput onChangeText={nameHandler} style={styles.input} value={name} />
        {nameError ? <Text>{nameError}</Text> : null}
        <Text>Number</Text>
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
        />
      )}
    </View>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});
