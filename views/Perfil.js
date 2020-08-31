import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const Perfil = ({style}) => {
    return (
        <LinearGradient colors={[ '#d899db','#94e1e9']}  style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            ...style,
           
          }}>
            <Text>Perfil</Text>
        </LinearGradient>
    )
}

export default Perfil
