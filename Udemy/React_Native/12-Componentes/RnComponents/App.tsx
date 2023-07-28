import 'react-native-gesture-handler';

import React from 'react';
import {Navigator} from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: '',
//     // background: '',
//     // card: '',
//     // text: '',
//     // border: '',
//     // notification: '',
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
