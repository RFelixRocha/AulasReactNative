import React from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../style';

const SignIn = () => {
  function alertLogin() {
    Alert.alert('React Native', 'Acesso permitido.');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/sigin/logo.png')} />
      <TextInput style={styles.inputStyle} placeholder="E-mail:" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password:"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.bottomStyle} onPress={alertLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
