import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Octicons';

import Contacto from '../views/Contacto';
import Home from '../views/Home';
import Perfil from '../views/Perfil';

const Stack = createStackNavigator(); //permite transiciones entre pantallas, poniendo una arriba de otra
const Drawer = createDrawerNavigator(); //permite arrastrar desde la izquierda un menú y navegar entre pantallas

const Screens = props => {
  //stack navigator
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, props.style])}>
      {/* flatten para juntar arrays de estilos*/}
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Icon
              name="three-bars"
              onPress={() => props.navigation.openDrawer()}
              style={{marginLeft: 20}}
              size={30}
              color="black"
            />
          ),
          
        }}>
        <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
        <Stack.Screen name="Contacto">
          {props => <Contacto {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Perfil">
          {props => <Perfil {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  //drawer navigator personalizado
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{marginTop:20,marginBottom:60,marginLeft:20, flex:0.4,bottom:0}}>
        <Image
            source={ require('../img/logo.png')
 
            }
            resizeMode="cover"
            style={styles.avatar}
          />
          <Text style={{color:'white',fontSize:24, fontWeight:"bold",fontFamily:'monospace'}}>Nicolás</Text>
          <Text style={{color:'white',fontSize:11, fontWeight:"400",fontFamily:'monospace'}}>nicomorales297@gmail.com</Text>
        </View>
        <View style={{flex:1}}>
          <DrawerItem
            label="Inicio"
            labelStyle={[styles.drawerLabel]}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <Icon name="home" size={30} color="#800020" />}
          />
          <DrawerItem
            label="Contactos"
            labelStyle={[styles.drawerLabel]}
              style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Contacto')}
            icon={() => <Icon name="repo" style={{marginLeft:3}} size={30} color="#800020" />}
          />
          <DrawerItem
            label="Mi Perfil"
            labelStyle={styles.drawerLabel}
              style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Perfil')}
            icon={() => <Icon name="eye" size={30} color="#800020" />}
          />
      </View>
        </View>
        <View style={{flex:0}}>
          <DrawerItem
            label="Salir"
            labelStyle={{ color: 'white',fontFamily:'monospace' }}
            icon={() => <Icon name="sign-out" color="white" size={16} />}
            onPress={() => alert('¿Seguro de cerrar sesión?')}
          />
        </View>
        
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  // drawer navigator
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    //interpolate toma valores de entrada y los convierte en los de salida, ej, ingreso 0-1, y quiero que envíe 0-100
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  }); //con esto damos un valor a la escala de los screens, para que se haga pequeña al momento de hacer draw

  const borderRadius = Animated.interpolate(progress, {
    //le damos border radius a los screens
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]}; // lo juntamos todo en una variable para enviarlo a las opciones de nuestro drawer

  return (
    <LinearGradient colors={['#eeaeca','#94bbe9']} style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName="Home" //primera ruta
        drawerType="slide" //tipo de draw, slide es para que el draw empuje al contenido de la derecha
        overlayColor="transparent" //overlay es el color que está sobre el contenido, en este caso está sin nada
        drawerStyle={styles.drawerStyles} //estilos para el draw cuando se abra, en este caso el width está hasta la mitad de la pantalla
        //contentContainerStyle={{flex: 1}}//Objeto de estilo para la sección de contenido dentro de ScrollView
        /*drawerContentOptions={{//Un objeto que contiene los accesorios para el componente de contenido del cajón
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}*/
        sceneContainerStyle={{backgroundColor: 'transparent'}} //estilos para el componente que envuelve el screen (los bordes al rededor del screen cuando se hace pequeño)
        drawerContent={props => {
          //función que devuelve un elemento como contenido del drawer, en este caso enviamos el drawer personalizado
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {
            props => {
              return <Screens {...props} style={animatedStyle} />
            }
          }
          {/* envío el animatedStyle a las screens, en donde va el transform con la escala y el borderRadius */}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%',backgroundColor:'transparent'},
  drawerItem: {alignItems: 'stretch', marginVertical: 10},
  drawerLabel: {color: 'white', marginLeft: -15,fontFamily:'monospace'},
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: "hidden",
    //borderWidth: 3,
    //backgroundColor: "#E5C2AE",
   // marginBottom:10,
    
    //borderWidth: StyleSheet.hairlineWidth,
  },
  mln7:{
    marginLeft:-17
  },
  mln22:{
    marginLeft:-24
  }
});
