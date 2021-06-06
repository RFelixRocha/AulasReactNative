import React from 'react';
import {Text, View} from 'react-native';

import styles from './../style';

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.title}</Text>
      <Text style={styles.slogan}>{props.description}</Text>
    </View>
  );
};

export default Welcome;
