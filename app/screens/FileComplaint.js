import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { SIZES, COLORS, SHADOWS } from '../constants/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const FileComplaint = ({ route }) => {
    const type = route.params.complaintType;
    const navigation = useNavigation()
    return (
        <View style={Styles.container}>
            <View style={Styles.breadCrumb}>
                <FontAwesome5 name='arrow-circle-left' size={30} color={COLORS.gray}
                    onPress={() => navigation.navigate("Home")} />
                <Text style={Styles.breadHeading}>{type}</Text>
                <Text style={Styles.blank}></Text>
            </View>

            {/* Complaint form */}
            <View style={Styles.form}>

                <View style={Styles.formContainer}>
                    <Text style={Styles.label}>Address</Text>
                    <TextInput style={Styles.input} placeholder='Enter address here' />
                </View>
                <View style={Styles.formContainer}>
                    <Text style={Styles.label}>Description</Text>
                    <TextInput style={Styles.input} placeholder='Describe your problem' multiline={true} numberOfLines={4} />
                </View>

                {/* show media */}
                <View style={Styles.mediaContainer}>

                </View>

                {/* media button */}
                <View style={Styles.btnContainer}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btnText}>Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btnText}>Video</Text>
                    </TouchableOpacity>
                </View>
                {/* submit button */}
                <View style={Styles.submitContainer}>
                    <TouchableOpacity style={Styles.btnSubmit}>
                        <Text style={Styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        margin: 12,
    },
    breadCrumb: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    breadHeading: {
        fontSize: SIZES.medium,
        backgroundColor: COLORS.feedbackColor,
        color: COLORS.white,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    blank: {
        width: 32,
    },
    form: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 12,
    },
    formContainer: {
        marginTop: 22,
        gap: 4,
    },
    label: {
        fontSize: SIZES.large
    },
    input: {
        textAlignVertical: 'top',
        backgroundColor: '#fff',
        padding: 10,
        fontSize: 18,
        borderRadius: 8,
        ...SHADOWS.small,
    },
    mediaContainer: {
        marginTop: 24,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        height: 100,
        ...SHADOWS.small
    },
    btnContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    submitContainer: {
        marginTop: 28,
    },
    btn: {
        backgroundColor: COLORS.feedbackColor,
        paddingVertical: 6,
        paddingHorizontal: 14,
        alignItems: 'center',
        borderRadius: 12,
    },
    btnSubmit: {
        backgroundColor: COLORS.primary,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText: {
        fontSize: SIZES.large,
        color: '#fff'
    }
})

export default FileComplaint