import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import CheckBox from '../components/CheckBox'

export default function Start() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  const nameHandler = (inputName) => {
    if (inputName.length > 1 && /^[a-zA-Z]+$/.test(inputName)) {
      setName(inputName)
    }
  }

  const numberHandler = (inputNumber) => {
    const number = parseInt(inputNumber)
    if (number !== NaN && number >= 1020 && number <=1029) {
      setNumber(number.toString())
    }
  }

  const checkboxHandler = (isChecked) => {
    setCheckboxChecked(isChecked)
  }

  const handleReset = () => {
    setName('');
    setNumber('');
    setCheckboxChecked(false);
  }

  return (
    <View>   
      <Text style={styles.title}>Guess My Number</Text>
      <Card>
        <Text>Name</Text>
        <TextInput 
          onChangeText={nameHandler}
          style={styles.input}
        ></TextInput>
        <Text>Number</Text>
        <TextInput 
          onChangeText={numberHandler}
          style={styles.input}
        ></TextInput>
        <CheckBox title='I am not a robot' onToggle={checkboxHandler}></CheckBox>
        <Button title="Reset" onPress={handleReset} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    alignItems: 'center',     
    justifyContent: 'center', 
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "80%",
    margin: 15,
  },
})
