import React, {useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {FadeInImage} from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        style={{width: '100%', height: 400}}
        uri={`https://picsum.photos/id/${item}/500/400`}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore} //ejecuta la función cuando llega a la parte de la especificada en el onEndReachedThreshold
        onEndReachedThreshold={0.5} //a partir de cuando va a cargar la nueva informacion, 0.5 mitad de la pantalla
        ListFooterComponent={() => (
          <View style={infiteStyles.loading}>
            <ActivityIndicator size={25} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};

const infiteStyles = StyleSheet.create({
  itemImage: {
    width: '100%',
    height: 400,
  },
  loading: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
