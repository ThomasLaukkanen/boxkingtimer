import React from 'react';
import {theme} from '../theme';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
type Props = {
  height?: number;
  children: any;
  onPress: () => {};
};

const Button: React.FC<Props> = ({height = 48, children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {height}]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#000',
    marginRight: 8,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadow,
  },
});

export default Button;
