import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Alert, RefreshControl } from 'react-native'
import BreadCrumb from './../components/BreadCrumb';
import ComplaintCard from '../components/ComplaintCard';
import { API } from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/Loader';

const Complaints = () => {
    const [complaintsAll, setComplaintsAll] = useState(null);
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])
    const getComplaints = async () => {
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
    }

    useEffect(() => {
        getComplaints();
    }, [])
    return (
        <View style={Styles.container}>
            <BreadCrumb screen='H0ome' title='Complaints' />
            {!loading ? <FlatList data={complaintsAll} renderItem={({ item }) => <ComplaintCard complaint={item} />} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            } contentContainerStyle={{ rowGap: 10, marginVertical: 20, alignItems: 'center' }} /> :
                <Loader />}
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        margin: 12,
        alignItems: 'center'
    },
})

export default Complaints