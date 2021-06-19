//React Imports
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, View, Alert, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Others
import Header from '../../Components/Header/Header'
import FormStyles from '../../Styles/formStyle';
import OptionButton from '../../Components/Buttons/OptionButton/OptionButton'


interface vaccineType {
    title: string,
    active: boolean
}

export default function initialPage() {
    const navigation = useNavigation();

    async function backToWelcome() {
        await AsyncStorage.clear();
        navigation.goBack();
    }

    function navigateToIMC() {
        navigation.navigate('IMC');
    }

    function navigateToOutraPagina() {
        navigation.navigate('OutraPagina');
    }

    const vaccineTypeList: vaccineType[] = [
        {
            title: '1ª Dose COVID',
            active: false
        },
        {
            title: '2ª Dose COVID',
            active: false
        },
    ]

    const [listVaccine, setLista] = React.useState<vaccineType[]>(vaccineTypeList);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <View style={styles.container}>
                <View style={styles.vaccineListCss}>
                    <FlatList
                        data={listVaccine}
                        renderItem={({ item }) => (
                            <OptionButton title={item.title} active onPress={() => { alert('Não pode tomar') }} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        contentContainerStyle={styles.itemVaccineCSS}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: '20%'
    },
    header: {
        paddingHorizontal: 20
    },
    question: {
        fontSize: 17,
        color: 'white'
    },
    vaccineListCss: {

    },
    itemVaccineCSS: {

    }
});
