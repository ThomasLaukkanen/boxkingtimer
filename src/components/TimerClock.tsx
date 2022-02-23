import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedbackBase,
} from 'react-native';

export type Props = {
  number: number;
  text: string;
};

const TimerClock: React.FC<Props> = ({number, text}) => {
  const [numberValue, setNumberValue] = useState(number);
  const handleClick = () => {
    setNumberValue(prev => prev + 1);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text testID="text">{numberValue}</Text>
        <Text>{text}</Text>
      </View>
      <View>
        <Text onPress={handleClick} testID="plusbutton">
          Button
        </Text>
      </View>
    </View>
  );
};

export default TimerClock;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});
