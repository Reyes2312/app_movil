import React from 'react';
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, Image, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import commonStyles from '../styles/commonStyles'; 

const BombasScreen = ({ navigation }) => {
  const drawer = React.useRef(null);

  const handleEncenderBombas = () => {
    axios.post('http://192.168.1.12:3001/encender')
      .then(response => {
        Alert.alert('Éxito', 'Bomba encendida');
      })
      .catch(error => {
        Alert.alert('Error', 'No se pudo encender la bomba');
      });
  };

  const handleApagarBombas = () => {
    axios.post('http://192.168.1.12:3001/apagar')
      .then(response => {
        Alert.alert('Éxito', 'Bomba apagada');
      })
      .catch(error => {
        Alert.alert('Error', 'No se pudo apagar la bomba');
      });
  };

  const navigationView = () => (
    <View style={commonStyles.navigationContainer}>
      <View style={commonStyles.navigationHeaderContainer}>
        <Text style={commonStyles.navigationHeader}>Menú de Navegación</Text>
      </View>
      <TouchableOpacity
        style={commonStyles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('Pantalla2');
        }}
      >
        <Image source={require('../assets/images/home.png')} style={commonStyles.navIcon} />
        <Text style={commonStyles.navText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('Grafico');
        }}
      >
        <Image source={require('../assets/images/grafica.png')} style={commonStyles.navIcon} />
        <Text style={commonStyles.navText}>Gráfica</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('BombasDeAgua');
        }}
      >
        <Image source={require('../assets/images/bomba_agua.png')} style={commonStyles.navIcon} />
        <Text style={commonStyles.navText}>Bombas de Agua</Text>
      </TouchableOpacity>
      <Image source={require('../assets/images/icon2.jpg')} style={commonStyles.logo} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <ImageBackground
        source={require('../assets/images/pantalla3.jpeg')}
        style={commonStyles.backgroundImage}
      >
        <View style={commonStyles.container}>
          <View style={commonStyles.headerContainer}>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <Image source={require('../assets/images/home.png')} style={commonStyles.menuIcon} />
            </TouchableOpacity>
          </View>
          <Text style={commonStyles.title}>Bombas de Agua</Text>
          <Image source={require('../assets/images/bomba_encendida.png')} style={commonStyles.bombaImage} />
          <TouchableOpacity style={commonStyles.button} onPress={handleEncenderBombas}>
            <Text style={commonStyles.buttonText}>Encender Bombas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyles.button} onPress={handleApagarBombas}>
            <Text style={commonStyles.buttonText}>Apagar Bombas</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </DrawerLayoutAndroid>
  );
};

export default BombasScreen;
