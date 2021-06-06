import React from 'react';
import {Button, Image, Text, View} from 'react-native';

import styles from './../style';

const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoScreen}
        source={require('../assets/sigin/logo.png')}
      />
      <Text style={styles.slogan}>{route.params.nameScreen}</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: {user: 'jane'},
          })
        }
      />
    </View>
  );
};

export default Home;
