import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CheckBox({title, onToggle}) {
  const [isChecked, setCheckboxChecked] = useState(false)
  const handleToggle = () => {
    setCheckboxChecked(!isChecked);
    onToggle && onToggle(!isChecked);
  }
  return (
    <TouchableOpacity onPress={handleToggle}>
      <Text style={isChecked ? styles.checkedText : styles.text}>{title}</Text>
    </TouchableOpacity>
  )
  ;
}

const styles = StyleSheet.create({})