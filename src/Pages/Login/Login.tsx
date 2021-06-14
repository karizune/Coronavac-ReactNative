import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    Alert,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import api from '../../Services/api';
import styles from '../../Styles/mainStyle';
import FormStyles from '../../Styles/formStyle';

//components
import Loading from '../../Components/Loading/Loading';
import { CustomButton } from '../../Components/Buttons/CustomButton/CustomButton'
import { TextButton } from '../../Components/Buttons/TextButton/TextButton'

interface PasswordConfig {
    flShowPass: boolean,
    iconPass: any
}

interface LoginProps {
    email: string,
    senha: string
}

export default function Login() {
    const navigation = useNavigation();
    const [txtLogin, setLogin] = React.useState('')
    const [txtSenha, setSenha] = React.useState('')
    const [flLoading, setLoading] = React.useState(false)
    const [objPasswordConfig, setConfigForm] = React.useState<PasswordConfig>
        ({ flShowPass: true, iconPass: 'eye-off' });

    function handleChangeIcon() {
        let icone = objPasswordConfig.iconPass === "eye" ? "eye-off" : "eye";
        let flShowPass = !objPasswordConfig.flShowPass;
        setConfigForm({ iconPass: icone, flShowPass });
    }


    async function RealizeLogin() {
        let errors: Array<string> = []
        let objLogin: LoginProps = { email: txtLogin, senha: txtSenha };
        if (txtLogin.trim() === '') {
            Alert.alert('Atenção: Falha no Login', 'Usuário é obrigatório');
            return;
        }
        if (txtSenha.trim() === '') {
            Alert.alert('Atenção: Falha no Login', 'Senha é obrigatório');
            return;
        }
        setLoading(true);


        await api.post(`/paciente/Login`, objLogin)
            .then((response) => {
                if (response.data.auth) {
                    navigateToInitialPage();
                    setLoading(false);
                }
            }).catch(e => {
                Object.values(e.response.data).map((item) => {
                    errors.push(`${item}`);
                })
                setLoading(false)
                Alert.alert('Aviso', `${errors}`)
            })
    }

    function navigateToInitialPage() {
        navigation.navigate('initialPage');
    };

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
        <SafeAreaView style={styles.container}>
            <Image
                style={{ width: '50%', height: '30%' }}
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
                        value={txtLogin}
                    ></TextInput>
                </View>
                <View style={FormStyles.FormContainer}>
                    <TextInput
                        style={FormStyles.textInputPassword}
                        placeholder="Senha"
                        onChangeText={text => setSenha(text)}
                        value={txtSenha}
                        secureTextEntry={objPasswordConfig.flShowPass}
                    />
                    <Feather
                        style={LoginStyles.iconEye}
                        name={objPasswordConfig.iconPass}
                        size={25}
                        color={'red'}
                        onPress={handleChangeIcon}
                    />
                </View>
            </View>
            <CustomButton
                title={'Entrar'}
                onPress={RealizeLogin}
            />
            <TextButton
                title={'Esqueceu a senha?'}
                onPress={navigateToResetPassword}
                style={{ paddingTop: '5%' }}
            />
            <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                <Text style={{ color: 'black' }}>{"Ainda não é membro? "}</Text>
                <TextButton
                    title={'Cadastrar-se'}
                    onPress={navigateToRegister}
                />
            </View>
        </SafeAreaView>
    );
}

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
    textInputPassword: {
        height: 40,
        borderWidth: 0,
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
    passwordContainer: {
        marginBottom: 16,
        height: 40,
        borderColor: '#dcdce6',
        borderRadius: 8,
        borderWidth: 1,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconEye: {
        paddingHorizontal: 8,
        marginTop: 6
    }
});