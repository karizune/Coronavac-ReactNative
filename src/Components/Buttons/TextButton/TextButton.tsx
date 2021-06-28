import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

interface TextButtonProps extends TouchableOpacityProps {
    title: string
}

export function TextButton({ title, ...rest }: TextButtonProps) {

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