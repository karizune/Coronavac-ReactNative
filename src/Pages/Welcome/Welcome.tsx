import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements'

import styles from '../../Styles/mainStyle'
import FormStyles from '../../Styles/formStyle'
import { TextInput } from 'react-native-gesture-handler';

export default function Welcome() {
    const navigation = useNavigation();

    function navigateToPage1() {
        navigation.navigate('IMC');
    }

    function navigateToResetPassword() {
        navigation.navigate('ResetPassword');
    }

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ width: 200, height: 200 }}
                source={require('../../resources/injection.jpg')}
            />
            <Text style={styles.TextHello}>{'Bem Vindo ao CoronaVac Mobile'}</Text>
            <Text></Text>
            <View style={FormStyles.form}>
                <TextInput style={FormStyles.textInput} placeholder={'Digite seu usuário'}></TextInput>
                <TextInput style={FormStyles.textInput} secureTextEntry={true} placeholder={'Digite sua Senha'}></TextInput>
                <Text></Text>
            </View>
            <TouchableOpacity
                style={FormStyles.buttonClickMe}
                activeOpacity={0.7}
                onPress={navigateToPage1}
            >
                <Text style={styles.textButton}>{'Entrar'}</Text>
            </TouchableOpacity>
            <Text></Text>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={navigateToResetPassword}
            >
                <Text style={{ color: 'red' }}>{"Esqueceu a senha?"}</Text>
            </TouchableOpacity>

            <Text></Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black' }}>{"Ainda não é membro?"}</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={navigateToRegister}
                >
                    <Text style={{ color: 'red' }}>{'\tCadastrar-se'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}