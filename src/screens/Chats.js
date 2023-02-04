import ChatListItem from "../components/ChatListItem";
import React from "react";
import { Text, View, Image, StyleSheet,FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import chats from "../../assets/data/chats.json";
import { FlashList } from "@shopify/flash-list";

const Chats = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({item}) => <ChatListItem chat={item}/>}
        />
    )
}

export default Chats;