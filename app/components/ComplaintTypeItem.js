import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { COLORS, SHADOWS } from '../constants/theme'


const { width } = Dimensions.get('window');
const itemWidth = (width - 30) / 2; // Adjust padding/margins as needed

const ComplaintTypeItem = ({ complaintType }) => {

    return (
        <TouchableOpacity style={[Styles.container, complaintType.id == 5 && Styles.centeredItem]}>
            <Image style={Styles.img} source={complaintType.img} />
            <Text style={Styles.text}>{complaintType.name}</Text>
            <Text style={Styles.text}>{complaintType.urdu}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '48%',
        borderRadius: 20,
        paddingBottom: 10,
        marginBottom: 20,
        backgroundColor: "#fff",
        ...SHADOWS.medium
    },
    img: {
        height: 90,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text: {
        marginTop: 10,
        textAlign: 'center'
    },
    centeredItem: {
        marginLeft: (width - itemWidth) / 2,
        marginRight: (width - itemWidth) / 2,
    },
})

export default ComplaintTypeItem