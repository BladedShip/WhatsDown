import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ContactCard from "../components/ContactCard";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";

const Contacts = () => {

    const[users, setUsers] = useState([]);

    useEffect(() => {
        API.graphql(graphqlOperation(listUsers)).then((res) => {
            setUsers(res.data?.listUsers?.items)
        });
    },[]);

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => <ContactCard user={item} />}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Contacts;