import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams} from './Tab1';
import {SearchScreen} from '../screens/SearchScreen';
import {PokemonScreen} from '../screens/PokemonScreen';
import { ThemeContext } from '../context/ThemeContext';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: theme.colors.background},
      }}>
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab2.Navigator>
  );
};
