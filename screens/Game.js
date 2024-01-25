import { StyleSheet, Text, View, Modal, SafeAreaView } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Game({ name, number, modalVisible, closeModal }) {
  return (
    <SafeAreaView>
      <Card>
        <Modal visible={modalVisible} >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Hello, {name}</Text>
            <Text style={styles.modalText}>You have chosen {number}</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </Modal>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
    },
    modalText: {
        fontSize: 24,
        color: 'white',
    },
});
