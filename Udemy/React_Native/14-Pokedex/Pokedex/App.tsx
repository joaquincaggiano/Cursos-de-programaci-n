import 'react-native-gesture-handler';

import React, {useContext} from 'react';
import {Tabs} from './src/navigation/Tabs';
import {ThemeContext, ThemeProvider} from './src/context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <AppStateTheme>
      <NavigationContainer theme={theme}>
        <Tabs />
      </NavigationContainer>
    </AppStateTheme>
  );
};

const AppStateTheme = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
