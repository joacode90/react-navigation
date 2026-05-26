import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router'; // <-- Importamos el componente de enlace

// Simulamos datos profesionales
const CUENTAS = [
    { id: '1', nombre: 'Cuenta Corriente', balance: '$1,250.00', variant: 't1' },
    { id: '2', nombre: 'Ahorros Alquiler', balance: '$400.00', variant: 't2' },
];

export default function HomeScreen() {

    const router = useRouter();

    return (
        <View style={styles.contenedor}>
            <StatusBar />
            <Text style={styles.texto}>Pantalla de Inicio</Text>
            {/* El href busca directamente el nombre del archivo */}
            <Link href="/detalles" style={styles.enlace}>
                Ir a Detalles
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        marginBottom: 20,
    },
    enlace: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
});