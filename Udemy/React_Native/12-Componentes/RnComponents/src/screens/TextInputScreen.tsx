import React, {useContext, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {ThemeContext} from '../context/ThemeContext';

export const TextInputScreen = () => {
  const {theme} = useContext(ThemeContext);
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />

            <TextInput
              style={{
                ...stylesTI.inputStyle,
                borderColor: theme.colors.border,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su nombre"
              placeholderTextColor={theme.colors.text}
              autoCorrect={false} //no te corrige lo que escribas
              autoCapitalize="words" //capitaliza las palabras
              onChangeText={value => onChange(value, 'name')}
            />

            <TextInput
              style={{
                ...stylesTI.inputStyle,
                borderColor: theme.colors.border,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su email"
              placeholderTextColor={theme.colors.text}
              autoCorrect={false}
              autoCapitalize="none" //no capitaliza las palabras
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address" //le dice al teclado que debe aparecer el @
            />

            <TextInput
              style={{
                ...stylesTI.inputStyle,
                borderColor: theme.colors.border,
                color: theme.colors.text,
              }}
              placeholder="Ingrese su teléfono"
              placeholderTextColor={theme.colors.text}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />

            <Text>Suscribirme</Text>

            <Text style={{...stylesTI.stateView, color: theme.colors.text}}>
              {JSON.stringify(form, null, 5)}
            </Text>

            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesTI = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  stateView: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
