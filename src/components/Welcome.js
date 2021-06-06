import React from 'react';
import {Image, Text, View } from "react-native";

import styles from './../style';

const Welcome = ({route}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoScreen}
        source={require('../assets/sigin/logo.png')}
      />
      <Text style={styles.slogan}>{route.params.nameScreen}</Text>
    </View>
  );
};

export default Welcome;
