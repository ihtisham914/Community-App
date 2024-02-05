import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BreadCrumb from './../components/BreadCrumb';

const Profile = () => {
    return (
        <View style={Styles.container}><BreadCrumb screen='Home' title='Profile' /></View>
    )
}
const Styles = StyleSheet.create({
    container: {
        margin: 12,
    },
})

export default Profile