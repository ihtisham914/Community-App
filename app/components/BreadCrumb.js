import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BreadCrumb = ({ screen, title }) => {
    const navigatation = useNavigation();
    return (
        <View style={Styles.breadCrumb}>
            <FontAwesome5 name='arrow-circle-left' size={30} color={COLORS.gray}
                onPress={() => navigatation.navigate(screen)} />
            <Text style={Styles.breadHeading}>{title}</Text>
            <Text></Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    breadCrumb: {
        margin: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    breadHeading: {
        fontSize: SIZES.medium,
        backgroundColor: COLORS.feedbackColor,
        color: COLORS.white,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 6,
    }
})


export default BreadCrumb