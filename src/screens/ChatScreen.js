import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet, ImageBackground, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { API, graphqlOperation } from "aws-amplify";
import { getChatRoom } from "../graphql/queries";

import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";

const ChatScreen = () => {

    const [chatRoom, setChatRoom] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    const chatroomID = route.params.id;

    useEffect(() => {
        API.graphql(graphqlOperation(getChatRoom, { id: chatroomID })).then((res) => {
            setChatRoom(res.data.getChatRoom);
        })
    }, []);

    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params.name]);

    if (!chatRoom) {
        return <ActivityIndicator />
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bg}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 160}
        >
            <ImageBackground source={bg} style={styles.bg}>

                <FlatList
                    data={chatRoom.Messages.items}
                    renderItem={({ item }) => <Message message={item} />}
                    inverted
                    style={styles.list}
                />

                <InputBox chatroom={chatRoom} />

            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    },
})
export default ChatScreen;