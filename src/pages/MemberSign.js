import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, StatusBar, Alert } from "react-native";
import Input from "../components/input/input";
import Button from "../components/Button/Button";

function MemberSign(props) {
  const [userName, setUserName] = useState(null);
  const [userSurName, setSurName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userBorn, setUserBorn] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurName || !userAge || !userMail || !userBorn) {
      Alert.alert("!!!DİKKAT!!!", "bilgiler boş bırakılamaz");
      return;
    }
    const user = {
      userName,
      userSurName,
      userAge,
      userMail,
      userBorn,
    };
    props.navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kaydol</Text>
      <Input
        label="Üye adı:"
        placeholder="Üye adı giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye soyadı:"
        placeholder="Üye soyadı giriniz..."
        onChangeText={setSurName}
      />
      <Input
        label="Üye yaşı:"
        placeholder="Üye yaşı giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye e-posta:"
        placeholder="Üye e-postası giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye doğum tarihi:"
        placeholder="Üye doğum tarihi giriniz..."
        onChangeText={setUserBorn}
      />
      <View style={styles.buttonContainer}>
        <Button text="Kayıt Ol" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "darkblue",
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems:'center'
  }
});

export default MemberSign;
