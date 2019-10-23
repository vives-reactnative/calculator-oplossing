import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  direction: {
    flexDirection: 'row'
  }
});

const { direction } = styles;

const Row = ({ children }) => <View style={direction}>{children}</View>;

export default Row;
