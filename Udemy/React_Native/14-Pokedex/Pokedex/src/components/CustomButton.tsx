import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  iconName: string;
  title: string;
  color: string;
  background: string;
  titleColor: string;
  onPressFunction: () => void;
}

export const CustomButton = ({
  iconName,
  title,
  color,
  background,
  titleColor,
  onPressFunction,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPressFunction()}>
      <View
        style={{
          ...styles.buttonContainer,
          backgroundColor: background,
          borderColor: color,
        }}>
        <Icon name={iconName} size={30} color={color} />
        <Text style={{...styles.titleButton, color: titleColor}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
  },
  titleButton: {
    fontSize: 22,
    // fontWeight: 'bold'
  },
});
