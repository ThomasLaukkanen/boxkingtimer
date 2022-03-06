import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {theme} from '../theme';
import Button from './Button';
import {MinusIcon, PlusIcon} from './Icons';

export type Props = {
  number: number;
  text: string;
};

const TimerClock: React.FC<Props> = ({number, text}) => {
  const [numberValue, setNumberValue] = useState(number);

  return (
    <View style={styles.container}>
      <View style={styles.numberBox}>
        <Text testID="text" style={styles.number}>
          {numberValue}
        </Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setNumberValue(prev => prev - 1)}
          testID="minusbutton">
          <MinusIcon />
        </Button>
        <Button
          onPress={() => setNumberValue(prev => prev + 1)}
          testID="plusbutton">
          <PlusIcon />
        </Button>
      </View>
    </View>
  );
};

export default TimerClock;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  numberBox: {
    backgroundColor: theme.dark,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 160,
    minHeight: 80,
  },
  number: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 41.89,
    fontFamily: theme.fontFamily,
  },
  text: {
    color: '#DC293E',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
