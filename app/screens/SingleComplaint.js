import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BreadCrumb from '../components/BreadCrumb'
import ComplaintCard from '../components/ComplaintCard'

const SingleComplaint = ({ route }) => {
    const complaint = route.params;
    return (
        <View style={Styles.container}>
            <BreadCrumb screen="Complaints" title="Complaint Details" />
            <ComplaintCard complaint={complaint} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        margin: 12,
        alignItems: 'center'
    },
})

export default SingleComplaint