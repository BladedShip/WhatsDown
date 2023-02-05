import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground,FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";

import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";

const ChatScreen = () => {
    return(
        <ImageBackground source={bg} style={styles.bg}>

            <FlatList
                data={messages}
                renderItem={({item}) => <Message message={item}/>}
                estimatedItemSize={800}
                inverted
                style={styles.list}
            />
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list:{
        padding: 10,
    },
})
export default ChatScreen;