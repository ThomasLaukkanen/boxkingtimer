import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';
export const SmallStats = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.textStylesGold]}>Hard Sparring</Text>
      <Text style={styles.timeLeftHeading}>TIME LEFT</Text>
      <Text style={[styles.textStylesGold, styles.timeleftH]}>02:34</Text>
      <Text>/03:00</Text>
      <Text>ROUND</Text>
      <Text>4/6</Text>
      <Text>REST</Text>
      <Text>03:00</Text>
      <Text>MODULE</Text>
      <Text>3/7</Text>
      <Text>BPM</Text>
      <Text>120/150</Text>
      <Text>CALORIES</Text>
      <Text>420kcal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    paddingHorizontal: 24,
  },
  heading: {
    color: theme.danger,
  },
  textStylesGold: {
    fontFamily: theme.fontFamily,
    fontSize: theme.h3,
  },
  timeleftH: {
    color: theme.white,
    marginTop: 0,
  },
  timeLeftHeading: {
    padding: 0,
    marginBottom: 0,
  },
});
