import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Alert,
    SafeAreaView
} from 'react-native';
import styles from '../../Styles/mainStyle';
import FormStyles from '../../Styles/formStyle';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import api from '../../Services/api';

export default function Register() {
    const navigation = useNavigation();

    function backToWelcome() {
        navigation.navigate('Login');
    }

    async function redefinirSenha(cadastroAtualizado: object) {
        await api.put(``, cadastroAtualizado)
        Alert.alert(
            '',
            'Senha redefinida',
        );
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.SafeArea}>
            <Icon name='unlock' size={150} color={'red'}></Icon>
            <Text></Text>
            <Text style={styles.TextHello}>{'Redefinir senha'}</Text>
            <Text></Text>
            <View style={FormStyles.form}>
                <TextInput style={FormStyles.textInput} placeholder={'Digite seu email'}></TextInput>
                <TextInput style={FormStyles.textInput} secureTextEntry={true} placeholder={'Digite sua nova senha'}></TextInput>
                <TextInput style={FormStyles.textInput} secureTextEntry={true} placeholder={'Digite novamente a nova senha'}></TextInput>
                <Text></Text>
            </View>
            <TouchableOpacity
                style={FormStyles.buttonClickMe}
                activeOpacity={0.7}
                onPress={async () => { await redefinirSenha }}
            >
                <Text style={styles.textButton}>{'Redefinir'}</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
                style={FormStyles.buttonClickMe}
                activeOpacity={0.7}
                onPress={backToWelcome}
            >
                <Text style={styles.textButton}>{'Entrar'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}