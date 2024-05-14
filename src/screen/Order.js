import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import FeaturedItems from '../components/Items/FeaturedItems';
import {number} from 'yup';

const Order = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.imageCont}>
          <Image
            style={styles.image}
            source={require('../assets/images/coffee.png')}
          />
        </View>

        <View>
          <View style={styles.bBanner}>
            <Text></Text>
          </View>
          <View style={styles.bImageCont}>
            <View>
              <Image
                style={styles.bImage}
                source={require('../assets/images/cham.png')}
              />
            </View>
          </View>
        </View>
        {/* orderContainer */}
        <View style={styles.orderContainer}>
          <View>
            <Text style={styles.orderText}>Order It Lounge</Text>
            <Text style={styles.number}>347 234 2343</Text>
          </View>

          <View style={styles.hrCont}>
            <View style={styles.hrLine}></View>
          </View>

          {/* Featured items */}
          <View>
            <Text style={styles.fiText}>Featured items</Text>
            <ScrollView horizontal={true} style={styles.fItems}>
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
              <FeaturedItems />
            </ScrollView>
          </View>
          {/* Featured items */}
          <View>
            <Text>Chinese</Text>
            <View>
              <Text>item-1</Text>
              <Text>item-2</Text>
              <Text>item-3</Text>
              <Text>item-4</Text>
              <Text>item-5</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  imageCont: {
    height: 165,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bBanner: {
    transform: [{rotate: '6deg'}, {translateY: -8}],
    backgroundColor: 'white',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  bImageCont: {
    position: 'absolute',
    top: -67,
    left: 13,
    right: 0,
    zIndex: 10,
  },
  bImage: {
    height: 62,
    width: 62,
    backgroundColor: 'white',
    borderRadius: 45,
  },
  orderContainer: {
    // backgroundColor: 'red',
    zIndex: 20,
    paddingHorizontal: 20,
  },

  orderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  number: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#8e969d',
  },
  hrCont: {
    marginVertical: 10,
  },
  hrLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#e9ecef',
    alignItems: 'center',
  },
  fiText: {
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: 'semibold',
    color: 'black',
  },
  fItems: {
    display: 'flex',
    flexDirection: 'row',
  },
});
