import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="tabs/LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="tabs/MainMenuScreen" options={{ title: 'Main Menu' }} />
      <Stack.Screen name="tabs/AsistScreen" options={{ title: 'Asist' }} />
      <Stack.Screen name="tabs/ForumScreen" options={{ title: 'Forum' }} />
      {/* Agrega más pantallas si es necesario */}
    </Stack>
  );
}