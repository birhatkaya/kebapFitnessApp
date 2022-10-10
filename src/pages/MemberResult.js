import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';

function MemberResult(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Üye adi: {props.route.params.user.userName}</Text>
            <Text style={styles.label}>Üye soyadi: {props.route.params.user.userSurName}</Text>
            <Text style={styles.label}>Üye yaşı: {props.route.params.user.userAge}</Text>
            <Text style={styles.label}>Üye e-posta: {props.route.params.user.userMail}</Text>
            <Text style={styles.label}>Üye doğum yılı: {props.route.params.user.userBorn}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'darkblue',
        justifyContent: 'center',
        alignItems: 'center',

    },  
    label: {    
        fontWeight: 'bold',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'white',
        color: 'lightgrey',
        borderRadius: 4,
        margin: 3,
        padding: 5


    }
})

export default MemberResult;