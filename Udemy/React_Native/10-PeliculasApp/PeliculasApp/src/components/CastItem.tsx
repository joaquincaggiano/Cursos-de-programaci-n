import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.imageStyle} />}

      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 10,
    marginLeft: 20,
    paddingRight: 15,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  actorCharacter: {
    fontSize: 16,
    color: 'grey',
  },
});

export default CastItem;
