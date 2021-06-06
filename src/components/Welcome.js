import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from './../style';

const Welcome = (props) => {

  const [description, setDescription] = useState('Aulas sobre estado dos componentes');

  function alternate(){
    setDescription(description?'':'Aulas sobre a mudança de estado dos componentes')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={alternate}>
        <Text>Mudar o state</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>{props.title}</Text>
      <Text style={styles.slogan}>{description}</Text>
    </View>
  );
};

export default Welcome;
