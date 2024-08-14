import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import RecuperarContraScreen from './src/components/RecuperarContraScreen';
import Pantalla2Screen from './src/components/Pantalla2Screen';
import GraficaScreen from './src/components/GraficaScreen';
import BombasDeAguaScreen from './src/components/BombasScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecuperarContra"
          component={RecuperarContraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pantalla2"
          component={Pantalla2Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Grafico"
          component={GraficaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BombasDeAgua"
          component={BombasDeAguaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicio" // Verifica que este nombre sea correcto y esté registrado
          component={Pantalla2Screen} // Cambia al componente que debería ser la pantalla de inicio
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
