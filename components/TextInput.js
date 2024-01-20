import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function textInput() {
  const [text, setText] = useState("");

  function changeTextHandler(changedText) {
    setText(changedText);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
});