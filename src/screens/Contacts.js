import React from "react";
import { StyleSheet, Text, View,FlatList } from "react-native";
import ContactCard from "../components/ContactCard";
import chats from "../../assets/data/chats";

const Contacts = () => {
    return (
        <View style={styles.container}>
        <FlatList
                    data={chats}
                    renderItem={({ item }) => <ContactCard user={item.user} />}
                    style={styles.list}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});

export default Contacts;