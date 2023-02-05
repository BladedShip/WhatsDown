import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from "@expo/vector-icons";

import Chats from "../screens/Chats";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import Settings from "../screens/Settings";


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "whitesmoke",
                },
                headerStyle: {
                    backgroundColor: "whitesmoke",
                }
            }}
        >
            <Tab.Screen
                name="Status"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="logo-whatsapp"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Calls"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="call-outline"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Camera"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="camera-outline"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Chats"
                component={Chats}
                options={({navigation}) => ({
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="chatbox-outline"
                                size={size}
                                color={color}
                            />
                        )
                    },
                    headerRight: () => {
                        return (
                            <Entypo
                                name="new-message"
                                size={18}
                                color={"royalblue"}
                                style={{ marginRight: 15 }}
                                onPress={() => navigation.navigate("Contacts")}
                            />
                        )
                    }
                })}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="settings-outline"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;