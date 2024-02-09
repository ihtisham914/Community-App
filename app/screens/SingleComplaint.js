import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BreadCrumb from '../components/BreadCrumb'
import ComplaintCard from '../components/ComplaintCard'

const SingleComplaint = ({ route }) => {
    const complaint = route.params;
    return (
        <View style={Styles.container}>
            <BreadCrumb screen="Complaints" title="Complaint Details" />
            <View style={Styles.complaint}></View>
            <ComplaintCard complaint={complaint} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        margin: 12,
        alignItems: 'center'
    },
    complaint: {
        marginTop: 18,
    }
})

export default SingleComplaint