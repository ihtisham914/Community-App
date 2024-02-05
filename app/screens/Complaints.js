import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BreadCrumb from './../components/BreadCrumb';

const Complaints = () => {
    return (
        <View style={Styles.container}><BreadCrumb screen='Home' title='Complaints' /></View>
    )
}
const Styles = StyleSheet.create({
    container: {
        margin: 12,
    },
})

export default Complaints