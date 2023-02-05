import ChatListItem from "../components/ChatListItem";
import React from "react";
import { Text, View, Image, StyleSheet,FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import chats from "../../assets/data/chats.json";
import { FlashList } from "@shopify/flash-list";

const Chats = () => {
    return (
        <FlashList
            data={chats}
            renderItem={({item}) => <ChatListItem chat={item}/>}
            estimatedItemSize={80}
        />
    )
}

export default Chats;