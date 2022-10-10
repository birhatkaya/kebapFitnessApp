import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./inputStyle";

function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} />
      </View>
    </View>
  );
}

export default Input;
