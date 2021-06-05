import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import { Button, ButtonProps } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export function CircleButton({ title, ...rest }: ButtonProps) {

    return (
        <>
            <Button
                type={'outline'}
                buttonStyle={styles.ButtonStyle}
                titleStyle={styles.TextStyle}
                title={title}
                {...rest}
            />
        </>
    );
}


const styles = StyleSheet.create({
    ButtonStyle: {
        borderColor: 'red',
        borderRadius: 100,
        borderWidth: 4,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        paddingBottom: '10%',
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold'
    },
});