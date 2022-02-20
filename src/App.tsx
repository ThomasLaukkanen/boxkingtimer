import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomsTabs} from './screens/BottomTabs.navigator';
export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomsTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
});
