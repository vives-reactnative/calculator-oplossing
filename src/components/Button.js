import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/theme.styles';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const Button = ({ value = 0, thema }) => {
  const buttonStyles = [button];

  if (thema === 'alternative') {
    buttonStyles.push(styles.buttonAlternative);
  } else if (thema === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  } else if (thema === 'super') {
    buttonStyles.push(styles.buttonSuper);
  }

  return (
    <TouchableOpacity style={buttonStyles}>
      <Text style={text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.BUTTON_BACKGROUNDCOLOR,
    margin: 5,
    height: buttonWidth - 10,
    borderRadius: buttonWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    color: theme.BUTTON_TEXT_COLOR,
    fontSize: theme.BUTTON_TEXT_SIZE
  },
  buttonAlternative: {
    backgroundColor: theme.BUTTON_ALTERNATIVE
  },
  buttonAccent: {
    backgroundColor: theme.BUTTON_ACCENT
  },
  buttonSuper: {
    backgroundColor: theme.BUTTON_SUPER
  }
});

const { button, text } = styles;

export default Button;
