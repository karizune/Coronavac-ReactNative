import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Alert,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../../Components/Header/Header';
import Loading from '../../Components/Loading/Loading';
import api from '../../Services/api';
import { Divider } from 'react-native-elements';
import { DataTable } from 'react-native-paper';


export default function UserPage() {
    const [user, setUser] = React.useState<any>();
    const navigation = useNavigation();

    async function loadUser() {
        await AsyncStorage.getItem('@Coronavac:email').then(async (email) => {
            let getUser = {
                email: email
            }
            await api.post("/Paciente/User", getUser).then((res) => {
                const response = res.data;
                response.cpf = `${response.cpf.substring(0, 3)}.${response.cpf.substring(3, 6)}.${response.cpf.substring(6, 9)}-${response.cpf.substring(9, 11)}`
                response.dataNascimento = `${response.dataNascimento.substring(8, 10)}/${response.dataNascimento.substring(5, 7)}/${response.dataNascimento.substring(0, 4)}`
                response.imc = response.imc.toString().substring(0, 4)
                setUser(response);
            });
        })
    }

    React.useEffect(() => {
        loadUser();
    }, []);



    if (user == undefined) {
        return (<Loading />)
    }

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

    async function AvisoDelete() {
        Alert.alert('CUIDADO!', 'Tem certeza que quer excluir a sua conta permanentemente?',
            [
                {
                    text: 'Não, voltar agora'
                },
                {
                    text: 'Sim, Apagar agora',
                    onPress: () => {
                        api.delete(`paciente/RemoveUsuario/${user.email}`).then(() => {
                            Alert.alert('Aviso!', 'Sua conta foi permanentemente deletada');
                            navigation.navigate('Login');
                        });
                    }
                }
            ]
        )
    }

    function teveCovid(valor: boolean): string {
        if (valor) {
            return 'Sim'
        }
        else {
            return 'Não'
        }
    }



    return (
        <ScrollView style={styles.ScrollContainer}>
            <Header />
            <View style={{ justifyContent: 'center' }}>
                <View style={styles.dataTable}>
                    <DataTable>
                        <DataTable.Row>
                            <DataTable.Cell>{'Nome'}</DataTable.Cell>
                            <DataTable.Cell>{user.nome}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'Email'}</DataTable.Cell>
                            <DataTable.Cell>{user.email}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'CPF'}</DataTable.Cell>
                            <DataTable.Cell>{user.cpf}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'Data de Nascimento'}</DataTable.Cell>
                            <DataTable.Cell>{user.dataNascimento}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'Peso'}</DataTable.Cell>
                            <DataTable.Cell>{user.peso}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'Altura'}</DataTable.Cell>
                            <DataTable.Cell>{user.altura}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'IMC'}</DataTable.Cell>
                            <DataTable.Cell>{user.imc}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'Classificação'}</DataTable.Cell>
                            <DataTable.Cell>{user.classificacao}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'Cidade'}</DataTable.Cell>
                            <DataTable.Cell>{user.cidade + ' / ' + user.UF}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>{'Teve Covid'}</DataTable.Cell>
                            <DataTable.Cell>{teveCovid(user.JaTeveCovid)}</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </View>
            </View>
            <View style={{ alignItems: 'center', paddingTop: '5%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={AvisoLogOFF} style={styles.logoffButton} >
                    <Text style={styles.textButton}>{"Sair"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.logoffButton} >
                    <Text style={styles.textButton}>{"Voltar"}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: '5%' }}>
                <TouchableOpacity onPress={AvisoDelete} style={styles.deleteButton} >
                    <Text style={styles.textButton}>{"Apagar Conta"}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 50 }}>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 150,
        borderRadius: 10
    },
    dataTable: {
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: '5%',
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5
    },
    ScrollContainer: {
        paddingBottom: 100,
        flex: 1
    }
})