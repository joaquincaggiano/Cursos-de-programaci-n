import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';

import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //      <TouchableOpacity style={{marginleft: 10}} onPress={() => navigation.toggleDrawer()}>
  //        <Icon name="menu-outline" size={35} color={colores.primary} />
  //      </TouchableOpacity>
  //     ),
  //   });
  // }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="ir a la página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar con argumentos</Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pepito',
            })
          }>
          <Icon name="body-outline" size={35} color="white" />
          <Text style={styles.buttonBigText}>Pepito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Pepita',
            })
          }>
          <Icon name="woman-outline" size={35} color="white" />
          <Text style={styles.buttonBigText}>Pepita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
