import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground, FlatList, KeyboardAvoidingView } from "react-native";
import { FlashList } from "@shopify/flash-list";

import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";

const ChatScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bg}
        >
            <ImageBackground source={bg} style={styles.bg}>

                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    estimatedItemSize={800}
                    inverted
                    style={styles.list}
                />

                <InputBox />

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