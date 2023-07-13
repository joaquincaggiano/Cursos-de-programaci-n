import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

const HomeScreen = () => {

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems} //Tiene que ser algo iterable como un array
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />} // el item es cada dato del array
        keyExtractor={item => item.name} //necesitamos un id y que sea un string
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />} // Renderiza un header
        ItemSeparatorComponent={() => <ItemSeparator />} // Renderiza un separador entre items
      />
    </View>
  );
};

export default HomeScreen;
