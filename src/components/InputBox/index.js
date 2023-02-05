import React,{useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";


const InputBox = () => {

    const onSend = () => {
        setMessage('');
    }

    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>

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

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor:'whitesmoke',
        padding:5,
        alignItems:"center",
        paddingHorizontal:10,
    },
    textInput: {
        flex:1,
        backgroundColor:'white',
        padding:5,
        borderRadius:15,
        paddingHorizontal:10,
        borderColor:'lightgrey',
        borderWidth:StyleSheet.hairlineWidth,
        marginHorizontal:10,
    },
    send: {
        backgroundColor:'royalblue',
        padding:6,
        borderRadius:20,
        overflow:'hidden',
    },
});

export default InputBox;