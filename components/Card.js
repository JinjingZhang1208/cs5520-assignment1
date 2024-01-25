import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 8,
      backgroundColor: Colors.card,
      height: 500,
      width: 300,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
    }
})