import React from 'react';
import {Text, View} from 'react-native';

import styles from './../style';

const Welcome = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.slogan}>{route.params.name}</Text>
    </View>
  );
};

export default Welcome;
