import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, Image } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Touchable } from 'react-native'

const Header = () => {
    const [user, setUser] = useState();
    const [wssc, setWssc] = useState();
    const navigation = useNavigation()
    const getUser = async () => {
        try {
            const storedWssc = await AsyncStorage.getItem('wssc');
            const wssc = JSON.parse(storedWssc);
            setWssc(wssc);
            const storedUser = await AsyncStorage.getItem('user');
            const user = JSON.parse(storedUser);
            setUser(user);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser();
    }, [])

    const logOut = () => {
        Alert.alert("success", "Logout successfull")
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('wssc');
        AsyncStorage.removeItem('token');
        navigation.navigate('Login');
    }
    return (
        user && wssc && <SafeAreaView style={Styles.container}>
            <View style={Styles.iconContainer}>
                <Image style={Styles.img} source={require('../../assets/Logo.png')} />
                <Text style={Styles.logoName}>{wssc.shortname}</Text>
            </View>
            <View style={Styles.iconContainer}>
                <FontAwesome6 name="bell" size={30} color={COLORS.feedbackColor} />
                <TouchableOpacity onPress={logOut}>
                    <Image style={Styles.img} source={{ uri: user.profile_image }} />
                </TouchableOpacity>
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
        fontSize: SIZES.large,
        fontWeight: '500'
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    img: {
        height: 35,
        width: 35,
        borderRadius: 30,
    }
})

export default Header