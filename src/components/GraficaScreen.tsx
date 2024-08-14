import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, Image, ImageBackground } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import commonStyles from '../styles/commonStyles'; // Importa el archivo de estilos común
import moment from 'moment'; // Asegúrate de tener moment.js instalado

const GraficaScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const drawer = React.useRef(null);
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.137.1:3000/ph-data'); // Usa la IP correcta
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Error al obtener los datos del pH');
        }

        console.log('Datos obtenidos:', result); // Agrega este log para depuración
        const formattedData = {
          labels: result.map(item => moment(item.Fecha).format('MMM D') + '\n' + item.Hora.slice(0, 5)),
          datasets: [
            {
              data: result.map(item => item.ph),
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              strokeWidth: 2,
            },
          ],
          legend: ['Nivel de pH'],
        };

        setData(formattedData);
      } catch (error) {
        console.error('Error al obtener los datos del pH:', error);
      }
    };

    fetchData();
  }, []);

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
          navigation.navigate('Grafica');
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
        source={require('../assets/images/pantalla4.jpg')}
        style={commonStyles.backgroundImage}
      >
        <View style={commonStyles.container}>
          <View style={commonStyles.headerContainer}>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <Image source={require('../assets/images/home.png')} style={commonStyles.menuIcon} />
            </TouchableOpacity>
          </View>
          <Text style={commonStyles.title}>Gráfica de pH</Text>
          {data && (
            <LineChart
              data={data}
              width={screenWidth - 32}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={commonStyles.chart}
            />
          )}
        </View>
      </ImageBackground>
    </DrawerLayoutAndroid>
  );
};

export default GraficaScreen;
