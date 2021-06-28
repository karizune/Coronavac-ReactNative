import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    PanResponder
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../Services/api';
import styles from '../../Styles/mainStyle';
import FormStyles from '../../Styles/formStyle';

//components
import Loading from '../../Components/Loading/Loading';
import { CustomButton } from '../../Components/Buttons/CustomButton/CustomButton'
import { TextButton } from '../../Components/Buttons/TextButton/TextButton'
import { PasswordTextInput } from '../../Components/TextInputs/PasswordInput/PasswordInput'

interface LoginProps {
    email: string,
    senha: string
}


export default function Login() {
    const navigation = useNavigation();
    const [txtEmail, setLogin] = React.useState('')
    const [txtSenha, setSenha] = React.useState('')
    const [flLoading, setLoading] = React.useState(false)

    async function RealizeLogin() {
        let errors: Array<string> = []
        let objLogin: LoginProps = { email: txtEmail, senha: txtSenha };
        if (txtEmail.trim() === '') {
            Alert.alert('Atenção: Falha no Login', 'Usuário é obrigatório');
            return;
        }
        if (txtSenha.trim() === '') {
            Alert.alert('Atenção: Falha no Login', 'Senha é obrigatório');
            return;
        }

        setLoading(true);
        try {
            const response = await api.post(`/paciente/Login`, objLogin);
            if (response.data != undefined && response.data.needMoreInfo != undefined && response.data.needMoreInfo) {
                await AsyncStorage.setItem('@Coronavac:email', txtEmail)
                await AsyncStorage.setItem('@Coronavac:Username', response.data.usuarioRetorno.nome)
                    .then(() => {
                        navigation.navigate('completeRegister');
                        setLoading(false);
                    })
            }
            else if (response.data.auth) {
                await AsyncStorage.setItem('@Coronavac:Username', response.data.usuario.nome)
                await AsyncStorage.setItem('@Coronavac:email', response.data.usuario.email)
                await AsyncStorage.setItem('@Coronavac:urlImage', response.data.usuario.urlImage)
                    .then(
                        () => {
                            navigation.navigate('initialPage');
                            setLoading(false);
                        })
            }
            else {
                Alert.alert('Aviso', 'Algo deu errado, favor tentar novamente')
            }
        }
        catch (e) {
            if (e.response != undefined && e.response.data != undefined) {
                Object.values(e.response.data).map((item) => {
                    errors.push(`${item}`);
                })
                setLoading(false)
                Alert.alert('Aviso', `${errors}`)
            }
            else {
                setLoading(false)
                Alert.alert('Aviso', `${e}`)
            }
        }
    }

    function navigateToResetPassword() {
        navigation.navigate('ResetPassword');
    }

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    if (flLoading) {
        return (<Loading />);
    }

    return (

        <SafeAreaView style={LoginStyles.container}>
            <View style={LoginStyles.FormContainer}>
                <Image
                    style={{ width: '50%', height: '30%', justifyContent: 'center', position: 'relative' }}
                    source={require('../../resources/injection.jpg')}
                />
                <View style={{ paddingBottom: '5%' }}>
                    <Text style={styles.TextHello}>{'Bem Vindo ao CoronaVac Mobile'}</Text>
                </View>
                <View style={FormStyles.form}>
                    <View style={FormStyles.FormContainer}>
                        <TextInput
                            style={FormStyles.textInputUser}
                            placeholder={'Digite seu email'}
                            onChangeText={text => setLogin(text)}
                            value={txtEmail}
                        />
                    </View>
                    <PasswordTextInput
                        placeholder="Senha"
                        onChangeText={text => setSenha(text)}
                        value={txtSenha}
                    ></PasswordTextInput>
                </View>
                <CustomButton
                    title={'Entrar'}
                    onPress={RealizeLogin}
                />
                <TextButton
                    title={'Esqueceu a senha?'}
                    onPress={navigateToResetPassword}
                    style={{ paddingTop: '5%', height: 40 }}
                />
                <View style={{ flexDirection: 'row', paddingTop: '2%' }}>
                    <Text style={{ color: 'black' }}>{"Ainda não é membro? "}</Text>
                    <TextButton
                        title={'Cadastrar-se'}
                        onPress={navigateToRegister}
                        style={{ height: 40 }}
                    />
                </View>
            </View>
        </SafeAreaView >

    );
}

const LoginStyles = StyleSheet.create({
    container: {
        backgroundColor: '#eb2a2a',
        flex: 1,
    },
    FormContainer: {
        marginTop: '35%',
        marginBottom: '-30%',
        marginLeft: '10%',
        marginRight: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50
    },

    textTitle: {
        color: 'red',
        fontSize: 28,
        marginBottom: 8
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        width: '70%',
        marginBottom: 16,
        paddingHorizontal: 8
    },
    buttonIn: {
        backgroundColor: 'red',
        borderRadius: 8,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextIn: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconEye: {
        paddingHorizontal: 8,
        marginTop: 6
    }

});