import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Display = () => <Text style={display}>5.145.236</Text>;

const styles = StyleSheet.create({
  display: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10
  }
});

const { display } = styles;

export default Display;
