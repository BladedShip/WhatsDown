import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { API, Auth } from "aws-amplify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


const Message = ({ message }) => {

    const [isSelf, setIsSelf] = useState(false);

    useEffect(() => {
        const isMyMessage = async () => {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            setIsSelf(message.userID === authUser.attributes.sub);
        };
        isMyMessage();
    }, []);

    return (
        <View style={[styles.container, {
            backgroundColor: isSelf ? "#DCF8C5" : "white",
            alignSelf: isSelf ? "flex-end" : "flex-start",
        }]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    time: {
        color: "grey",
        alignSelf: "flex-end",
    }
});

export default Message;