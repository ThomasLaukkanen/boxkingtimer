import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedbackBase,
} from 'react-native';

const TimerClock: React.FC = ({thenumber: number, text: string}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{thenumber}</Text>
        <Text>{text}</Text>
      </View>
      <View>
        <Text>Button</Text>
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
