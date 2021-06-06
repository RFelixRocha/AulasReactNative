import React from 'react';
import {Button, Image, Text, View} from 'react-native';

import styles from './../style';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoScreen}
        source={require('../assets/sigin/logo.png')}
      />
      <Text style={styles.slogan}>Home</Text>
    </View>
  );
};

export default HomeScreen;
