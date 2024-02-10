import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { complaints_types } from './../../assets/data/complaintTypes';
import ComplaintTypeItem from '../components/ComplaintTypeItem';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation()

    return (
        <View style={Styles.container}>
            <View style={Styles.tabsContainer} >
                <TouchableOpacity style={Styles.tab}>
                    <Text style={Styles.tabNumber}>02</Text>
                    <Text style={Styles.tabString}>Pending</Text>
                </TouchableOpacity>
                <Text style={Styles.divider}></Text>
                <TouchableOpacity style={Styles.tab}>
                    <Text style={Styles.tabNumber}>15</Text>
                    <Text style={Styles.tabString}>All Complaints</Text>
                </TouchableOpacity>
                <Text style={Styles.divider}></Text>
                <MaterialIcons onPress={() => navigation.navigate("Complaints")} name='keyboard-arrow-right' size={35} color={COLORS.primary} />
            </View>
            <Text style={Styles.heading}>Please choose complaint type</Text>
            <FlatList
                numColumns={2}
                data={complaints_types}
                renderItem={({ item, index }) => <ComplaintTypeItem complaintType={item} index={index} />}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ columnGap: 50, alignItems: 'center', marginVertical: 20, flexGrow: 1 }}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        margin: 12,
    },
    tabsContainer: {
        marginTop: 4,
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderColor: COLORS.primary,
        borderWidth: 1,
        ...SHADOWS.medium,
        gap: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tab: {
        alignItems: 'center'
    },
    tabNumber: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: '700',
    },
    tabString: {
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    divider: {
        borderColor: COLORS.gray2,
        borderWidth: 1,
    },
    heading: {
        marginTop: 20,
        fontSize: SIZES.large,
        fontWeight: '500',
        color: COLORS.gray,
        textAlign: 'center',
    },
})

export default Home