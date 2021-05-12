import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import styles from '../../Styles/mainStyle'

export default function Welcome() {
    const navigation = useNavigation();

    function navigateToPage1() {
        navigation.navigate('Page1');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.TextHello}>Bem Vindo</Text>
            <TouchableOpacity
                style={styles.buttonClickMe}
                activeOpacity={0.7}
                onPress={navigateToPage1}
            >
                <Text style={styles.textButton}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}