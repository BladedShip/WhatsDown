import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createMessage, updateChatRoom } from "../../graphql/mutations";


const InputBox = ({ chatroom }) => {

    const onSend = async () => {

        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        const newMessage = {
            chatroomID: chatroom.id,
            text: message,
            userID: authUser.attributes.sub,
        }
        const newMessageData = await API.graphql(graphqlOperation(createMessage, {
            input: newMessage
        }));
        setMessage('');

        await API.graphql(graphqlOperation(updateChatRoom, {
            input: {
                _version: chatroom._version,
                chatRoomLastMessageId: newMessageData.data.createMessage.id,
                id: chatroom.id,
            }
        }));
    }

    const [message, setMessage] = useState('');

    return (
        <SafeAreaView style={styles.container} edges={["bottom"]}>

            <AntDesign
                name="plus"
                size={24}
                color="royalblue"
            />

            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message"
                style={styles.textInput}
            />

            <MaterialIcons
                name="send"
                color='white'
                size={20}
                style={styles.send}
                onPress={onSend}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: 'whitesmoke',
        padding: 5,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 6,
        borderRadius: 20,
        overflow: 'hidden',
    },
});

export default InputBox;