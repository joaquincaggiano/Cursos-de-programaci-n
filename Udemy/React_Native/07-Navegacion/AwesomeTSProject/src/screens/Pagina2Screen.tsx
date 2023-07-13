import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

export const Pagina2Screen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="ir página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
