import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function index() {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.texto}>Home Screen</Text>
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
        fontSize: 18,
    },
});