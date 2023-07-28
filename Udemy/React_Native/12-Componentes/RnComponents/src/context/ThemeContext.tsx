import React, {createContext, useEffect, useReducer} from 'react';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';
import {AppState, Appearance, useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

// const colorScheme = useColorScheme();

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  // SOLO EN IOS
  // useEffect(() => {
  //   if (colorScheme === 'light') {
  //     setLightTheme();
  //   }
  //   if (colorScheme === 'dark') {
  //     setDarkTheme();
  //   }
  // }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
