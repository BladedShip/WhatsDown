import React, { useEffect,useState } from "react";
import { Text, View, Image, StyleSheet,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation,Auth } from "aws-amplify";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);



const ChatListItem = ({chat}) => {

    const navigation = useNavigation();
    const [user,setUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async ()=>{
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            const userItem = chat.users.items.find(item=>item.user.id!==authUser.attributes.sub);
            setUser(userItem?.user);
        };
        fetchUsers();
    },[]);

    

    return (
        <Pressable style={styles.container} onPress={()=>navigation.navigate('ChatScreen',{ id:chat.id,name:user?.name })}>
            <Image
                source={{ uri: user?.image }}
                style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{user?.name}</Text>
                    <Text style={styles.subTitle}>{dayjs(chat.LastMessage?.createdAt).fromNow()}</Text>
                </View>

                <Text style={styles.subTitle} numberOfLines={2}>{chat.LastMessage?.text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius:30,
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    content:{
        flex:1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "light-grey",
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    name: {
        flex:1,
        fontWeight: "bold",
    },
    subTitle: {
        color: "grey",
    },
});

export default ChatListItem;

