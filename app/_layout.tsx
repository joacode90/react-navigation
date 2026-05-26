import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        // Expo Router ya maneja el NavigationContainer por ti por detrás
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1E1E24', // Un fondo oscuro elegante
                },
                headerTintColor: '#FFFFFF', // Letras del header blancas
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                },
                contentStyle: {
                    backgroundColor: '#F5F5F7', // Fondo gris claro sutil para todas las pantallas (estilo iOS)
                }
            }}
        >
            {/* Definimos las pantallas y sus títulos específicos */}
            <Stack.Screen name="index" options={{ title: 'Mis Cuentas' }} />
            <Stack.Screen name="detalles" options={{ title: 'Detalle de Cuenta' }} />
        </Stack>
    )
}

export default RootLayout