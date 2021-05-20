import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    Alert
} from 'react-native';
import styles from '../../Styles/mainStyle';
import FormStyles from '../../Styles/formStyle';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Register() {
    const navigation = useNavigation();

    function backToWelcome() {
        navigation.goBack();
    }

    function realizeRegister() {
        Alert.alert(
            '',
            'Cadastro realizado com sucesso!',
        );
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Icon name='adduser' size={150} color={'red'}></Icon>
            <Text></Text>
            <Text style={styles.TextHello}>{'Realize seu cadastro'}</Text>
            <Text></Text>
            <View style={FormStyles.form}>
                <TextInput style={FormStyles.textInput} placeholder={'Digite o nome de usuario'}></TextInput>
                <TextInput style={FormStyles.textInput} placeholder={'Digite seu email'}></TextInput>
                <TextInput style={FormStyles.textInput} secureTextEntry={true} placeholder={'Digite sua Senha'}></TextInput>
                <TextInput style={FormStyles.textInput} secureTextEntry={true} placeholder={'Digite novamente sua senha'}></TextInput>
                <Text></Text>
            </View>
            <TouchableOpacity
                style={FormStyles.buttonClickMe}
                activeOpacity={0.7}
                onPress={realizeRegister}
            >
                <Text style={styles.textButton}>{'Cadastrar'}</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
                style={FormStyles.buttonClickMe}
                activeOpacity={0.7}
                onPress={backToWelcome}
            >
                <Text style={styles.textButton}>{'Entrar'}</Text>
            </TouchableOpacity>
        </View>
    );
}