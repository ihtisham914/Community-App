import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SIZES, COLORS } from '../constants/theme'
import { FontAwesome } from '@expo/vector-icons'
const placeholder = require('../../assets/user.jpg')

const Avatar = ({ uri, user, setIsModal, update }) => {
    return (
        <View style={Styles.imgContainer}>
            {update ? <Image source={{ uri }} style={Styles.img} /> : <>
                {!update && user.profile_image ? <Image source={{ uri: user.profile_image }} style={Styles.img} /> : <Image source={placeholder} style={Styles.img} />}
            </>}

            <Text style={Styles.name}>{user.name}</Text>
            <TouchableOpacity style={Styles.cameraIcon} onPress={() => setIsModal(true)}>
                <FontAwesome name="camera" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    imgContainer: {
        gap: 8,
        alignItems: 'center',
        position: 'relative',
        marginTop: 12,
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 100,
        objectFit: 'cover'
    },
    name: {
        fontSize: SIZES.xLarge,
        fontWeight: '700',
        textTransform: "capitalize"
    },
    cameraIcon: {
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        padding: 8,
        position: 'absolute',
        bottom: "20%",
        right: "32%",
    },
})

export default Avatar