import React from 'react';
import {View, StyleSheet, Animated, Button, Easing} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          marginBottom: 20,
          transform: [{translateY: position}],
        }}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Fade In"
          onPress={() => {
            fadeIn();
            startMovingPosition(-100);
          }}
        />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80
  }
});
