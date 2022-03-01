import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../theme';
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
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => setNumberValue(prev => prev + 1)}
            testID="plusbutton">
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => setNumberValue(prev => prev - 1)}
            testID="minusbutton">
            -
          </Text>
        </TouchableOpacity>
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
    padding: 16,
    minWidth: 160,
    minHeight: 80,
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#000',
    marginRight: 8,
    height: 48,
    width: 48,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: theme.fontFamily,
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
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
