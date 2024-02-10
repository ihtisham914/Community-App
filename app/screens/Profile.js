import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import BreadCrumb from './../components/BreadCrumb';
import { useSelector } from 'react-redux';
import { COLORS, SIZES } from '../constants/theme';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = () => {
    const { user } = useSelector((state) => state.app)

    if (user)
        return (
            <View style={Styles.container}>
                <BreadCrumb screen='Home' title='Profile' />
                <View style={Styles.imgContainer}>
                    <Image source={{ uri: user.profile_image }} style={Styles.img} />
                    <Text style={Styles.name}>{user.name}</Text>
                    <View style={Styles.cameraIcon}>
                        <FontAwesome name="camera" size={20} color="#fff" />
                    </View>
                </View>
                <View style={Styles.infoContainer}>
                    <Text style={Styles.infoLabel}>Name</Text>
                    <View style={Styles.infoInnerContainer}>
                        <Text style={Styles.infoText}>{user.name}</Text>
                        <MaterialCommunityIcons name='account-edit' size={25} color={COLORS.primary} />
                    </View>
                </View>

                <View style={Styles.infoContainer}>
                    <Text style={Styles.infoLabel}>Phone Number</Text>
                    <View style={Styles.infoInnerContainer}>
                        <Text style={Styles.infoText}>0{user.phone}</Text>
                        <MaterialCommunityIcons name='account-edit' size={25} color={COLORS.gray} />
                    </View>
                </View>

                <View style={Styles.infoContainer}>
                    <Text style={Styles.infoLabel}>Email</Text>
                    <View style={Styles.infoInnerContainer}>
                        <Text style={Styles.infoText}>{user.email}</Text>
                        <MaterialCommunityIcons name='account-edit' size={25} color={COLORS.primary} />
                    </View>
                </View>
                <View style={Styles.infoContainer}>
                    <Text style={Styles.infoLabel}>Address</Text>
                    <View style={Styles.infoInnerContainer}>
                        <Text style={Styles.infoText}>{user.address}</Text>
                        <MaterialCommunityIcons name='account-edit' size={25} color={COLORS.primary} />
                    </View>
                </View>

                <TouchableOpacity style={Styles.btn('password')}>
                    <Text style={Styles.btnText}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.btn('account')}>
                    <Text style={Styles.btnText}>Delete Account</Text>
                </TouchableOpacity>

            </View>
        )
}
const Styles = StyleSheet.create({
    container: {
        margin: 12,
    },
    imgContainer: {
        gap: 8,
        alignItems: 'center',
        position: 'relative'
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
    infoContainer: {
        marginHorizontal: 44,
        gap: 4,
        marginTop: 14,
    },
    infoLabel: {
        fontSize: 14,
        color: COLORS.gray,
    },
    infoInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoText: {
        fontSize: SIZES.medium,
        fontWeight: '600',
    },
    btn: (type) => ({
        marginHorizontal: 44,
        marginTop: type === 'password' ? 32 : 12,
        marginBottom: type === 'password' ? 0 : 14,
        alignItems: 'center',
        backgroundColor: type === 'password' ? COLORS.primary : COLORS.closedColor,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    btnText: {
        fontSize: SIZES.medium,
        color: '#fff',
    }
})

export default Profile