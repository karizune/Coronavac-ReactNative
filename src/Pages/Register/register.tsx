import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    Alert,
    StyleSheet
} from 'react-native';
import styles from '../../Styles/mainStyle';
import FormStyles from '../../Styles/formStyle';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

//components
import { CustomButton } from '../../Components/Buttons/CustomButton/CustomButton'
import { TextButton } from '../../Components/Buttons/TextButton/TextButton'



export default function Register() {
    const navigation = useNavigation();

    //variables for valitation
    const [txtUser, setUser] = React.useState('');
    const [txtEmail, setEmail] = React.useState('');
    const [txtSenha, setSenha] = React.useState('');
    const [txtSenhaConfirm, setSenhaConfirm] = React.useState('');


    function backToWelcome() {
        navigation.goBack();
    }

    async function realizeRegister() {
        if (txtUser.trim() === '') {
            Alert.alert('Aviso', 'Nome de usuário obrigatório');
            return;
        }
        if (txtEmail.trim() === '') {
            Alert.alert('Aviso', 'Email é obrigatório');
            return;
        }
        if (txtSenha.trim() === '') {
            Alert.alert('Aviso', 'Senha é obrigatória');
            return;
        }
        if (txtSenhaConfirm.trim() === '') {
            Alert.alert('Aviso', 'É obrigatório digitar novamente a senha');
            return;
        }
        if (txtSenha != txtSenhaConfirm) {
            Alert.alert('Aviso', 'Senhas não coincidem');
            return;
        }
        Alert.alert('Aviso', 'Cadastro realizado com sucesso!',);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Icon name='adduser' size={150} color={'red'}></Icon>
            <Text></Text>
            <Text style={styles.TextHello}>{'Realize seu cadastro'}</Text>
            <Text></Text>
            <View style={FormStyles.form}>
                <TextInput
                    style={FormStyles.textInput}
                    placeholder={'Digite o nome de usuario'}
                    onChangeText={text => setUser(text)}
                    value={txtUser}
                />
                <TextInput
                    style={FormStyles.textInput}
                    placeholder={'Digite seu email'}
                    onChangeText={text => setEmail(text)}
                    value={txtEmail}
                />
                <TextInput
                    style={FormStyles.textInput}
                    secureTextEntry={true}
                    placeholder={'Digite sua Senha'}
                    onChangeText={text => setSenha(text)}
                    value={txtSenha}
                />
                <TextInput
                    style={FormStyles.textInput}
                    secureTextEntry={true}
                    placeholder={'Digite novamente sua senha'}
                    onChangeText={text => setSenhaConfirm(text)}
                    value={txtSenhaConfirm}
                />
            </View>

            <View style={Registerstyles.Container}>
                <CustomButton
                    title={'Cadastrar'}
                    onPress={realizeRegister}
                />
            </View>
            <View style={Registerstyles.Container}>
                <CustomButton
                    title={'Entrar'}
                    onPress={backToWelcome}
                />
            </View>
        </View>
    );
}
const Registerstyles = StyleSheet.create({
    Container: {
        paddingTop: '5%'
    }
})