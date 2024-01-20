import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

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

  return (
    <View>   
      <Text>Guess My Number</Text>
      <Card>
        <Text>Name</Text>
        <TextInput 
          onChangeText={nameHandler}

        ></TextInput>
        <Text>Number</Text>
        <TextInput 
          onChangeText={numberHandler}
  
        ></TextInput>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})
