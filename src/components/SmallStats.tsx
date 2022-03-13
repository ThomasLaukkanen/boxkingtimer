import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';
export const SmallStats = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.textStylesGold]}>Hard Sparring</Text>
      <Text style={styles.timeLeftHeading}>TIME LEFT</Text>
      <Text style={[styles.textStylesGold, styles.timeleftH]}>02:34</Text>
      <Text style={styles.statValue}>/03:00</Text>
      <Text style={styles.statText}>ROUND</Text>
      <Text>4/6</Text>
      <Text style={styles.heading}>REST</Text>
      <Text style={styles.statValue}>03:00</Text>
      <Text>MODULE</Text>
      <Text style={styles.statValue}>3/7</Text>
      <Text>BPM</Text>
      <Text style={styles.statValue}>120/150</Text>
      <Text>CALORIES</Text>
      <Text style={styles.statValue}>420kcal</Text>
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
  statValue: {
    color: theme.white,
    fontSize: theme.p,
    fontFamily: theme.fontFamily,
  },
  statText: {
    color: theme.dark,
    fontSize: theme.caption,
    fontFamily: theme.fontFamily,
  },
});
