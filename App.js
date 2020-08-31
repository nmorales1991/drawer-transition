import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './navigation/Drawer'

const App = () => {
  return (
    <NavigationContainer> 
      {/* contenedor de todos los stacks de navegación */ }
      <StatusBar translucent backgroundColor="transparent"/> 
      {/* barra de estado arriba de la aplicación */}
      <Drawer/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  contenido:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  }
})
export default App
