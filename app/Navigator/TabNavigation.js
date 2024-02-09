import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../screens/Home';
import Complaints from '../screens/Complaints';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import SignUP from '../screens/SignUP';
import { COLORS } from '../constants/theme';
import SingleComplaint from '../screens/SingleComplaint';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const token = useSelector((state) => state.app.token)
    // const [token, setToken] = useState(null);

    // const getToken = async () => {
    //     try {
    //         const storedToken = await AsyncStorage.getItem('token');
    //         const token = JSON.parse(storedToken);
    //         setToken(token);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     getToken();
    // }, [token])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token ? (
                    <Stack.Group>
                        <Stack.Screen
                            name="TabNavigator"
                            component={TabNavigator}
                            options={{
                                header: (props) => <Header {...props} />,
                            }}
                        />
                    </Stack.Group>
                ) : (
                    <Stack.Group>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={SignUP}
                            options={{ headerShown: false }}
                        />
                    </Stack.Group>

                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Complaints') {
                        iconName = focused ? 'file-tray' : 'file-tray-outline';
                    } else {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarStyle: {
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 10,
                },
            })}
            tabBarOptions={{
                activeTintColor: COLORS.primary,
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Tab.Screen name='Complaints' component={Complaints} options={{ headerShown: false }} />
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Tab.Screen
                name="SingleComplaint"
                component={SingleComplaint}
                options={{
                    headerShown: false,
                    tabBarIcon: () => null, // Hide the icon
                    tabBarLabel: () => null, // Hide the label
                    tabBarButton: () => null, // Hide the entire tab button
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;