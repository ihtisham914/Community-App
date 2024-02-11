import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import BreadCrumb from './../components/BreadCrumb';
import ComplaintCard from '../components/ComplaintCard';
import { API } from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/Loader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const Complaints = () => {
    const [complaintsAll, setComplaintsAll] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    // const getComplaints = async () => {
    //     try {
    //         const storedToken = await AsyncStorage.getItem('token');
    //         const token = JSON.parse(storedToken);

    //         // API call to get all complaints
    //         const res = await API.get('/api/v1/complaints', {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         })

    //         setComplaintsAll(res.data.allComplaints);
    //         setLoading(false)

    //     } catch (error) {
    //         setLoading(false)
    //         ToastAndroid.showWithGravity(
    //             'Something went wrong!',
    //             ToastAndroid.SHORT,
    //             ToastAndroid.CENTER,
    //         );
    //     }
    // }

    useEffect(() => {
        navigation.addListener('focus', async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                const token = JSON.parse(storedToken);

                // API call to get all complaints
                const res = await API.get('/api/v1/complaints', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })

                setComplaintsAll(res.data.allComplaints);
                setLoading(false)

            } catch (error) {
                setLoading(false)
                ToastAndroid.showWithGravity(
                    'Something went wrong!',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );
            }
        })
    }, [])
    return (
        <View style={Styles.container} >
            <BreadCrumb screen='H0ome' title='Complaints' />
            {complaintsAll.length == 0 && !loading && <View style={Styles.msgContainer}>
                <Text style={Styles.msgHeading}>No Complaints to show 😟</Text>
                <Text style={Styles.msgText}>Click below file your first complaint</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={Styles.msgBtn}><Text style={Styles.btnText}>Complaint</Text></TouchableOpacity>
            </View>}
            {!loading ? <FlatList data={complaintsAll} renderItem={({ item, index }) => <ComplaintCard complaint={item} index={index} />} contentContainerStyle={{ rowGap: 10, paddingTop: 20, paddingBottom: 50, alignItems: 'center' }} showsVerticalScrollIndicator={false} /> : <>
                {complaintsAll.length === 0 && loading && <Loader />}
            </>}
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        margin: 12,
        alignItems: 'center'
    },
    msgContainer: {
        marginTop: 250,
        width: '100%',
        alignItems: 'center',
        gap: 10,
    },
    msgHeading: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.gray
    },
    msgText: {
        fontSize: SIZES.small
    },
    msgBtn: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
    },
    btnText: {
        color: '#fff',
        fontSize: SIZES.medium
    }
})

export default Complaints