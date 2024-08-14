import React from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import styles from '../styles/RecuperarContraScreenStyles';

const RecuperarContraScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/login5.jpg')} style={styles.backgroundImage}>
                <Image source={require('../assets/images/icon3.png')} style={styles.logo} />
                <View style={styles.inputContainer}>
                    <Image source={require('../assets/images/lock.png')} style={styles.inputIcon} />
                    <TextInput placeholder="NUEVA CONTRASEÑA" style={styles.input} placeholderTextColor="#000" />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { /* Acción de actualización */ }}>
                    <Text style={styles.buttonText}>ACTUALIZAR</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

export default RecuperarContraScreen;
