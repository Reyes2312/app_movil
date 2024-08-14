import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, Image, ImageBackground } from 'react-native';
import commonStyles from '../styles/commonStyles'; 

const Pantalla2Screen = ({ navigation }) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    <View style={commonStyles.navigationContainer}>
      <View style={commonStyles.navigationHeaderContainer}>
        <Text style={commonStyles.navigationHeader}>Menú de Navegación</Text>
      </View>
      <TouchableOpacity
        style={commonStyles.navItem}
        onPress={() => {
          drawer.current?.closeDrawer();
          navigation.navigate('Inicio');
        }}
      >
        <Image source={require('../assets/images/home.png')} style={commonStyles.navIcon} />
        <Text style={commonStyles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.navItem}
        onPress={() => {
          drawer.current?.closeDrawer();
          navigation.navigate('Grafico'); 
        }}
      >
        <Image source={require('../assets/images/grafica.png')} style={commonStyles.navIcon} />
        <Text style={commonStyles.navText}>Gráfica</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.navItem}
        onPress={() => {
          drawer.current?.closeDrawer();
          navigation.navigate('BombasDeAgua');
        }}
      >
        <Image source={require('../assets/images/bomba_agua.png')} style={commonStyles.navIcon} />
        <Text style={commonStyles.navText}>Bombas de Agua</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.logoutButton}
        onPress={() => {
          drawer.current?.closeDrawer();
          navigation.navigate('Login');
        }}
      >
        <Text style={commonStyles.logoutText}>Cerrar Sesión</Text>
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
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/images/pantalla2.png')}
          style={commonStyles.backgroundImage}
        >
          <View style={commonStyles.container}>
            <View style={commonStyles.headerContainer}>
              <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
                <Image source={require('../assets/images/home.png')} style={commonStyles.menuIcon} />
              </TouchableOpacity>
            </View>
            <View style={commonStyles.textContainer}>
              <Text style={commonStyles.welcomeTitle}>Bienvenido a la aplicación SmartAquatics</Text>
              <Text style={commonStyles.welcomeMessage}>
                En SmartAquatics, nos dedicamos a ofrecer soluciones innovadoras para el mantenimiento de albercas, 
                combinando tecnología avanzada con una experiencia de usuario excepcional.
              </Text>
              <Image source={require('../assets/images/alberca.png')} style={commonStyles.icon} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default Pantalla2Screen;
