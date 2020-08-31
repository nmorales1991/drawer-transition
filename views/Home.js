import React from 'react'
import {  Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const Home = props => {
    console.log(props.style)
    return (
        <LinearGradient colors={[ '#94e9ad','#eeaeae']} style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            //...props.style,
            //backgroundColor:"mediumseagreen"
          }}>
            <Text>Home</Text>
        </LinearGradient>
    )
}

export default Home
