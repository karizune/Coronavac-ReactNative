import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function App() {
  const [txtIdadeAnos, SetIdade] = React.useState('');
  const [fl_Visualiza, SetFl_Visualiza] = React.useState(false);

  const [txtPeso, SetPeso] = React.useState('');
  const [txtAltura, SetAltura] = React.useState('');
  const [classificacao, SetClassificacao] = React.useState('');
  const [TextColor, SetColor] = React.useState('black');

  function clickMe() {
    if (parseInt(txtIdadeAnos) >= 18) {
      alert('Pode ser preso');
      SetFl_Visualiza(true);
    }
    else {
      alert('ainda não pode ser preso');
      SetFl_Visualiza(false);
    }
  }

  function CalculaIMC() {
    const imc: Number = Number(txtPeso) / (Number(txtAltura) * Number(txtAltura));
    if (imc < 18.5) {
      SetClassificacao('Peso Baixo');
      SetColor('yellow');
    }
    else if (imc >= 18.5 && imc <= 24.9) {
      SetClassificacao('Peso Normal');
      SetColor('green');
    }
    else if (imc >= 25.0 && imc <= 29.9) {
      SetClassificacao('Sobrepeso');
      SetColor('#dbc3b4');
    }
    else if (imc >= 30.0 && imc <= 34.9) {
      SetClassificacao('Obesidade (Grau I)');
      SetColor('orange');
    }
    else if (imc >= 35.0 && imc <= 39.9) {
      SetClassificacao('Obesidade Severa (Grau II)');
      SetColor('#bf6862');
    }
    else if (imc >= 40) {
      SetClassificacao('Obesidade Mórbida (Grau III)');
      SetColor('red');
    }
    else {
      SetClassificacao('desconhecido');
      SetColor('black');
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.TextHello}>Olá Luan</Text>
            <TextInput
              placeholder="Digite Peso"
              style={styles.textInput}
              onChangeText={(text) => { SetPeso(text); }}
              value={txtPeso}
            ></TextInput>
            <TextInput
              placeholder="Digite Altura"
              style={styles.textInput}
              onChangeText={(text) => { SetAltura(text); }}
              value={txtAltura}
            ></TextInput>
            <TouchableOpacity
              style={styles.buttonClickMe}
              activeOpacity={0.7}
              onPress={CalculaIMC}
            >
              <Text style={styles.textButton}>Calcular IMC</Text>
            </TouchableOpacity>
            <Text style={{ color: TextColor, paddingTop: 10, fontSize: 18 }}>{classificacao}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextHello: {
    paddingBottom: 10
  },
  TextResponse: {
    paddingTop: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    width: 150,
    textAlign: 'center',
    marginBottom: 16,
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
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});




//comentado

/*
<SafeAreaView style={styles.container}>
  <KeyboardAvoidingView style={styles.container}
  //behavior={Platform.OS === 'android' ? 'padding' : 'height'}
  >
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
        <Text>{
          fl_Visualiza ?
            txtIdadeAnos.length > 0 ?
              Number(txtIdadeAnos) >= 18 ?
                '👮‍♀️' : '😄'
              : ' '
            : ' '}
        </Text>
      </View>
    </View>
  </KeyboardAvoidingView>
</SafeAreaView>
*/