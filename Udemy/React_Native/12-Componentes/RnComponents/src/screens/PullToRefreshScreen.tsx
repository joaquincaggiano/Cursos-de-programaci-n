import React, {useState} from 'react';
import {View, ScrollView, RefreshControl, Platform, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos el refresh');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={Platform.OS === 'ios' ? 50 : 0} //baja el logo de cargando
          // progressBackgroundColor="#5856D6" //le cambia el color al background del signo de cargando, solo para android
          // colors={['purple', 'red', 'orange']} //cambia el color del signo a medida que pasa el tiempo, solo para android
          // style={{backgroundColor: '#5856D6'}} //cambia todo el backgroundcolor del espacio que esta utilizando el logo, solo ios CREO
          // tintColor='orange' //cambia el color del signo, solo para IOS
          // title='REFRESHING' //le da un titulo abajo del signo, solo IOS
          // titleColor='orange' //le da color al titulo debajo del signo, solo IOS
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="PullToRefresh" />

        <Text style={{fontSize: 28, fontWeight: 'bold', color: 'black'}}>
          {data}
        </Text>
      </View>
    </ScrollView>
  );
};
