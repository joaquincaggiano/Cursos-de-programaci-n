import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {theme} = useContext(ThemeContext)
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{...styles.title, color: theme.colors.text}}>{title}</Text>
    </View>
  );
};
