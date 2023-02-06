import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation,Auth } from "aws-amplify";
import { createChatRoom, createUserChatRoom } from "../../graphql/mutations";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CellContainer } from "@shopify/flash-list";
dayjs.extend(relativeTime);



const ContactCard = ({ user }) => {

    const navigation = useNavigation();

    const onPress = async () => {

        //check if chatroom exists, skip to nav

        //else, create a chatroom
        const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom,{
            input: {}
        }));

        if(!newChatRoomData.data?.createChatRoom){
            console.log("Failed to create a chatroom");
            return;
        }

        const newChatRoom = newChatRoomData.data?.createChatRoom;

        //add clicked user to chatroom
        await API.graphql(graphqlOperation(createUserChatRoom,{
            input: {
                chatRoomId: newChatRoom.id,
                userId: user.id,
            }
        }))

        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        
        await API.graphql(graphqlOperation(createUserChatRoom,{
            input: {
                chatRoomId: newChatRoom.id,
                userId: authUser.attributes.sub,
            }
        }))

        //navigate to new chatroom
        navigation.navigate("ChatScreen", {id:newChatRoom.id});

    }

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image
                source={{ uri: user.image }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
                <Text style={styles.subTitle} numberOfLines={2}>{user.status}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: "center",
    },
    name: {
        fontWeight: "bold",
    },
    content: {
        flex: 1,
    },
    subTitle: {
        color: "grey",
    }
});

export default ContactCard;

