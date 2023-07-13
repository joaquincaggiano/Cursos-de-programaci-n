import React from 'react';
import {View, Button, Alert} from 'react-native';

import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const showAlert = () => {
  Alert.alert(
    'Título de la alerta',
    'Mensaje de la alerta',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {
      cancelable: true, //en android apretas por fuera de la alerta y se cierra
      onDismiss: () => console.log('onDismiss'),
    },
  );
};

const showPrompt = () => {
  // Alert.prompt(
  //   'Esta seguro?',
  //   'Esta acción no se puede revertir',
  //   (value: string) => console.log('Info: ', value),
  //   'plain-text', //tipo de texto donde se escribe
  //   '', // defaultValue
  //   'email-address', // podes especificar el teclado que aparecerá
  // );

  prompt(
    'Enter password',
    'Enter your password to claim your $1.5B in lottery winnings',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: password => console.log('OK Pressed, password: ' + password),
      },
    ],
    {
      type: 'secure-text',
      cancelable: false,
      defaultValue: 'test',
      placeholder: 'placeholder',
    },
  );
};

export const AlertScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button title="Mostrar alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar prompt" onPress={showPrompt} />
    </View>
  );
};
