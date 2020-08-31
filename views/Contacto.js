import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Contacto = ({style}) => {
  return (
    <LinearGradient
      colors={['#eeaeae', '#c9e994']}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor:'palevioletred',
        ...style,
      }}>
      <Text>Contacto</Text>
    </LinearGradient>
  );
};

export default Contacto;
