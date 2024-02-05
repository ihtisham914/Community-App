import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../app/screens/Home';
import Complaints from '../app/screens/Complaints';
import Login from './../app/screens/Login';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import SignUP from './../app/screens/SignUP';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const [user, setUser] = useState(false);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <Stack.Screen
                        name="TabNavigator"
                        component={TabNavigator}
                        options={{
                            header: (props) => <Header {...props} />,
                        }}
                    />
                ) : (
                    <>
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
                    </>

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
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#54BA4F',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Tab.Screen name='Complaints' component={Complaints} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default TabNavigation;