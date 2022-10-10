import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from './ButtonStyle';

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text> 
    </TouchableOpacity>
  );
};

export default Button;
