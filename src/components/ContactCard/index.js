import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CellContainer } from "@shopify/flash-list";
dayjs.extend(relativeTime);



const ContactCard = ({ user }) => {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => {}}>
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
        alignItems:"center",
    },
    name: {
        fontWeight: "bold",
    },
    content:{
        
    },
    subTitle: {
        color: "grey",
    }
});

export default ContactCard;

