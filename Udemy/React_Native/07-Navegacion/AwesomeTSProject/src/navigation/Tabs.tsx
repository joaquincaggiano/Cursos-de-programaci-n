import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import {Platform} from 'react-native';

import Tab1Screen from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';

import {colors} from '../theme/appTheme';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      inactiveColor="white"
      screenOptions={({route}) => ({
        // Forma global de importar íconos
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={20} color={color} />
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'TopTab'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        // Forma global de importar íconos
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={20} color={color} />
        },
      })}>
      {/* UNA FORMA DE IMPORTAR UN ÍCONO */}
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1', headerShown: false}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{title: 'TopTab', headerShown: false}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack', headerShown: false}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
