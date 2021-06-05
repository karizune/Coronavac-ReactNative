import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import { Button, ButtonProps } from 'react-native-elements';



export function TextButton({ title, ...rest }: ButtonProps) {

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.7}
                {...rest}
            >
                <Text style={styles.TextStyle}>{title}</Text>
            </TouchableOpacity>
        </>
    );
}


const styles = StyleSheet.create({
    TextStyle: {
        color: 'red',
    },
});