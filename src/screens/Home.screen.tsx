import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import TimerClock from '../components/TimerClock';
import {theme} from '../theme';
export const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>ADD MOORE ROUNDS</Text>
      <TimerClock number={34} text="Rounds" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fontFamily,
    textAlign: 'center',
    fontSize: theme.h4,
    color: theme.dark,
  },
});
