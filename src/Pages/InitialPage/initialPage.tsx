//React Imports
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

//Others
import styles from '../../Styles/mainStyle';
import FormStyles from '../../Styles/formStyle';


export default function initialPage() {
    const navigation = useNavigation();

    function backToWelcome() {
        navigation.goBack();
    }

    function navigateToIMC() {
        navigation.navigate('IMC');
    }

    function navigateToOutraPagina() {
        navigation.navigate('OutraPagina');
    }


    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={FormStyles.buttonClickMe}
                activeOpacity={0.7}
                onPress={navigateToIMC}
            >
                <Text style={styles.textButton}>{'IMC'}</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
                style={FormStyles.buttonClickMe}
                activeOpacity={0.7}
                onPress={backToWelcome}
            >
                <Text style={styles.textButton}>{'Voltar'}</Text>
            </TouchableOpacity>
        </View>
    );
}
