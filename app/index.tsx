import { View, Text, StyleSheet, StatusBar, Pressable, FlatList } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router'; // <-- Importamos el componente de enlace
import * as Haptics from 'expo-haptics';

// Simulamos datos profesionales
const CUENTAS = [
    { id: '1', nombre: 'Cuenta Corriente', balance: '$1,250.00' },
    { id: '2', nombre: 'Ahorros Alquiler', balance: '$400.00' },
];

export default function HomeScreen() {
    const router = useRouter();

    const alPresionarCuenta = async (cuenta: typeof CUENTAS[0]) => {
        // 1. Feedback táctil premium
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

        // 2. Navegamos pasando parámetros en la URL (Query Params)
        router.push({
            pathname: '/detalles',
            params: {
                id: cuenta.id,
                nombre: cuenta.nombre,
                balance: cuenta.balance
            }
        });
    };

    return (
        <View style={styles.contenedor}>
            <StatusBar />
            <FlatList
                data={CUENTAS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable style={styles.tarjeta} onPress={() => alPresionarCuenta(item)}>
                        <View>
                            {/* Aquí usarías tu Custom Text personalizado en vez de este Text genérico */}
                            <Text style={styles.textoNombre}>{item.nombre}</Text>
                            <Text style={styles.textoBalance}>{item.balance}</Text>
                        </View>
                        <Text style={styles.flecha}>→</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, padding: 16 },
    tarjeta: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Sombras profesionales (Shadows)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    textoNombre: { fontSize: 16, color: '#666', marginBottom: 4 },
    textoBalance: { fontSize: 22, fontWeight: 'bold', color: '#111' },
    flecha: { fontSize: 18, color: '#007AFF', fontWeight: 'bold' }
});