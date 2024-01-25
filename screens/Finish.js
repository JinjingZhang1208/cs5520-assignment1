import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, {useState} from 'react'
import Card from '../components/Card'

export default function Finish({success, number, onRestartGame}) {
  const [restartGame, setRestartGame] = useState(false)

  const handleRestartGame = () => {
    setRestartGame(true)
    onRestartGame()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game is over</Text>
      <Card>
        {success ? (
          <Image source={{ uri: `https://picsum.photos/id/${number}/100/100` }} style={styles.image} />
        ) : (
          <Image source={require("../assets/sadFace.png")} style={styles.image} />
        )}
        <Button title="Start Again" onPress={handleRestartGame} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
