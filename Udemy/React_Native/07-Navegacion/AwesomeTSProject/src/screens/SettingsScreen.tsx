import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {colors, styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  // const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin /* marginTop: insets.top*/}}>
      <Text style={styles.title}>Setting Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};
