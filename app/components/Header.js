import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, Image, ToastAndroid } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../GlobalState/UserSlice'
import { FontAwesome } from '@expo/vector-icons'

const Header = () => {
    const dispatch = useDispatch()
    const { wssc, user } = useSelector((state) => state.app)

    const logOut = () => {
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('wssc');
        AsyncStorage.removeItem('token');
        dispatch(LogOut())

        ToastAndroid.showWithGravity(
            'Logged out successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }
    return (
        user && wssc && <SafeAreaView style={Styles.container}>
            <View style={Styles.iconContainer}>
                <Image style={Styles.img} source={require('../../assets/Logo.png')} />
                <Text style={Styles.logoName}>{wssc.shortname}</Text>
            </View>
            <View style={Styles.iconContainer}>
                <FontAwesome6 name="bell" size={25} color={COLORS.feedbackColor} />
                <TouchableOpacity onPress={logOut}>
                    {
                        user.profile_image ? <Image style={Styles.img} source={{ uri: user.profile_image }} /> : <FontAwesome name='user-circle' size={35} color={COLORS.primary} />
                    }
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
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