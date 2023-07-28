import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1} from './Tab1';
import {Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Screen} from './Tab2';
import {ThemeScreen} from '../screens/ThemeScreen';
import {ThemeContext} from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const {theme} = useContext(ThemeContext);
  
  return (
    <>
      <StatusBar barStyle={theme?.statusBar} />
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: theme.colors.background,
        }}
        screenOptions={{
          tabBarActiveTintColor: theme.tabBarActiveColor,
          tabBarInactiveTintColor: theme.tabBarInactiveColor,
          tabBarLabelStyle: {
            marginBottom: Platform.OS === 'android' ? 10 : 0,
          },
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: theme.backgroundTab,
            borderWidth: 0,
            elevation: 0,
            height: Platform.OS === 'ios' ? 80 : 60,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Tab1}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({color}) => (
              <Icon name="list-outline" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Tab2Screen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <Icon name="search-outline" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="ThemeScreen"
          component={ThemeScreen}
          options={{
            tabBarLabel: 'Theme',
            tabBarIcon: ({color}) => (
              <Icon name="settings-outline" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
