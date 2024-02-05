import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'

const Header = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <Text>WSSCM</Text>
            <FontAwesome6 name="user-circle" size={34} color="#54BA4F" />
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: "#fff",
        paddingRight: 12,
        paddingLeft: 12,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 4,
        shadowColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

export default Header