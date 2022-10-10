import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from '../components/Button/Button';

function Welcome(props) {

    function goToMemberSign() {
        props.navigation.navigate('MemberSignScreen');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>Kebap Fitness Salonu</Text>
            <Button text="Üye kaydı oluştur +" onPress={goToMemberSign}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    welcome: {
        fontWeight:'bold',
        fontSize: 30,
        textAlign:'center'
    }
})

export default Welcome;