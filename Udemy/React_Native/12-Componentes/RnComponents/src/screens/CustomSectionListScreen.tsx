import React from 'react';
import {View, Text, SectionList} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin', 'Flash', 'Aquaman', 'Wonder Woman'],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Doctor Strange',
      'Hulk',
      'Iron Man',
      'Black Panther',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Naruto',
      'Dragon Ball Z',
      'My Hero Academia',
      'Evangelion',
      'Attack of Titan',
    ],
  },
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, i) => item + i} //identificador único
        renderItem={({item}) => <Text style={{fontSize: 20}}>{item}</Text>} //renderiza el item
        ListHeaderComponent={() => <HeaderTitle title="Header List" />} //Renderiza un Header
        ListFooterComponent={() => (
          <View style={{marginBottom: 50}}>
            <HeaderTitle title="Footer List" />
          </View>
        )} //Renderiza un Footer
        stickySectionHeadersEnabled //le da un efecto bonito
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white', marginVertical: 10}}>
            <Text style={{fontSize: 26, color: 'black', fontWeight: 'bold'}}>
              {section.casa}
            </Text>
          </View>
        )} //renderiza el titulo del item
        renderSectionFooter={({section}) => (
          <View style={{backgroundColor: 'white', marginVertical: 5}}>
            <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
              {`Total: ${section.data.length}`}
            </Text>
          </View>
        )} //renderiza el footer del item
        SectionSeparatorComponent={() => <ItemSeparator />} //renderiza un separador por debajo de los header del item
        ItemSeparatorComponent={() => <ItemSeparator />} //renderiza un separador por debajo de los items
        showsVerticalScrollIndicator={false} //elimina la barra de scroll
      />
    </View>
  );
};
