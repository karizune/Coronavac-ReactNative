import { StyleSheet } from 'react-native';

const FormStyles = StyleSheet.create({
    form: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonClickMe: {
        backgroundColor: 'red',
        borderRadius: 6,
        height: 40,
        width: 230,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        width: 230,
        textAlign: 'center',
        marginBottom: 16,
    }

});

export default FormStyles;