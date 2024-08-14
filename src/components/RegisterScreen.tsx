import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import styles from '../styles/RegisterScreenStyles';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://smartacuatic.neuroseeq.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre: username, password}),
      });

      const data = await response.json();

      if (data.success) {
        navigation.navigate('Pantalla2');
      } else {
        Alert.alert('Error', data.message || 'No se pudo registrar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'No se pudo registrar el usuario');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/login4.jpg')} style={styles.backgroundImage}>
        <Image source={require('../assets/images/icon3.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
          <Image source={require('../assets/images/user.png')} style={styles.inputIcon} />
          <TextInput
            placeholder="NOMBRE DE USUARIO"
            style={styles.input}
            placeholderTextColor="#000"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/images/lock.png')} style={styles.inputIcon} />
          <TextInput
            placeholder="CONTRASEÑA"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#000"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
