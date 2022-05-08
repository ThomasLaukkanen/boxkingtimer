import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home.screen';
import {History} from './History.screen';
import {theme} from '../theme';
import {Analytics} from './Analytics.screen';
import {BoxerGlow, HamburgerIcon, SettingIcon} from '../components/Icons';
const BottomTabs = createBottomTabNavigator();

export const BottomsTabs: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return (
              <View style={styles.tabs}>
                <BoxerGlow />
              </View>
            );
          } else if (route.name === 'History') {
            return (
              <View style={styles.tabs}>
                <HamburgerIcon />
              </View>
            );
          } else if (route.name === 'Analytics') {
            return (
              <View style={styles.tabs}>
                <SettingIcon />
              </View>
            );
          }
          return <Text>{route.name}</Text>;
        },
        tabBarLabel: () => {
          return null;
        },
        tabBarStyle: {
          backgroundColor: '#ECECEC',
          height: 80,
        },
      })}>
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#1E1D1B',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
