import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'

const Header = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.logoName}>WSSCM</Text>
            <View style={Styles.iconContainer}>
                <FontAwesome6 name="bell" size={30} color={COLORS.feedbackColor} />
                <FontAwesome6 name="user-circle" size={30} color={COLORS.primary} />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: "#fff",
        paddingRight: 12,
        paddingLeft: 12,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
    logoName: {
        fontSize: SIZES.medium,
        fontWeight: '500'
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 10,
    }
})

export default Header