import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TimerClock from '../components/TimerClock';
export const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Text>ADD MOORE ROUNDS</Text>
      <TimerClock number={34} text="Rounds" />
    </SafeAreaView>
  );
};
