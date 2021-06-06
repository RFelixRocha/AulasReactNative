import React, { useState } from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../style';

const SignIn = ({navigation}) => {
  const [nameScreen, setNameScreen] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/sigin/logo.png')} />
      <TextInput
        onChangeText={text => setNameScreen(text)}
        style={styles.inputStyle}
        placeholder="E-mail: "
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password: "
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.bottomStyle}
        onPress={() => {
          navigation.navigate('Welcome', {nameScreen: nameScreen});
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
