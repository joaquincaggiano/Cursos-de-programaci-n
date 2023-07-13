import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screens/ChatScreen';
import ContacScreen from '../screens/ContacScreen';
import AlbumScreen from '../screens/AlbumScreen';
import {colors} from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'ContacScreen':
              iconName = 'people-outline';
              break;
            case 'AlbumScreen':
              iconName = 'albums-outline';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={20} color={color} />
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContacScreen"
        options={{title: 'Contact'}}
        component={ContacScreen}
      />
      <Tab.Screen
        name="AlbumScreen"
        options={{title: 'Albums'}}
        component={AlbumScreen}
      />
    </Tab.Navigator>
  );
};
