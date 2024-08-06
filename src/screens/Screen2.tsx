import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NumberInput } from '../components/NumberInput';

export const Screen2: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleDivide = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (number2 === 0) {
      if (number1 === 0) {
        setResult('INDETERMINACIÓN');
      } else {
        setResult('NO EXISTE DIVISIÓN PARA CERO');
      }
    } else {
      setResult((number1 / number2).toString());
    }
  };

  return (
    
    <View style={styles.container}>
        <Text style={styles.textprimary}>Llene los siguientes campos:</Text>
      <NumberInput value={num1} onChangeText={setNum1} placeholder="Primera Cifra" />
      <NumberInput value={num2} onChangeText={setNum2} placeholder="Segunda Cifra" />
      <Button title="Realizar Operación" onPress={handleDivide} />
      <Text style={styles.resultText}>Resultado: </Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  resultText:{
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textprimary:{
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  }
});

