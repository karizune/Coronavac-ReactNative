import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [txtIdadeAnos, SetIdade] = React.useState('');
  function clickMe() {
    if (parseInt(txtIdadeAnos) >= 18) {
      alert('Pode ser preso')
    }
    else {
      alert('ainda não pode ser preso')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Olá Luan</Text>
        <TextInput
          placeholder="Digite sua idade"
          style={styles.textInput}
          onChangeText={(text) => { SetIdade(text); }}
          value={txtIdadeAnos}
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonClickMe}
          activeOpacity={0.7}
          onPress={clickMe}
        >
          <Text style={styles.textButton}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    width: '70%',
    textAlign: 'center',
    marginBottom: 16
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClickMe: {
    backgroundColor: 'darkcyan',
    borderRadius: 8,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
