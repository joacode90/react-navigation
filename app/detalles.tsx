import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DetailsScreen() {
    return (
        <View style={styles.contenedor}>
            <Text>¡Esta es la pantalla de detalles!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});