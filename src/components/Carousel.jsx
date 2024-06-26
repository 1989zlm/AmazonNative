import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData';

export default function Carousel() {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        showsPagination={false}
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}>
        {CarouselData.map((item, index) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.imgStyle} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  carouselContainer: {
    position: 'relative',
  },
  slide: {},
  imgStyle: {
    height: 250,
    width: '100%',
  },
});
