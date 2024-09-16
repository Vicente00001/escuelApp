import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.schoolName}>Colegio Bajos del Cerro Chico</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.title}>¡Bienvenido de vuelta!
          Por favor inicia sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          placeholderTextColor="#B0BEC5"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#B0BEC5"
        />

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Recuperar contraseña</Text>
        </TouchableOpacity>

        <Button mode="contained" style={styles.loginButton}>
          Iniciar sesión
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366', // Azul marino
  },
  header: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#003366', // Azul marino
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // Blanco
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#E0F7FA', // Celeste
    padding: 24,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: -16, // Para que se sobreponga ligeramente al área azul
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // Azul marino
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#003366', // Azul marino
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#003366', // Azul marino
  },
});

export default LoginScreen;
