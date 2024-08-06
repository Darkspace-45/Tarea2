import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface NumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
  },
});

