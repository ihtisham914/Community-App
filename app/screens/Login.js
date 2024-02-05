import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome6 } from '@expo/vector-icons';
import { SIZES, COLORS, FONT, SHADOWS } from '../constants/theme';

const Login = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState('');


    const logIn = () => {
        if (name == '' || phone == '' || password == '' || confirmPass == '' || city == '') {
            return;
        } else {
            // api call


            // redirect to login screen

        }
    }

    return (
        <View style={Styles.container}>
            <Image
                style={Styles.logo}
                source={require('../../assets/Logo.png')}
            />
            <Text>Your Voice, Our Commitment</Text>
            <View style={Styles.form}>
                <TextInput style={Styles.input} placeholder='Mobile Number' keyboardType='number-pad' onChangeText={(value) => setPhone(value)} />
                <TextInput style={Styles.input} placeholder='Enter Password' keyboardType='ascii-capable' onChangeText={(value) => setPassword(value)} />

            </View>
            <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Home'
            )}><Text style={Styles.btnText}>Login</Text></TouchableOpacity>
            <View style={Styles.linkContainer}>
                <Text>Already have an account?</Text>
                <Text style={Styles.link} onPress={() => navigation.navigate("SignUp")}> Sign Up</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
        gap: 24,
    },
    logo: {
        height: 150,
        width: 150,
    },
    form: {
        width: '100%',
        gap: 10,
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        fontSize: 18,
        borderRadius: 8,
        ...SHADOWS.small,
    },
    btn: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    linkContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },

})

export default Login