import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../style';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/sigin/logo.png')} />
      <TextInput style={styles.inputStyle} placeholder="E-mail:" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password:"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.bottomStyle}
        onPress={() => {
          navigation.navigate('Welcome', {name: 'Bem-Vindo'});
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
