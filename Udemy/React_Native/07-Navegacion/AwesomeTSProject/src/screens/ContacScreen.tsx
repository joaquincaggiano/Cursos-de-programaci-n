import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

const ContacScreen = () => {
  const {signIn, authState, signOut} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContacScreen</Text>

      {!authState.isLoggedIn ? (
        <Button title="Sign In" onPress={signIn} />
      ) : (
        <Button title="Sign Out" onPress={signOut} />
      )}
    </View>
  );
};

export default ContacScreen;
