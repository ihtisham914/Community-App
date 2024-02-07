import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES, COLORS, FONT, SHADOWS } from '../constants/theme';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const API = axios.create({ baseURL: 'https://bb69-2407-d000-503-bdb2-8827-74e7-4dc5-c592.ngrok-free.app' });

const Login = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const [wssc, setWssc] = useState();
    const [token, setToken] = useState();


    const logIn = async () => {
        if (phone == '' || password == '') {
            return;
        } else {
            // api call
            try {
                const res = await API.post('/api/v1/auth/signin', { phone, password });
                setUser(res.data.user);
                setWssc(res.data.WSSC);
                setToken(res.data.token);
                await AsyncStorage.setItem('user', JSON.stringify(user));
                await AsyncStorage.setItem('wssc', JSON.stringify(wssc));
                await AsyncStorage.setItem('token', JSON.stringify(token));
                Alert.alert('Success', "Login successfull 🎉")
                navigation.navigate('TabNavigator', { screen: 'Home' });

            } catch (error) {
                Alert.alert('Success', `${error}`);
                if (error.response) {
                    if (error.response.status == 404) {
                        Alert.alert('Error', "User not found 😔")
                    } else if (error.response.status == 400) {
                        Alert.alert('Error', "Incorrect phone or password")
                    } else {
                        Alert.alert('Error', "Something went wrong 😟")
                    }
                }
            }

            // redirect to Home screen
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
            <TouchableOpacity style={Styles.btn} onPress={logIn}><Text style={Styles.btnText} >Login</Text></TouchableOpacity>
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