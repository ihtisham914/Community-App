import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native'
import BreadCrumb from './../components/BreadCrumb';
import ComplaintCard from '../components/ComplaintCard';
import { API } from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/Loader';

const Complaints = () => {
    const [complaintsAll, setComplaintsAll] = useState(null);
    const [loading, setLoading] = useState(true)
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
            Alert.alert('Error', `${error}`)
        }
    }

    useEffect(() => {
        getComplaints();
    }, [])
    return (
        <View style={Styles.container}>
            <BreadCrumb screen='Home' title='Complaints' />
            {!loading ? <FlatList data={complaintsAll} renderItem={({ item }) => <ComplaintCard complaint={item} />} contentContainerStyle={{ rowGap: 10, marginVertical: 20 }} /> :
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