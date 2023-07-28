import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.7)',
  colors: {
    primary: '#5856D6',
    background: 'white',
    card: '',
    text: 'black',
    border: 'rgba(0,0,0,0.3)',
    notification: '',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255, 255, 255, 0.7)',
  colors: {
    primary: '#5856D6',
    background: 'black',
    card: '',
    text: 'white',
    border: 'rgba(255, 255, 255, 0.3)',
    notification: '',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};

    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
