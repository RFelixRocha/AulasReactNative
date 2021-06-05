import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styles from './style';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Apredendo</Text>
      <Text style={styles.slogan}>React Native</Text>
    </View>
  );
};

export default App;
