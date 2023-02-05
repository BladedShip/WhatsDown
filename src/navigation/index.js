import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ChatScreen from '../screens/ChatScreen';
import MainTabNavigator from './MainTabNavigator';
import Contacts from '../screens/Contacts';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: "whitesmoke"},
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={MainTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                />
                <Stack.Screen
                    name="Contacts"
                    component = {Contacts}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Navigator;