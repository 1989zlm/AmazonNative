import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Categories} from '../data/Categories';
import {useNavigation} from '@react-navigation/native';

export default function Category() {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {Categories.map(item => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen')}
          key={item.id}
          style={styles.category}>
          <Image style={styles.imgStyle} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    padding: 8,
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
  },

  title: {
    color: '#2c4341',
  },
});
