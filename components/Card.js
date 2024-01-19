import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      backgroundColor: 'grey',
    }
})