import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const MenuScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.schoolName}>Colegio Bajos del Cerro Chico</Text>
      </View>

      <View style={styles.notificationContainer}>
        <Card style={styles.notificationCard}>
          <Card.Content>
            <Text style={styles.notificationTitle}>Última notificación:</Text>
            <Text style={styles.notificationText}>Tu profesor ha publicado una actualización importante en el foro.</Text>
            <TouchableOpacity style={styles.moreInfoButton}>
              <Text style={styles.moreInfoText}>Ver las últimas novedades</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Revisar asistencia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Foro de curso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Contactar al profesor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Revisar calificaciones</Text>
        </TouchableOpacity>
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
  notificationContainer: {
    padding: 16,
    backgroundColor: '#E0F7FA', // Celeste
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 16,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF', // Blanco
    borderRadius: 8,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366', // Azul marino
    marginBottom: 8,
  },
  notificationText: {
    fontSize: 14,
    color: '#000000', // Negro
  },
  moreInfoButton: {
    marginTop: 12,
    backgroundColor: '#003366', // Azul marino
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  moreInfoText: {
    color: '#FFFFFF', // Blanco
    fontSize: 14,
    textAlign: 'center',
  },
  menuContainer: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    backgroundColor: '#E0F7FA', // Celeste
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366', // Azul marino
  },
});

export default MenuScreen;
