import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);
  const {opacity, fadeIn} = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          ...styles.imageContainer,
          backgroundColor: theme.colors.background,
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={{...styles.imageTitle, color: theme.colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.imageDescription, color: theme.colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        mode="parallax"
        style={{width: screenWidth}}
        pagingEnabled={false}
        windowSize={2}
        snapEnabled
        width={screenWidth}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
          parallaxAdjacentItemScale: 0.75,
        }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        onSnapToItem={i => {
          setActiveIndex(i);
          if (i === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
        defaultIndex={activeIndex}
      />
      <View style={styles.dotsContainer}>
        {items.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <TouchableOpacity key={i} onPress={() => setActiveIndex(i)}>
              <View
                style={{
                  backgroundColor: isActive ? '#5856D6' : '#5856d684',
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          );
        })}

        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              ...styles.enterButton,
              backgroundColor: theme.colors.primary,
            }}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Text style={{fontSize: 25, color: 'white'}}>Entrar</Text>
            <Icon
              name="chevron-forward-outline"
              color='white'
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  imageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageDescription: {
    fontSize: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    top: -100,
  },
  enterButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 50,
    borderRadius: 10,
  },
});
