import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {CustomButton} from '../components/CustomButton';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, marginTop: top + 20}}>
      <Text style={{...stylesTheme.title, color: theme.colors.text}}>Change Theme</Text>
      <View style={stylesTheme.container}>
        <CustomButton
          onPressFunction={setLightTheme}
          iconName="sunny-outline"
          title="Light"
          color={theme.colors.text}
          background={theme.colors.background}
          titleColor={theme.colors.text}
        />
        <CustomButton
          onPressFunction={setDarkTheme}
          iconName="moon-outline"
          title="Dark"
          color={theme.colors.text}
          background={theme.colors.background}
          titleColor={theme.colors.text}
        />
      </View>
    </View>
  );
};

const stylesTheme = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
