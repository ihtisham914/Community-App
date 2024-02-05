import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <View style={Styles.container}><Text>Home Screen</Text></View>
    )
}

const Styles = StyleSheet.create({
    container: {
        margin: 12,
    },
})

export default Home