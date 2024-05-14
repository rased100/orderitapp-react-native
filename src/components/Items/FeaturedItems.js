import {styled} from 'nativewind';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FeaturedItems = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/food.png')}
        />
      </View>
      <View>
        <Text style={styles.bText}>Briyani</Text>
        <Text style={styles.bText}>$14.00</Text>
      </View>
    </View>
  );
};

export default FeaturedItems;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
  },
  image: {
    height: 65,
    width: 65,
  },
  bText: {
    color: 'black',
  },
});
