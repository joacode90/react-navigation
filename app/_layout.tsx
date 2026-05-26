import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        // Expo Router ya maneja el NavigationContainer por ti por detrás
        <Stack>
            {/* Configuras la pantalla inicial y su título */}
            <Stack.Screen name="index" options={{ title: 'Home' }} />
        </Stack>
    )
}

export default RootLayout