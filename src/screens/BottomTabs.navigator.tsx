import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home.screen';
import {History} from './History.screen';
import {Analytics} from './Analytics.screen';
import {BoxerGlow} from '../components/Icons';
const BottomTabs = createBottomTabNavigator();

export const BottomsTabs: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <BoxerGlow />;
          }
          return <Text>{route.name}</Text>;
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
