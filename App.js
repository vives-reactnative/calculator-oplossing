import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import theme from './src/styles/theme.styles';
import Display from './src/components/Display';
import Button from './src/components/Button';

const { container, row } = styles;

const App = () => (
  <View style={container}>
    <StatusBar barStyle="light-content" />
    <Display />
    <View style={row}>
      <Button value="C" thema="alternative" />
      <Button value="+/-" thema="alternative" />
      <Button value="%" thema="alternative" />
      <Button value="/" thema="accent" />
    </View>
    <View style={row}>
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="x" thema="accent" />
    </View>
    <View style={row}>
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" thema="accent" />
    </View>
    <View style={row}>
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" thema="accent" />
    </View>
    <View style={row}>
      <Button value="π" thema="super" />
      <Button value="0" />
      <Button value="." />
      <Button value="=" thema="accent" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUNDCOLOR,
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row'
  }
});

export default App;
