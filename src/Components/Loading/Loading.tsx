import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
            {/* <ActivityIndicator size="large" color="red" /> */}
            <Image style={styles.imageStyle} source={require('../../resources/corona-loading.gif')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    imageStyle: {
        marginLeft: '15%',
        width: '60%',
        height: '30%'
    }
});

