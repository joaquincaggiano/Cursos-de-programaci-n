import React, {useContext} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      {/* TYPES */}
      <View style={{...styles.container, marginTop: 400}}>
        <Text style={{...styles.title, color: theme.colors.text}}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => {
            return (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  color: theme.colors.text,
                }}
                key={type.name}>
                {type.name}
              </Text>
            );
          })}
        </View>
        <Text style={{...styles.title, color: theme.colors.text}}>Weight</Text>
        <Text style={{...styles.regularText, color: theme.colors.text}}>
          {pokemon.weight}lb
        </Text>
      </View>

      {/* SPRITES */}
      <View style={styles.container}>
        <Text style={{...styles.title, color: theme.colors.text}}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* SKILLS */}
      <View style={styles.container}>
        <Text style={{...styles.title, color: theme.colors.text}}>
          Base Skills
        </Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => {
            return (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  color: theme.colors.text,
                }}
                key={ability.name}>
                {ability.name}
              </Text>
            );
          })}
        </View>
      </View>

      {/* MOVES */}
      <View style={styles.container}>
        <Text style={{...styles.title, color: theme.colors.text}}>Moves</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {pokemon.moves.map(({move}) => {
            return (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  color: theme.colors.text,
                }}
                key={move.name}>
                {move.name}
              </Text>
            );
          })}
        </ScrollView>
      </View>

      {/* STATS */}
      <View style={{...styles.container, marginBottom: 80}}>
        <Text style={{...styles.title, color: theme.colors.text}}>
          Base Skills
        </Text>
        <View style={{marginBottom: 40}}>
          {pokemon.stats.map((stat, i) => {
            return (
              <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    ...styles.regularText,
                    marginRight: 10,
                    width: 150,
                    color: theme.colors.text,
                  }}>
                  {stat.stat.name}
                </Text>

                <Text
                  style={{
                    ...styles.regularText,
                    fontWeight: 'bold',
                    color: theme.colors.text,
                  }}>
                  {stat.base_stat}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
