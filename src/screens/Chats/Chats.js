import ChatListItem from "../../components/ChatListItem";
import React, { useEffect,useState } from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listChatRooms } from "./queries";
import { FlashList } from "@shopify/flash-list";

const Chats = () => {

    const [chatRooms,setChatRooms] = useState([]);

    useEffect(() => {
        const fetchChatRooms = async () => {

            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

            const res = await API.graphql(graphqlOperation(
                listChatRooms, { id: authUser.attributes.sub }
            ));
            setChatRooms(res.data.getUser.ChatRooms.items);
        };
        fetchChatRooms();
    },[])
    return (
        <FlatList
            data={chatRooms}
            renderItem={({ item }) => <ChatListItem chat={item.chatRoom} />}
        />
    )
}

export default Chats;