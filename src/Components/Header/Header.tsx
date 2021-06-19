
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { UserImageURL } from '../../Services/constants';
import colors from '../../Styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header() {

    const navigation = useNavigation();
    const [userName, setUserName] = useState<string>('');


    async function loadStoreUserName() {
        const user: string = await AsyncStorage.getItem('@Coronavac:Username') || '';
        setUserName(user);
    }

    useEffect(() => {
        loadStoreUserName();
    }, []);

    async function AvisoLogOFF() {
        Alert.alert(
            'Aviso',
            'Deseja realmente sair?',
            [
                {
                    text: 'Não',
                },
                {
                    text: 'Sim',
                    onPress: async () => { await LogOff() }
                }
            ]
        )
    }

    async function LogOff() {
        await AsyncStorage.clear()
            .then(
                () => { navigation.navigate('Login'); }
            )
    }


    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={async () => { await AvisoLogOFF() }}>
                    <Image source={{ uri: UserImageURL }} style={styles.userImage} />
                </TouchableOpacity>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>Bem vindo, </Text>
                    <Text style={styles.userName}>{userName.split(' ').slice(0, 1)}</Text>
                </View>
                <View style={{ alignItems: 'center', paddingTop: '5%' }}>
                    <TouchableOpacity onPress={AvisoLogOFF} style={styles.logoffButton} >
                        <Text style={styles.textButton}>{"LOG-OFF"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingVertical: 20,
        marginTop: '10%',
    },
    userImage: {
        width: 75,
        height: 75,
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: '10%'
    },
    greeting: {
        fontSize: 32,
        color: colors.heading
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontWeight: 'bold'
    },
    greetingBox: {
        flexDirection: 'row'
    },
    logoffButton: {
        backgroundColor: '#3f91d4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 150,
        borderRadius: 10
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
});