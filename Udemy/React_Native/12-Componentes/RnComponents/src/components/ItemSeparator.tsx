import React, { useContext } from 'react';
import {View} from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8, borderColor: theme.dividerColor}} />
  );
};
