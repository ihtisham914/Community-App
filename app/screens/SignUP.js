import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome6 } from '@expo/vector-icons';
import { SIZES, COLORS, FONT, SHADOWS } from '../constants/theme';

const SignUP = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isFocus, setIsFocus] = useState();
    const [city, setCity] = useState('');

    const data = [
        { label: 'Peshawar', value: 'Peshawar' },
        { label: 'Mardan', value: 'Mardan' },
        { label: 'Kohat', value: 'Kohat' },
    ];

    const signUp = () => {
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
                <TextInput style={Styles.input} placeholder='Your Name' keyboardType='name-phone-pad' onChangeText={(value) => setName(value)} />
                <TextInput style={Styles.input} placeholder='Mobile Number' keyboardType='number-pad' onChangeText={(value) => setPhone(value)} />
                <TextInput style={Styles.input} placeholder='Create Password' keyboardType='ascii-capable' onChangeText={(value) => setPassword(value)} />
                <TextInput style={Styles.input} placeholder='Confirm Password' keyboardType='ascii-capable' onChangeText={(value) => setConfirmPass(value)} />
                <Dropdown
                    style={[Styles.dropdown, isFocus && { borderColor: COLORS.primary }]}
                    placeholderStyle={Styles.placeholderStyle}
                    selectedTextStyle={Styles.selectedTextStyle}
                    inputSearchStyle={Styles.inputSearchStyle}
                    iconStyle={Styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={city}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setCity(item.value);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <FontAwesome6
                            style={Styles.icon}
                            color={isFocus ? COLORS.primary : 'black'}
                            name="map"
                            size={20}
                        />
                    )}
                />

            </View>
            <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Home'
            )}><Text style={Styles.btnText}>Sign Up</Text></TouchableOpacity>
            <View style={Styles.linkContainer}>
                <Text>Already have an account?</Text>
                <Text style={Styles.link} onPress={() => navigation.navigate("Login")}>Login</Text>
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
    dropdown: {
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
        ...SHADOWS.small,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

})

export default SignUP