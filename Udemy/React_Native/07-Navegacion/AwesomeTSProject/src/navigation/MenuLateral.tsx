import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import {Tabs} from './Tabs';
import {SettingsScreen} from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'ajustes'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{...styles.menuButton, flexDirection: 'row'}}>
          <Icon name="compass-outline" size={25} color="grey" />
          <Text style={styles.menuText}> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={{...styles.menuButton, flexDirection: 'row'}}>
          <Icon name="cog-outline" size={25} color="grey" />
          <Text style={styles.menuText}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
